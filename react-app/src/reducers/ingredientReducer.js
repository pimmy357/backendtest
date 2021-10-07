import { createReducer } from '@reduxjs/toolkit';
import { fetchIngredient } from '../actions/ingredientAction';

export default createReducer([], {
    [fetchIngredient]: (state, action) => {
        return action.payload
    }
})