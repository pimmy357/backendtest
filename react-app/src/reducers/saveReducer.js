import { createReducer } from '@reduxjs/toolkit';
import { fetchSave, deleteSave } from '../actions/saveAction';

export default createReducer([], {
    [fetchSave]: (state, action) => {
        return action.payload;
    },
    [deleteSave]: (state, action) => {
        return action.payload = [];
    }
})