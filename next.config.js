module.exports = {
    async rewrites() {
        return [
            {
                source: '/auth/login',
                destination: 'https://modulith.herokuapp.com/auth/login',
            },
            {
                source: '/api/v1/appointments',
                destination:
                    'https://modulith.herokuapp.com/api/v1/appointments',
            },
        ];
    },
    experimental: {
        scrollRestoration: true,
    },
    output: 'standalone',
    reactStrictMode: true,
};
