/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images : {
        // domains : ['github.com', ],
        domains: ['www.hackthebox.com','assets.tryhackme.com','github.com', 'lisandre.com'],
    },
    async rewrites(){
        return[
            {
                source: '/gtag.js',
                destination: 'https://www.googletagmanager.com/gtag/js?id=G-J8K4J5078W',
            },
        ];
    },
};

module.exports = nextConfig 

