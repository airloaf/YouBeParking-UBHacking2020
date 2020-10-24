import * as Actions from "../ActionTypes"

const initialState = {
    username: null 
};

export default function(state=initialState, action){
    switch(action.type){
        case Actions.USER_LOGIN:
            return Object.assign({}, state, {...action.payload});
        default:
            return state;
    }
}