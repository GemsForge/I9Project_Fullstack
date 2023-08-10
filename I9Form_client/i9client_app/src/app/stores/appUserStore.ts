import{makeAutoObservable, observable, action} from "mobx";

export default class AppUserStore{
    title='Hello from MOBX!';

    constructor(){
        //THIS function is getting called when THIS key word is used
        // makeObservable(this,{
        //     title: observable,
        //     setTitle: action
        // })

        //Auto will observe all of the variables in the store
        makeAutoObservable(this)
    }

    setTitle(){
        this.title = this.title + '!';
    }
}