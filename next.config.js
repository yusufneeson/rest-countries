/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["upload.wikimedia.org", "flagcdn.com"],
	},
};

module.exports = nextConfig;
