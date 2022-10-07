import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import { useLoginContext } from "../contexts/LoginContext/LoginContext";

export type TodoAppProps = {};

const TodoApp: FC<TodoAppProps> = (props) => {
  const { logout, username } = useLoginContext();
  const handleLogout = () => {
    logout?.();
    toast.info("Logged out");
  };

  const navigate = useNavigate();

  const handlePasswordChange = () => {
    navigate("/password-change");
  };
  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex" }}>
        <Button
          onClick={handlePasswordChange}
          style={{ backgroundColor: "green" }}
        >
          Password Change
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <h3 style={{ textAlign: "center" }}>Hoşgeldin {username}</h3>
      <Tabs />
    </div>
  );
};

export default TodoApp;
