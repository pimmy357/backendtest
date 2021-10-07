import { createReducer } from '@reduxjs/toolkit';
import { fetchNation } from '../actions/nationAction';

export default createReducer([], {
    [fetchNation]: (state, action) => {
        return action.payload
    }
})