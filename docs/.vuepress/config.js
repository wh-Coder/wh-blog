module.exports = {
    title: 'Hello VuePress',
    dest: 'dist',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ],
        sidebar: {
            '/blog/': [
                '',
                'a',
                'b',
                ['c', '这里是C']
            ]
        }
    }
}