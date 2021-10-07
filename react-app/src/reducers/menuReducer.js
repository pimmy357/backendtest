import { createReducer } from '@reduxjs/toolkit';
import { fetchMenu, deleteMenu } from '../actions/menuAction';

export default createReducer([], {
    [fetchMenu]: (state, action) => {
        return action.payload;
    }
})