import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";
import { RegisterFormProps } from "../components/RegisterForm/RegisterForm.types";
import { useLoginContext } from "../contexts/LoginContext/LoginContext";
import { auth } from "../services/http/route/endpoints/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useLoginContext();
  const handleRegister: RegisterFormProps["onRegister"] = (values) => {
    auth
      .register(values)
      .then(({ data }) => {
        toast.success("Registration Successful");
        login(data.token, data.username);
        navigate("/");
      })
      .catch((error) => {
        error.response.status === 401
          ? toast.error(error.response.data)
          : toast.error(error.response.data.issues[0].message);
      });
  };

  return <RegisterForm onRegister={handleRegister} />;
};

export default RegisterPage;
