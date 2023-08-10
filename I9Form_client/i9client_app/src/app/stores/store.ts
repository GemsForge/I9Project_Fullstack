import { createContext, useContext } from "react";
import AppUserStore from "./appUserStore";

//Create store
interface Store {
  //Specify type (class) of store
  appUserStore: AppUserStore;
}

//All stores will be added here
export const store: Store = {
  //create new INSTANCE of appUserStore
  appUserStore: new AppUserStore(),
};
//import createContext from react
export const StoreContext = createContext(store);

//This react hook will allow dev to access store in components
export function useStore() {
  return useContext(StoreContext);
}
