import { productActions } from '@/store/product/product.slice';
import { categoryActions } from '@/store/category/category.slice';
import { cartActions } from '@/store/cart/cart.slice';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

const rootActions = { ...productActions, ...categoryActions, ...cartActions };

export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
