import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Message } from "semantic-ui-react"
//const limited to file
const required = (value: any) => {
    if (!value) {
      return (
        <Message floating>
          This field is required!
        </Message>
      );
    }
  };

  const Login = () => {
    let navigate = useNavigate();
  
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
  
      setMessage("");
      setLoading(true);
  
      // form.current.validateAll();

      // if (checkBtn.current.context._errors.length === 0) {
      //   AuthService.login(username, password).then(
      //     () => {
      //       navigate("/profile");
      //       window.location.reload();
      //     },
      //     (error) => {
      //       const resMessage =
      //         (error.response &&
      //           error.response.data &&
      //           error.response.data.message) ||
      //         error.message ||
      //         error.toString();
  
      //       setLoading(false);
      //       setMessage(resMessage);
      //     }
      //   );
      // } else {
      //   setLoading(false);
      }
    };
  

