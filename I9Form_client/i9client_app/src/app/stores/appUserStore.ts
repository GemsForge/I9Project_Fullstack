import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import User from "../features/user/user.type";
import { v4 as uuid } from "uuid";

export default class AppUserStore {
  //Create properties needed
  users: User[] = []; //init state = empty around
  //MAP<user.id, User>, We can sort by a field. username, role, etc
  userRegistry = new Map<string, User>();
  selectedUser: User | undefined = undefined; //init state = User or Null
  editMode = false;
  loading = false;
  loadingInitial = true; //THIS is what gets observered
  submitting = false;

  constructor() {
    //THIS function is getting called when THIS key word is used
    // makeObservable(this,{
    //     title: observable,
    //     setTitle: action
    // })

    //Auto will observe all of the variables in the store
    makeAutoObservable(this);
  }
  //COMPUTED property prop
  get userByName() {
    return Array.from(this.userRegistry.values()).sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1
    );
  }

  //ACTION
  //We can
  loadUsers = async () => {
    
    //syncrhonous code in try catch
    try {
      //TODO: will need this pattern for parsing date
      const users = await agent.Users.list();
      users.forEach((user) => {
        // user.date = user.date.split('T')[0];
        this.userRegistry.set(user.id, user);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  //Alterantive to wrapping the above action with runAction method wrapper
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  selectUser = (id: string) => {
    // this.selectedUser = this.users.find((u) => u.id === id);

    //Using MAP
    this.selectedUser = this.userRegistry.get(id);
  };
  cancelSelectUser = () => {
    this.selectedUser = undefined;
  };
  openForm = (id?: string) => {
    //IF onClick={(id)}
    id ? this.selectUser(id) : this.cancelSelectUser();
    this.editMode = true;
  };
  closeForm = () => {
    this.editMode = false;
  };
  createUser = async (user: User) => {
    this.loading = true;
    user.id = uuid();
    try {
      await agent.Users.register(user);
      runInAction(() => {
        // this.users.push(user);
        //Using MAP
        this.userRegistry.set(user.id, user);
        this.selectedUser = user;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
  updateUser = async (user: User) => {
    this.loading = true;
    try {
      await agent.Users.update(user);
      runInAction(() => {
        // this.users = [
        //   ...this.users.filter((u) => u.id !== user.id),
        //   user];
        //Using MAP
        this.userRegistry.set(user.id, user);
        this.selectedUser = user;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
  deleteUser = async (id: string) => {
    this.loading = true;
    try {
      await agent.Users.delete(id);
      runInAction(() => {
        // this.users = [...this.users.filter((u) => u.id !== id)];
        this.userRegistry.delete(id);
        //IF the id passed into function matches the selected user id in the db, call the cancelSelectUser()
        if (this.selectedUser?.id === id) this.cancelSelectUser();
        //turn off loading
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
