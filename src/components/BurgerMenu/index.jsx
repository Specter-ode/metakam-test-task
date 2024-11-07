'use client';
import s from './BurgerMenu.module.css';
import { FiMenu } from 'react-icons/fi';
import { IconButton } from '@radix-ui/themes';
import Categories from '../Categories';
import { useEffect, useState } from 'react';

const BurgerMenu = ({ categories }) => {
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
	return (
		<div className={s.wrapper}>
			<IconButton
				size='4'
				onClick={handleOpenSidebar}
				variant='classic'
				className={s.icon_btn}
				aria-label='Open categories list'
			>
				<FiMenu />
			</IconButton>
			{isOpen && <div className={s.overlay} onClick={handleOverlayClick} />}
			<div className={currentClass}>
				<Categories categories={categories} onClose={handleCloseSidebar} />
			</div>
		</div>
	);
};
export default BurgerMenu;
