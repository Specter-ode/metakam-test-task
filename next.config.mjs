/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: { removeViewBox: false },
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dummyjson.com',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
