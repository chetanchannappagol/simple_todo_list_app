import { ADD_DETAILS, EDIT_DETAILS,DELETE_DETAILS } from "./type";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_DETAILS:
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    case EDIT_DETAILS: {
      const arr = state.details;
      let arrList = [];
      arr.map((ele) => {
        if (ele.id === action.payload.id) {
          ele.subject = action.payload.subject;
          ele.description = action.payload.description;
          ele.dateTime = action.payload.dateTime;
          arrList.push(ele)
        } else {
            arrList.push(ele)
        }
      });
      return {
        ...state,
        details: arrList,
      };
    }
    case DELETE_DETAILS: {
        const arr = state.details;
        let arrList = arr.filter((ele)=>{
           return ele.id !== action.payload.id
        })
        return {
          ...state,
          details: arrList,
        };
      }
    default:
      return;
  }
};
