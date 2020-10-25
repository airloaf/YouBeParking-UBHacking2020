import * as Actions from "../ActionTypes"

const initialState = {
    username: null, 
    offer: null
};

export default function(state=initialState, action){
    switch(action.type){
        case Actions.USER_LOGIN:
            return Object.assign({}, state, {...action.payload});
        case Actions.USER_LOGOUT:
            return initialState;
        case Actions.USER_OFFER:
            return Object.assign({}, state, {...action.payload});
        default:
            return state;
    }
}