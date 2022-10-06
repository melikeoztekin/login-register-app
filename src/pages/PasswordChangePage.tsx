import axios from "axios";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordChangeForm from "../components/PasswordChangeForm";
import { PasswordChangeFormProps } from "../components/PasswordChangeForm/PasswordChangeForm.types";
import { auth } from "../services/http/route/endpoints/auth";

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
    auth
      .passwordChange(values, config)
      .then((response) => {
        toast.success(response.data);
        props.onLogout();
        navigate("/login");
      })
      .catch((error) => {
        error.response.status === 401
          ? toast.error(error.response.data)
          : toast.error(error.response.data.issues[0].message);
      });
  };

  return <PasswordChangeForm onPasswordChange={handlePasswordChange} />;
};

export default PasswordChangePage;
