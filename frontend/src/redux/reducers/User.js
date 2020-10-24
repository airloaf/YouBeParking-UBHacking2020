import * as Actions from "../ActionTypes"

const initialState = {
    username: "",
    money: null
};

export default function(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}