import { CreateAxiosDefaults } from "axios";
import { selfUrl } from "./env";

export const internalApiConfig: CreateAxiosDefaults = {
  withCredentials: true,
  baseURL: selfUrl + "/api",
};
