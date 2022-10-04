import axios from "axios";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import PasswordChangeForm from "../components/PasswordChangeForm";
import { PasswordChangeFormProps } from "../components/PasswordChangeForm/PasswordChangeForm.types";

export type PasswordChangePageProps = {
  token: string;
  onLogout: () => void;
};

const PasswordChangePage: FC<PasswordChangePageProps> = (props) => {
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${props.token}` },
  };

  const handlePasswordChange: PasswordChangeFormProps["onPasswordChange"] = (
    values
  ) => {
    axios
      .post("http://localhost:80/auth/password-change", values, config)
      .then((response) => {
        console.error(response);
        toast.success(response.data);
        props.onLogout();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.response.data.issues[0].message);
      });
    console.log(values);
  };

  return <PasswordChangeForm onPasswordChange={handlePasswordChange} />;
};

export default PasswordChangePage;
