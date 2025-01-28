import axios from "axios";
import { apiConfig } from "./config/api.config";
import { internalApiConfig } from "./config/internalApi.config";

const api = axios.create(apiConfig);
const internalApi = axios.create(internalApiConfig);

export { api, internalApi };
