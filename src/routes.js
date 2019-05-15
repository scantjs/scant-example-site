const routes = [
    {
        to: '/',
        name: 'Home',
        component: import('./routes/Home.svelte'),
    },
    {
        to: '/blog',
        name: 'Blog',
        component: import('./routes/Blog.svelte'),
    },
    {
        to: '/blog/:id',
        name: 'Blog',
        component: import('./routes/Post.svelte'),
    },
    {
        to: '*',
        name: '404',
        component: import('./routes/NotFound.svelte'),
    },
];

export default routes;
