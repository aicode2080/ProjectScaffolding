import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    // 监听所有IP地址
    host: "0.0.0.0",
    // 指定dev sever的端口号，默认为5173
    port: 5789,
    // 自动打开浏览器运行以下路径的页面
    open: "/",
  },
  resolve: {
    // 路径别名配置
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名配置
    },
  },
  plugins: [react()],
  base: "./",
  build: {
    // build目录名称，默认为"dist"
    // outDir: "build",
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: "static",
  },
});
