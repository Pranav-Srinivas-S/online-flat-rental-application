import { UserActionTypes } from "../constants/UsersActionTypes"

const userReducerDefaultState = [];

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return [
                ...state,
                action.tenant
            ];

        case UserActionTypes.DELETE_USER:
            return state.filter(({ userId }) => userId !== action.userId);

        case UserActionTypes.UPDATE_USER:
            return [
                ...state,
                action.user
            ];

        case UserActionTypes.GET_ALL_USERS:
            return [
                ...state,
                action.user
            ]
        default:
            return state;
    }
}

export default userReducer;
