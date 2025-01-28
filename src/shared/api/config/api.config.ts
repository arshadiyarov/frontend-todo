import { CreateAxiosDefaults } from "axios";
import { apiUrl } from "./env";

export const apiConfig: CreateAxiosDefaults = {
  withCredentials: true,
  baseURL: apiUrl + "/api",
  headers: {
    Accept: "application/json",
  },
};
