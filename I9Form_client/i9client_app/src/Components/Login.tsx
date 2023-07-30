import React, { useRef, useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {login} from "../services/auth.service";
import LoginView from "./Login/LoginForm";
import IUser from "../types/user.type";
import { Button, ButtonProps } from "semantic-ui-react";

type Props = {}

function Login: React.FC<Props> n() {
    let navigate: NavigateFunction = useNavigate();


    // const form: Form = useRef();
    // const checkBtn: ButtonProps = useRef();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [username, setUsername] = useState<IUser["username"]>("");
    const [password, setPassword] = useState<IUser["password"]>("");


    const initialValues: {
        username: string;
        password: string;
    } = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });

    const handleLogin = (formValue: { username: string; password: string; }) => {
        const { username, password } = formValue;

        setMessage("");
        setLoading(true);
    

      login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    };
    return {
        Login
    };
}