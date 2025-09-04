import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com', // 외부 이미지가 있는 도메인 경로 추가
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
