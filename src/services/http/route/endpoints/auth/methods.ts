import {
  LoginRequestPayload,
  PasswordChangeRequestPayload,
  RegisterRequestPayload,
  RegisterResponseType,
} from "./types";
import service from "../../instance";
import { AxiosRequestConfig } from "axios";

export const login = (payload: LoginRequestPayload) => {
  return service.post("auth/login", payload);
};

export const register = (
  payload: RegisterRequestPayload
): Promise<RegisterResponseType> => {
  return service.post("auth/register", payload);
};

export const passwordChange = (
  payload: PasswordChangeRequestPayload,
  config: AxiosRequestConfig
) => {
  return service.post("auth/password-change", payload, config);
};
