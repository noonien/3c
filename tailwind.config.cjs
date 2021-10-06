module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: { inset: ['active'] }
    },
    plugins: [require('@tailwindcss/forms')]
};
