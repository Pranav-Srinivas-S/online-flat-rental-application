import { LoginActionTypes } from "../constants/LoginActionTypes";
import axios from "axios";
import msg from "../../containers/common/message";

const _validateLogin = ({user}) => ({
    type : LoginActionTypes.VALIDATE_LOGIN,
    user
});

export const validateLogin = user => {
    return (dispatch) => {
        console.log("ValidateLoginAction");
        console.log(user);
        return axios.patch("http://localhost:9191/api/ofr/validate-login",user).then(result=>{
            console.log(result.data);    
            let message = result.data;
            msg.setMessage(message);
            dispatch(_validateLogin(message));
            }
        );    
    }
}