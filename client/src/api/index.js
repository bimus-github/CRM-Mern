import axios from "axios";
import { URL } from "../constants";

export const getUsers = () => axios.get(URL);
export const createUser = (newUser) => axios.post(URL, newUser);
