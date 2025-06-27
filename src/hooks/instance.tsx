import axios from "axios";
import { API } from "./getUrl";

export const instance = axios.create({ baseURL: API });
