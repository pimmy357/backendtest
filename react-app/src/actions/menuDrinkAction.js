import { createAction } from '@reduxjs/toolkit';

const fetchMenuDrink = createAction('FETCH_MENU_Drink');
const deleteMenuDrink = createAction('DELETE_MENU_Drink');

export { fetchMenuDrink, deleteMenuDrink };