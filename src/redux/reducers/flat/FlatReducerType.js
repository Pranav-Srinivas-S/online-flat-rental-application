import { ActionType } from "../../actions/flat/ActionType"

const initialState ={
    customers:[]
};

export const getAllFlatsReducer = (state = initialState,{type,payload}) =>{
     switch (type) {
        case ActionType.GET_ALL_FLATS:
            return {...state,customer:payload}
        
        default:
            return state;
     }
    };

export const getFlatReducer = (state = {},{type,payload}) => {
    switch(type){
        case ActionType.GET_FLAT_BY_ID:
            return {...state,...payload}
        
            default:
                return state;
        
    }
}