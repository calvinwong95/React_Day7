import {combineReducers} from 'redux';

import RegisterReducer from "./registerReducer";

export default combineReducers ({
    register:RegisterReducer,
})