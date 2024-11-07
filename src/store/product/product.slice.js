import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		currentPage: 1,
		sortBy: 'title',
		order: 'asc',
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			// .addCase(fetchProducts.fulfilled, (state, { payload }) => {
			// 	state.products = payload;
			// })
			.addMatcher(handleSuccess, state => {
				state.error = null;
				state.isLoading = false;
			})
			.addMatcher(handleError, (state, { payload }) => {
				state.isLoading = false;
				if (payload) {
					state.error = payload.message || payload.error;
				} else {
					state.error = 'No connection to database';
				}
			})
			.addMatcher(handleLoading, state => {
				state.error = null;
				state.isLoading = true;
			});
	},
});

function handleError(action) {
	return action.type?.startsWith('products') && action.type?.endsWith('rejected');
}

function handleLoading(action) {
	return action.type?.startsWith('products') && action.type?.endsWith('pending');
}

function handleSuccess(action) {
	return action.type?.startsWith('products') && action.type?.endsWith('fulfilled');
}

export const productActions = productSlice.actions;
export default productSlice.reducer;
