import { FlatActionTypes } from '../../constants/FlatActionTypes';
const flatReducerDefaultState = [];

const flatReducer = (state = flatReducerDefaultState, action) => {
    switch (action.type) {
        case FlatActionTypes.ADD_FLAT:
            return [
                ...state,
                action.flat
            ];
        case FlatActionTypes.DELETE_FLAT:
            return state.filter(({ flatId }) => flatId !== action.flatId);

        case FlatActionTypes.UPDATE_FLAT:
            return [
                ...state,
                action.flat
            ];

        case FlatActionTypes.GET_ALL_FLATS:
            return [
                ...state,
                action.flat
            ];
        default:
            return state;
        // case FlatActionTypes.GET_FLAT:
        //     return [
        //             ...state,
        //             action.flat
        //         ];
        // default:
        //     return state;
    }
}

export default flatReducer;