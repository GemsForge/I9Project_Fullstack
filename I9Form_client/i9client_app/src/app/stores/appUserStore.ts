import{makeObservable, observable} from "mobx";

export default class AppUserStore{
    title='Hello from MOBX!';

    constructor(){
        //THIS function is getting called when THIS key word is used
        makeObservable(this,{
            title: observable
        })
    }
}