module.exports = {
    async rewrites() {
        return [
            {
                source: '/auth/login',
                destination:
                    'https://backend.billowing-truth-38ad.workers.dev/api/auth',
            },
            {
                source: '/api/appointments',
                destination:
                    'https://backend.billowing-truth-38ad.workers.dev/api/appointments',
            },
            {
                source: '/api/availability/:date',
                destination:
                    'https://backend.billowing-truth-38ad.workers.dev/api/availability/:date',
            },
        ];
    },
    experimental: {
        scrollRestoration: true,
    },
    output: 'standalone',
    reactStrictMode: true,
};
