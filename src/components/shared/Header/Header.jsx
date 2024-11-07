import s from './Header.module.css';
import { AccessibleIcon, Flex } from '@radix-ui/themes';

import Link from 'next/link';

import Logo from '@/assets/logo.svg';

import BurgerMenu from '@/components/BurgerMenu';
import Cart from '@/components/CartMenu';
const Header = ({ categories }) => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<Link href='/' className={s.logo}>
					<AccessibleIcon label='logo'>
						<Logo className={s.logo} />
					</AccessibleIcon>
				</Link>
				<Flex gap='2'>
					<Cart />
					<BurgerMenu categories={categories} />
				</Flex>
			</div>
		</header>
	);
};

export default Header;
