import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace'
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';

const packageJson = require('./package.json');

const extensions = [ '.js', '.jsx' ];

module.exports = {
    input: 'src/index.js',
    output: [
        {
            name: packageJson.name,
            file: packageJson.main,
            format: 'cjs',
        },{
            name: packageJson.name,
            file: packageJson.module,
            format: 'esm'
        }
    ],
    plugins: [
        image(),
        external(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': 'production'
        }),
        resolve({
            extensions,
            main: true,
            browser: true,
        }),
        babel({
            extensions,
            babelHelpers: 'bundled'
        }),
        commonjs(),
        postcss({
            extensions: [ '.css' ],
        }),
        terser()
    ],
    external: ['react', 'react-dom'],
}
