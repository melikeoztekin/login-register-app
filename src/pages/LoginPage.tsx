import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import { LoginFormProps } from "../components/LoginForm/LoginForm.types";
import { useLoginContext } from "../contexts/LoginContext/LoginContext";
import { auth } from "../services/http/route/endpoints/auth";

export type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate();
  const { login } = useLoginContext();

  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    auth
      .login(values)
      .then((response) => {
        login(response.data.token, response.data.username);
        toast.success(response.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
