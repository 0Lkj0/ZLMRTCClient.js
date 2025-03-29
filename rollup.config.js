// Rollup plugins
import { babel } from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
const STATIC_DEVELOPMENT = "development";
export default {
  input: "src/export.js",
  output: [
    {
      file: "demo/ZLMRTCClient.js",
      format: "iife",
      name: "ZLMRTCClient",
      sourcemap: process.env.NODE_ENV === STATIC_DEVELOPMENT,
    },
  ],
  plugins: [
    eslint(),
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    terser(),
  ],
};
