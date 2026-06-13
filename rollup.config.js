import terser from '@rollup/plugin-terser';

// Browser build: wraps the ESM source as a UMD module that exposes the
// SquanLib class as `window.squanlib` for plain <script> / CDN usage.
const banner = '/*! squanlib | GPL-3.0-or-later | https://github.com/Mattttttttttttttttttttttttttttttt/squan-lib */';

const umd = (file, plugins = []) => ({
    input: 'squanlib.js',
    output: {
        file,
        format: 'umd',
        name: 'squanlib',
        exports: 'default',
        banner,
    },
    plugins,
});

export default [
    umd('dist/squanlib.umd.js'),
    umd('dist/squanlib.umd.min.js', [terser({ format: { comments: /^!/ } })]),
];
