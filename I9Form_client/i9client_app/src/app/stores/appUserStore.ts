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
  loadUsers = async () => {
    this.setLoadingInitial(true);
    //syncrhonous code in try catch
    try {
      //TODO: will need this pattern for parsing date
      const users = await agent.Users.list();
      users.forEach((user) => {
        this.setUser(user);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  //TODO: Method needs to return a user. Return IF & TRY
  loadUser = async (id: string) => {
    let user = this.getUser(id);
    if (user) {
      this.selectedUser = user; //WE can access this from the details page
      return user;
    } else {
      this.setLoadingInitial(true);
      try {
        user = await agent.Users.details(id);
        //if the user id returns THEN set loadInitials
        this.setUser(user);
        //set the user from db w/ user object
        runInAction(()=> this.selectedUser = user); //<- RESOLVES the MOBX 'modify' error in the broswer inspect
        this.setLoadingInitial(false);
        return user;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  private setUser = (user: User) => {
    // user.date = user.date.split('T')[0];
    this.userRegistry.set(user.id, user);
  };

  private getUser = (id: string) => {
    return this.userRegistry.get(id);
  };
  //Alterantive to wrapping the above action with runAction method wrapper
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createUser = async (user: User) => {
    this.setLoadingInitial(true);
    user.id = uuid();
    try {
      await agent.Users.register(user);
      runInAction(() => {
        // this.users.push(user);
        //Using MAP
        this.userRegistry.set(user.id, user);
        this.selectedUser = user;
        this.editMode = false;
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };
  updateUser = async (user: User) => {
    this.setLoadingInitial(true);
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
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };
  deleteUser = async (id: string) => {
    this.setLoadingInitial(true);
    try {
      await agent.Users.delete(id);
      runInAction(() => {
        // this.users = [...this.users.filter((u) => u.id !== id)];
        this.userRegistry.delete(id);
        //turn off loading
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };
}
