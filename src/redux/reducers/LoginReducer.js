import { LoginActionTypes } from "../constants/LoginActionTypes";

const loginReducerDefaultstate = [];

const loginReducer = (state = loginReducerDefaultstate, action) => {
    switch(action.type) {
        case LoginActionTypes.VALIDATE_LOGIN:
            return action.user;

        default:
            return state;
    }
}

export default loginReducer;
