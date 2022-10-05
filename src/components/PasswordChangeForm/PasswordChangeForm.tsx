import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import { InputProps } from "../Input/Input.types";
import { Styled } from "./PasswordChangeForm.styled";
import {
  PasswordChangeFormProps,
  PasswordChangeFormValuesProps,
} from "./PasswordChangeForm.types";

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
  const [formValues, setFormValues] = useState<PasswordChangeFormValuesProps>({
    username: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange: InputProps["onChange"] = (e, v) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: v }));
  };

  const handleSubmit = () => {
    if (
      formValues.username === "" &&
      formValues.oldPassword === "" &&
      formValues.newPassword === "" &&
      formValues.newPasswordConfirm === ""
    ) {
      toast.warning("Fill out the form completely.");
      return;
    } else if (formValues.username === "") {
      toast.warning("Username cannot be blank.");
      return;
    } else if (formValues.oldPassword === "") {
      toast.warning("Old password cannot be blank.");
      return;
    } else if (formValues.newPassword === "") {
      toast.warning("New password cannot be blank.");
      return;
    } else if (formValues.newPasswordConfirm === "") {
      toast.warning("Password confirm cannot be blank.");
      return;
    }
    props.onPasswordChange(formValues);
  };

  return (
    <Styled>
      <Card title="Password Change">
        <Input
          onChange={handleChange}
          name="username"
          value={formValues.username}
          icon="person"
          type="text"
          placeholder="Enter your username"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="oldPassword"
          value={formValues.oldPassword}
          icon="lock"
          type="password"
          placeholder="Enter your password"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="newPassword"
          value={formValues.newPassword}
          icon="lock"
          type="password"
          placeholder="Enter your new password"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="newPasswordConfirm"
          value={formValues.newPasswordConfirm}
          icon="lock"
          type="password"
          placeholder="Confirm your new password"
          style={{ marginBottom: "15px" }}
        />
        <Button onClick={handleSubmit}>Change</Button>
      </Card>
    </Styled>
  );
};

export default PasswordChangeForm;
