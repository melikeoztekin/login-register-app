import {
  CreateCategoryRequestPayload,
  CreateCategoryResponseType,
} from "./types";
import service from "../../instance";

export const create = (
  payload: CreateCategoryRequestPayload
): Promise<CreateCategoryResponseType> => {
  return service.post("category", payload);
};

export const list = () => {
  return service.get("category");
};

export const update = (id: number, payload: CreateCategoryRequestPayload) => {
  return service.put(`category/${id}`, payload);
};
