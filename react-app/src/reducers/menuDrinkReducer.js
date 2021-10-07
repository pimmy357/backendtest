import { createReducer } from '@reduxjs/toolkit';
import { fetchMenuDrink } from '../actions/menuDrinkAction'

export default createReducer([], {
    [fetchMenuDrink]: (state, action) => {
        return action.payload;
    }
});