import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Input from "../Input";
import { InputProps } from "../Input/Input.types";
import { Styled } from "./LoginForm.styled";
import { LoginFormProps, LoginFormValuesProps } from "./LoginForm.types";

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formValues, setFormValues] = useState<LoginFormValuesProps>({
    username: "",
    password: "",
  });

  const handleChange: InputProps["onChange"] = (e, v) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: v }));
  };

  const handleSubmit = () => {
    if (formValues.username === "" && formValues.password === "") {
      toast.warning("Fill out the form completely.");
      return;
    } else if (formValues.username === "") {
      toast.warning("Username cannot be blank.");
      return;
    } else if (formValues.password === "") {
      toast.warning("Password cannot be blank.");
      return;
    }
    props.onLogin?.(formValues);
  };

  return (
    <Styled>
      <Card title="Login">
        <Input
          onChange={handleChange}
          name="username"
          value={formValues.username}
          icon="mail"
          type="text"
          placeholder="Enter your email."
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formValues.password}
          icon="lock"
          type="password"
          placeholder="Enter your password."
          style={{ marginBottom: "15px" }}
        />
        <div className="remember-forgot">
          <Checkbox label="Remember me" />
          <a href="#" className="link">
            Forgot password
          </a>
        </div>
        <Button onClick={handleSubmit}>Login Now</Button>
        <p className="register-links">
          Don't have a account?{" "}
          <Link className="link" to="/register">
            Create an account
          </Link>
        </p>
      </Card>
    </Styled>
  );
};

export default LoginForm;
