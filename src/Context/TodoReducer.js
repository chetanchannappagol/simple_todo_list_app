import { ADD_DETAILS } from "./type";

export const reducer = (state,action) =>{
    switch(action.type){
        case ADD_DETAILS :
            return {
                ...state,
                details:[...state.details,action.payload]
            }
        default:
            return
    }
}