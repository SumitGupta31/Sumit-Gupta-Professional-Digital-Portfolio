const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NEXT_PUBLIC_REPOSITORY_NAME ? `/${process.env.NEXT_PUBLIC_REPOSITORY_NAME}` : '');
/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export', basePath, assetPrefix: basePath || undefined, images: { unoptimized: true }, trailingSlash: true };
export default nextConfig;
