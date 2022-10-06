import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";
import { RegisterFormProps } from "../components/RegisterForm/RegisterForm.types";
import { auth } from "../services/http/route/endpoints/auth";

const RegisterPage = () => {
  const handleRegister: RegisterFormProps["onRegister"] = (values) => {
    auth
      .register(values)
      .then(() => {
        toast.success("Registration Successful");
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
