import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categories: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		setCategories: (state, { payload }) => {
			state.categories = payload;
		},
	},
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
