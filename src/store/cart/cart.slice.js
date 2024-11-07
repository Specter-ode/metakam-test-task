import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		list: [],
	},
	reducers: {
		addProductToCart: (state, { payload }) => {
			const isInCart = state.list.find(el => el.id === payload.id);
			state.list = isInCart
				? state.list.map(el => (el.id === payload.id ? { ...el, quantity: el.quantity + 1 } : el))
				: [...state.list, { ...payload, quantity: 1 }];
		},
		removeProductFromCart: (state, { payload }) => {
			state.list = state.list.filter(el => el.id !== payload);
		},
		updateCart: (state, { payload }) => {
			state.list = state.list.map(el => (el.id === payload.id ? { ...el, ...payload } : el));
		},
		clearCart: state => {
			state.list = [];
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
