import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

export type TodoAppProps = {
  onLogout: () => void;
};
const TodoApp: FC<TodoAppProps> = (props) => {
  const handleLogout = () => {
    props.onLogout?.();
    toast.info("Logged out");
  };

  const navigate = useNavigate();

  const handlePasswordChange = () => {
    navigate("/password-change");
  };
  return (
    <div style={{ margin: "20px" }}>
      <Button onClick={handlePasswordChange} style={{ marginBottom: "20px" }}>
        Password Change
      </Button>
      <Button onClick={handleLogout}>Logout</Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        quisquam obcaecati illo quo facilis est distinctio numquam reprehenderit
        dolorum, earum odio maiores repellat, hic sunt voluptatibus explicabo
        nobis cumque cum!
      </p>
    </div>
  );
};

export default TodoApp;
