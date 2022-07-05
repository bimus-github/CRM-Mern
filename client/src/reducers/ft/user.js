import { CREATE_USER, GET_USER } from "../../constants";

export default (users = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case CREATE_USER:
      try {
        return [...users, action.payload];
      } catch (error) {
        console.log("Error while CREATE_USER: ", error);
      }

    default:
      return users;
  }
};
