import React,{useReducer} from "react";
import { ADD_DETAILS,EDIT_DETAILS,DELETE_DETAILS } from "./type";
import TodoContext from "./TodoContext";
import {reducer} from './TodoReducer'

const TodoState = (props) => {
  const initialState = {
    details: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addDetails = (prop) => {dispatch({type:ADD_DETAILS,payload:prop})}

  const editDetails = (prop) => {dispatch({type:EDIT_DETAILS,payload:prop})}

  const deleteDetails = (prop) => {dispatch({type:DELETE_DETAILS,payload:prop})}


  return (
    <TodoContext.Provider
      value={{
        details: state.details,
        addDetails,
        editDetails,
        deleteDetails
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
