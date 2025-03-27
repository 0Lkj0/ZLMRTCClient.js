// Rollup plugins
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import replace from '@rollup/plugin-replace';
import { nodeResolve }  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkg = require('./package.json');
const STATIC_DEVELOPMENT = 'development';
export default {
    input: 'src/export.js',
    output: [
        {
            file: 'demo/ZLMRTCClient.js',
            format: 'iife',
            name: 'ZLMRTCClient',
            sourcemap: process.env.NODE_ENV === STATIC_DEVELOPMENT // 'inline'
        }
    ],
    plugins: [
        replace({
            exclude: 'node_modules/**',
            include:['src/ulity/version.js'],
            preventAssignment:true,
            ENV: JSON.stringify(process.env.NODE_ENV || STATIC_DEVELOPMENT),
            values:{
                __BUILD_DATE__: () => (new Date()).toString(),
                __VERSION__:pkg.version
            }
        }),
        eslint(),
        nodeResolve({
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
    ],
};