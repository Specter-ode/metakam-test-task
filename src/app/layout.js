import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import MainLayout from '@/layouts/MainLayout';
import StoreProvider from '@/providers/StoreProvider';

import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { fetchCategoriesList } from '@/store/category/category.operations';

export const metadata = {
	title: 'Fictional store',
	description: 'Style from the World of Fiction',
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
	const categories = await fetchCategoriesList();
	return (
		<html lang='en'>
			<body className={inter.className}>
				<StoreProvider>
					<Theme appearance='light' accentColor='red'>
						<MainLayout categories={categories}>{children}</MainLayout>
					</Theme>
				</StoreProvider>
			</body>
		</html>
	);
}
