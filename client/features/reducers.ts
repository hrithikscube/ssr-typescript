import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import tempSlice from "./tempReducer/tempSlice";

export default combineReducers({
    auth: authSlice,
    temp: tempSlice
});