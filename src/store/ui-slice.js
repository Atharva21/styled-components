import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	initialState: {},
	name: 'ui',
	reducers: {},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
