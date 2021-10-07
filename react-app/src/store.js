import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './reducers/ingredientReducer';
import nationReducer from './reducers/nationReducer';
import menuReducer from './reducers/menuReducer';
import saveReducer from './reducers/saveReducer';
import menuDrinkReducer from './reducers/menuDrinkReducer';

export default configureStore({
    reducer: {
        ingredient: ingredientReducer,
        nation: nationReducer,
        menu: menuReducer,
        save: saveReducer,
        menu_drink: menuDrinkReducer
    }
});