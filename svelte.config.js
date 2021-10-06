import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        target: 'body',
        adapter: adapter({
            // spa-mode
            // https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
            fallback: 'index.html'
        }),

        paths: {
            base: '/3c'
        },
        appDir: 'app',

        ssr: false,
        prerender: {
            enabled: false
        }
    }
};

export default config;
