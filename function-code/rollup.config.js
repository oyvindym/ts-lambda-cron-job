import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: `src/${process.env.FUNCTION_NAME}.ts`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [typescript()],
};
