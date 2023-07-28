import { useEffect, useState } from "react";
import { AppUser } from "../Components/Register";
import axios from "axios";

export default function Register(){

    const [appUsers, setAppUser] = useState<AppUser[]> ([]);
    const[selectedAppUser, setSelectedAppUser] = useState<AppUser | undefined>(undefined);


useEffect(() => {
    axios.post<AppUser[]>("http://localhost:5000/api/appusers").then(response => {setAppUser(response.data);
})
}, [])
}