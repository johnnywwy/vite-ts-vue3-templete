import { defineConfig, loadEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import type { UserConfig, ConfigEnv } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import ElementPlus from "unplugin-element-plus/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import externalGlobals from "rollup-plugin-external-globals"
import { visualizer } from 'rollup-plugin-visualizer';
import ViteCompression from 'vite-plugin-compression';
import brotli from 'rollup-plugin-brotli';
import { createHtmlPlugin } from 'vite-plugin-html';

const globals = externalGlobals({
  moment: 'moment',
  'video.js': 'videojs',
  jspdf: 'jspdf',
  xlsx: 'XLSX',
  echart: 'echart'
});

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取当前工作目录
  const root = process.cwd();
  // 获取环境变量
  const env = loadEnv(mode, root);
  return {
    // 项目根目录
    root,
    // 项目部署的基础路径
    base: "./",
    publicDir: fileURLToPath(new URL("./public", import.meta.url)), // 无需处理的静态资源位置
    assetsInclude: fileURLToPath(new URL("./src/assets", import.meta.url)), // 需要处理的静态资源位置
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import '@/styles/variable.less';`,
        },
      },
    },
    plugins: [
      // 自动打包外链配置
      // createHtmlPlugin({
      //   inject: {
      //     data: {
      //       monentscript:
      //         '<script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.30.1/locale/af.min.js"></script>',
      //       videoscript:
      //         '<link href="https://cdn.bootcdn.net/ajax/libs/video.js/8.22.0/alt/video-js-cdn.css" rel="stylesheet">',
      //       echartscript: '<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.6.0/echarts.common.min.js"></script>',
      //       jspdfscript: '<script src="https://cdn.bootcdn.net/ajax/libs/pdf.js/5.0.375/pdf.min.mjs"></script>',
      //       xlsxscript:
      //         '<script src="https://cdn.bootcdn.net/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>'
      //     }
      //   }
      // }),

      // br压缩
      // brotli({}),

      // gzip压缩配置
      // ViteCompression({
      //   threshold: 1024 * 20, // 超过20kb才进行压缩
      //   ext: '.gz', // 压缩后缀
      //   algorithm: 'gzip' // 压缩算法
      // }),
      // Vue模板文件编译插件
      vue(),
      // jsx文件编译插件
      vueJsx(),
      // 开启mock服务器
      viteMockServe({
        // 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
        mockPath: "mock", // 数据模拟需要拦截的请求起始 URL
        enable: true, // 本地环境是否开启 mock 功能
      }),
      // 开启ElementPlus自动引入CSS
      ElementPlus({}),
      // 自动导入组件
      AutoImport({
        // 定义自动引入的依赖
        imports: ["vue", "vue-router", "pinia"],
        // 处理 eslint
        eslintrc: {
          enabled: true,
        },
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(
          new URL("./types/auto-imports.d.ts", import.meta.url)
        ),
      }),
      // 自动注册组件
      Components({
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(new URL("./types/components.d.ts", import.meta.url)),
      }),
      Icons({
        autoInstall: true,
      }),
    ],
    // 运行后本地预览的服务器
    server: {
      // 是否开启https
      https: false,
      // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: true,
      // 开发环境预览服务器端口
      port: 3000,
      // 启动后是否自动打开浏览器
      open: false,
      // 是否开启CORS跨域
      cors: true,
      // 代理服务器
      // 帮助我们开发时解决跨域问题
      proxy: {
        // 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:9000
        [env.VITE_APP_API_BASEURL]: {
          target: "http://localhost:9000",
          // 改变 Host Header
          changeOrigin: true,
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: "http://localhost:9000",
          // 改变 Host Header
          changeOrigin: true,
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    // 打包配置
    build: {
      // 关闭 sorcemap 报错不会映射到源码
      sourcemap: false,
      // 打包大小超出 400kb 提示警告
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        // 打包入口文件 根目录下的 index.html
        // 也就是项目从哪个文件开始打包
        input: {
          index: fileURLToPath(new URL("./index.html", import.meta.url)),
        },
        // 不打包 
        external: ['moment', 'video.js', 'jspdf', 'xlsx', 'echart'],
        // 
        plugins: [visualizer({ open: true }), globals],
        // 每个文件发现的第一个副作用打印到控制台
        experimentalLogSideEffects: true,
        treeshake: {
          preset: 'recommended',//默认模式
          // propertyReadSideEffects: true
        },
        // 静态资源分类打包
        output: {
          // format: "esm",
          experimentalMinChunkSize: 20 * 1024,
          manualChunks: (id: string) => {
            // html2canvas 只有极少数页面用到 所以单独处理一下 第三方库分类打包
            // if (id.includes('html-canvans')) {
            //   return 'html-canvans';
            // }
            if (id.includes('node_modules')) {
              return 'vender'
            }
            if (id.includes('src/views/about')) {
              return 'about'
            }
            if (id.includes('src/views/auth')) {
              return 'about'
            }
            // return 'index'
          },
          chunkFileNames: 'static/js/[name]-[hash].js', // 代码分割后文件名
          entryFileNames: 'static/js/[name]-[hash:6].js', // 入口文件名
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]' // 静态资源文件名
        },
      },
    },
    // 配置别名
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#": fileURLToPath(new URL("./types", import.meta.url)),
      },
    },
  };
});
