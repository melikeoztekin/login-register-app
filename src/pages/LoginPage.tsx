import axios from "axios";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import { LoginFormProps } from "../components/LoginForm/LoginForm.types";

export type LoginPageProps = {
  onSuccess: (token: string) => void;
};

const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate();

  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    axios
      .post("http://localhost:80/auth/login", values)
      .then((response) => {
        toast.success(response.data);
        props.onSuccess?.(response.data.token);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
