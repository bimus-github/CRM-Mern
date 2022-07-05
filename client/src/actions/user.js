import * as api from "../api";
import { CREATE_USER, GET_USER } from "../constants";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
