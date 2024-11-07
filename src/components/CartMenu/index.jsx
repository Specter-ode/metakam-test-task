'use client';
import s from './CartMenu.module.css';
import { Button, IconButton } from '@radix-ui/themes';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import cartSelectors from '@/store/cart/cart.selector';
import { useSelector } from 'react-redux';
import CartList from '../CartList';

const CartMenu = () => {
	const cart = useSelector(cartSelectors.getCartData);
	console.log('cart: ', cart);
	const variant = cart?.length > 0 ? 'soft' : 'classic';
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenSidebar = () => setIsOpen(true);
	const handleCloseSidebar = () => setIsOpen(false);
	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			handleCloseSidebar();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);
	const currentClass = isOpen ? `${s.sidebar} ${s.open}` : `${s.sidebar}`;

	const quantity = cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
	return (
		<>
			<IconButton
				size='4'
				onClick={handleOpenSidebar}
				variant={variant}
				className={s.icon_btn}
				aria-label='Open cart'
			>
				<FaShoppingCart className={s.icon} />
			</IconButton>
			<Button
				size='3'
				onClick={handleOpenSidebar}
				variant={variant}
				className={s.btn}
				aria-label='Open cart'
			>
				<FaShoppingCart className={s.icon} /> Cart {quantity > 0 && `(${quantity})`}
			</Button>

			{isOpen && <div className={s.overlay} onClick={handleOverlayClick} />}
			<div className={currentClass}>
				<CartList />
			</div>
		</>
	);
};
export default CartMenu;
