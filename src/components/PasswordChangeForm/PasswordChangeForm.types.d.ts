export type PasswordChangeFormProps = {
  onPasswordChange: (values: PasswordChangeFormValuesProps) => void;
};
export type PasswordChangeFormValuesProps = {
  username: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
};
