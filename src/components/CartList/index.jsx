import s from './CartList.module.css';
import { Button, IconButton } from '@radix-ui/themes';

import { useEffect, useState } from 'react';

import cartSelectors from '@/store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartList = () => {
	const cart = useSelector(cartSelectors.getCartData);
	const [isOpen, setIsOpen] = useState(false);

	return <></>;
};
export default CartList;
