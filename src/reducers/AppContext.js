import React from "react";
import * as ActionsTypes from "./ActionTypes";

const initialState = {
  currentUser: {},
  boxes: [],
  users: [],
  gc: [],
};

export const actionsTypes = ActionsTypes;
export const AppContext = React.createContext(initialState);
