import { createStore, combineReducers } from 'redux';

import User from './reducers/User';

const rootReducer =
    combineReducers({
        User
    });

export const store = createStore(rootReducer);