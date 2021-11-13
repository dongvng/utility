import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import { defineConfig } from 'rollup';
import autoExternal from 'rollup-plugin-auto-external';
import pkgJson from './package.json';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkgJson.module,
        format: 'esm',
        sourcemap: true,
        generatedCode: 'es2015',
      },
      {
        file: pkgJson.main,
        format: 'cjs',
        sourcemap: true,
        generatedCode: 'es2015',
      },
      {
        name: 'utils',
        file: pkgJson.browser,
        format: 'umd',
        generatedCode: 'es2015',
      },
    ],
    plugins: [
      autoExternal({
        packagePath: path.resolve(__dirname, 'package.json'),
      }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      }),
      replace({
        values: {
          'process.env.NODE_ENV': 'production',
        },
        preventAssignment: true,
      }),
      terser({
        format: {
          comments: 'all',
        },
      }),
    ],
  },
]);
