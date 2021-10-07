import { createAction } from '@reduxjs/toolkit';

const fetchMenu = createAction('FETCH_MENU');
const deleteMenu = createAction('DELETE_MENU');

export { fetchMenu, deleteMenu };