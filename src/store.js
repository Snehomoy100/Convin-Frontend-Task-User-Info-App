import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./utils/usersSlicer";

export const store = configureStore({
  reducer: { users: usersReducer },
});
