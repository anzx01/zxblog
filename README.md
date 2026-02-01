# Neo-Brutalist Blog

一个采用 Neo-brutalism 设计风格的博客网站，展示四季美景。

## 🎨 设计特色

- **Neo-brutalism 风格**: 粗边框、鲜艳配色、倾斜动画
- **Space Grotesk 字体**: 完美契合粗犷设计风格
- **响应式设计**: 适配各种设备尺寸
- **流畅动画**: hover 效果、旋转、位移等交互动画

## 📁 项目结构

```
blog-starter-app14/
├── _posts/                    # 博客文章
│   ├── spring-beijing.md     # 北京的春天
│   ├── summer-beijing.md     # 北京的夏天
│   ├── autumn-beijing.md     # 北京的秋天
│   └── winter-beijing.md     # 北京的冬天
├── public/assets/blog/        # 静态资源
│   ├── authors/              # 作者头像
│   ├── spring-beijing/       # 春季图片
│   ├── summer-beijing/       # 夏季图片
│   ├── autumn-beijing/       # 秋季图片
│   └── winter-beijing/       # 冬季图片
├── src/
│   ├── app/
│   │   ├── _components/      # React 组件
│   │   ├── globals.css       # 全局样式
│   │   ├── layout.tsx        # 布局组件
│   │   ├── page.tsx          # 首页
│   │   └── posts/[slug]/     # 博客详情页
│   ├── lib/                  # 工具函数
│   └── interfaces/           # TypeScript 类型定义
└── start.bat                 # 启动脚本
```

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
或直接运行 `start.bat`

### 3. 访问网站
打开浏览器访问: http://localhost:3000

## 🎨 配色方案

- **蓝色** (#0066FF): 链接和标题
- **粉色** (#FF006E): 强调和装饰
- **黄色** (#FFBE0B): 引用和高亮
- **绿色** (#8AC926): 成功状态
- **紫色** (#8338EC): 特殊元素
- **黑色** (#000000): 边框和文字
- **浅灰** (#F3F4F6): 背景色

## ✨ 技术栈

- **Next.js 15**: React 框架
- **TypeScript**: 类型安全
- **Tailwind CSS**: 样式框架
- **Space Grotesk**: 标题字体
- **Gray-matter**: Markdown 解析
- **Remark**: Markdown 处理

## 📝 博客文章

项目包含四篇关于北京四季的博客文章：

1. **北京的春天** - 万物复苏，春暖花开
2. **北京的夏天** - 绿树成荫，荷花盛开
3. **北京的秋天** - 金风送爽，红叶满山
4. **北京的冬天** - 银装素裹，梅花傲雪

每篇文章都配有相应的封面图片和详细内容。

### Related examples

- [AgilityCMS](/examples/cms-agilitycms)
- [Builder.io](/examples/cms-builder-io)
- [ButterCMS](/examples/cms-buttercms)
- [Contentful](/examples/cms-contentful)
- [Cosmic](/examples/cms-cosmic)
- [DatoCMS](/examples/cms-datocms)
- [DotCMS](/examples/cms-dotcms)
- [Drupal](/examples/cms-drupal)
- [Enterspeed](/examples/cms-enterspeed)
- [Ghost](/examples/cms-ghost)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent.ai](/examples/cms-kontent-ai)
- [MakeSwift](/examples/cms-makeswift)
- [Payload](/examples/cms-payload)
- [Plasmic](/examples/cms-plasmic)
- [Prepr](/examples/cms-prepr)
- [Prismic](/examples/cms-prismic)
- [Sanity](/examples/cms-sanity)
- [Sitecore XM Cloud](/examples/cms-sitecore-xmcloud)
- [Sitefinity](/examples/cms-sitefinity)
- [Storyblok](/examples/cms-storyblok)
- [TakeShape](/examples/cms-takeshape)
- [Tina](/examples/cms-tina)
- [Umbraco](/examples/cms-umbraco)
- [Umbraco heartcore](/examples/cms-umbraco-heartcore)
- [Webiny](/examples/cms-webiny)
- [WordPress](/examples/cms-wordpress)
- [Blog Starter](/examples/blog-starter)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
