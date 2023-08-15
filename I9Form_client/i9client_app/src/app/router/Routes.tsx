import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../features/home/HomePage";
import AppUserRegister from "../features/user/dashboard/appUser.register";
import AppUserDashboard from "../features/user/dashboard/appUser.dashboard";
import AppUserDetails from "../features/user/dashboard/appUser.details";


export const routes : RouteObject[]= [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'appUsers', element: <AppUserDashboard/>},
            {path: 'appUsers/:id', element: <AppUserDetails/>},
            //ADD a key to differientiate the to paths/ Resets the state between the paths
            {path: 'registerUser', element: <AppUserRegister key="register"/>},
            {path: 'manageUser/:id', element: <AppUserRegister key="manage"/>}//loads the form but with user information for 'edit' 
        ]
    }

]
export const router= createBrowserRouter(routes);


