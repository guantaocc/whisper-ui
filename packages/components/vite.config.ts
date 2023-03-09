import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: resolve(__dirname, '../../build/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, '../../build/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
      name: 'whisper-ui'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'components',
      outputDir: [
        resolve(__dirname, '../../build/es/components'),
        resolve(__dirname, '../../build/lib/components')
      ],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'components')
    }
  }
});
