import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './product/product.slice';
import categoryReducer from './category/category.slice';
import cartReducer from './cart/cart.slice';

const rootReducer = combineReducers({
	product: productReducer,
	category: categoryReducer,
	cart: cartReducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV === 'development',
	});
};
