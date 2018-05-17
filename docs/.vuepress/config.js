module.exports = {
    base: '/wh-blog/',
    head: [
        ['link', { rel: 'icon', href: `/qb.png` }]
    ],
    title: 'wh',
    dest: 'dist',
    description: 'just blog',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        repo: 'wh-Coder/wh-blog',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            // { text: 'External', link: 'https://google.com' },
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese' },
            //         { text: 'Japanese', link: '/language/japanese' }
            //     ]
            // }
        ],
        sidebar: {
            '/blog/': [
                '',
                ['flex', 'flex'],
                'a',
                'b',
                ['c', '这里是C']
            ]
        }
    }
}