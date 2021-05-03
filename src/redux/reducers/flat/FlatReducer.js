const flatReducerDefaultState = [];

const flatReducer =  (state = flatReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FLAT':
            return [
                ...state,
                action.flat
            ];
        case 'DELETE_FLAT':
            return state.filter(({flatId}) => flatId !== action.flatId);
        case 'UPDATE_FLAT':
            return [
                ...state,
                action.flat
            ];
            
        case 'GET_ALL_FLATS':
            return [
                    ...state,
                    action.flats 
                ];
        case 'GET_FLAT_BY_ID':
            return [
                    ...state,
                    action.flat
                ];
        default:
            return state;
    }
}

export default customerReducer;