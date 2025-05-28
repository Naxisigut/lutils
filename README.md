## 添加需要单独构建的文件
1. 在`vite.config.ts`和`vite.config.prod.ts`中`build.lib.entry`中添加新的入口文件
2. 运行`npm run build`打包命令，产物在`dist`文件夹中

## 打包命令
`npm run build`: 构建开发版本和生产版本
`npm run build:dev`: 单独构建开发版本
`npm run build:prod`: 单独构建生产版本
生产版本和开发版本的主要区别是是否混淆代码。
