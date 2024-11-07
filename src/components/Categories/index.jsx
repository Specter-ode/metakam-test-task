'use client';
import s from './Categories.module.css';
import { Box, Flex, Heading, IconButton, TabNav } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoMdClose } from 'react-icons/io';

const Categories = ({ categories, onClose }) => {
	const pathname = usePathname();
	const allCategories = [{ slug: '', name: 'All categories' }, ...categories];
	// const isValidUrl = allCategories.some(el => el.slug === pathname)
	return (
		<Box maxWidth='320px' py='6' px='2'>
			<Flex justify='between' mb='4' px='3'>
				<Heading>Categories</Heading>
				<IconButton
					onClick={onClose}
					variant='classic'
					className={s.icon_btn}
					aria-label='View cart'
				>
					<IoMdClose className={s.icon} />
				</IconButton>
			</Flex>
			<TabNav.Root>
				<Flex w='100%' wrap='wrap' gapY='3' justify='between'>
					{allCategories.map(category => (
						<div key={category.slug} className={s.item}>
							<TabNav.Link asChild active={pathname === `/${category.slug}`}>
								<Link href={`/${category.slug}`} className={s.link}>
									{category.name}
								</Link>
							</TabNav.Link>
						</div>
					))}
				</Flex>
			</TabNav.Root>
		</Box>
	);
};

export default Categories;
