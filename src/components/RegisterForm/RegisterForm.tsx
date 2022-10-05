import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Input from "../Input";
import { InputProps } from "../Input/Input.types";
import { Styled } from "./RegisterForm.styled";
import {
  RegisterFormProps,
  RegisterFormValuesProps,
} from "./RegisterForm.types";

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [formValues, setFormValues] = useState<RegisterFormValuesProps>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange: InputProps["onChange"] = (e, v) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: v }));
  };

  const handleSubmit = () => {
    if (
      formValues.username === "" &&
      formValues.password === "" &&
      formValues.passwordConfirm === ""
    ) {
      toast.warning("Fill out the form completely.");
      return;
    } else if (formValues.username === "") {
      toast.warning("Username cannot be blank.");
      return;
    } else if (formValues.password === "") {
      toast.warning("Password cannot be blank.");
      return;
    } else if (formValues.passwordConfirm === "") {
      toast.warning("Password confirm cannot be blank.");
      return;
    }
    props.onRegister?.(formValues);
  };

  return (
    <Styled>
      <Card title="Registration">
        <Input
          onChange={handleChange}
          value={formValues.username}
          icon="mail"
          type="text"
          name="username"
          placeholder="Enter your username."
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          value={formValues.password}
          icon="lock"
          type="password"
          name="password"
          placeholder="Create a password."
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          value={formValues.passwordConfirm}
          icon="lock"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm a password."
          style={{ marginBottom: "15px" }}
        />
        <div className="remember-forgot">
          <Checkbox label="I accept all terms & conditions" />
        </div>
        <Button onClick={handleSubmit}>Register Now</Button>
        <p className="register-links">
          Allready have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </Styled>
  );
};

export default RegisterForm;
