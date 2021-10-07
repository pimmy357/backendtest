import { createAction } from '@reduxjs/toolkit';

const fetchSave = createAction('FETCH_SAVE');
const deleteSave = createAction('DELETE_SAVE');

export { fetchSave, deleteSave };