import * as Actions from './ActionTypes';

export const loginUser = (username) =>({
    type: Actions.USER_LOGIN,
    payload: {
        username
    }
})

export const logoutUser = () =>({
    type: Actions.USER_LOGOUT
})


export const Offer= (offer) =>({
    type: Actions.USER_OFFER,
    payload: {
        offer
    }
})