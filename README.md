# ZX Blog

一个采用 Neo-brutalism 设计风格的 Next.js 博客，展示北京四季主题文章。

## 设计特色

- **Neo-brutalism 风格**: 粗边框、鲜艳配色、倾斜动画
- **响应式设计**: 适配桌面端与移动端
- **Markdown 内容**: 文章存放在 `_posts`
- **原创 SVG 资产**: 封面图、头像和 favicon 均为本仓库自有素材

## 项目结构

```
zxblog/
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

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置站点地址

复制 `.env.example` 为 `.env.local`，把 `NEXT_PUBLIC_SITE_URL` 改成实际部署地址。

### 3. 启动开发服务器

```bash
pnpm dev
```

或直接运行 `start.bat`

### 4. 访问网站

打开浏览器访问: http://localhost:3000

## 配色方案

- **蓝色** (#0066FF): 链接和标题
- **粉色** (#FF006E): 强调和装饰
- **黄色** (#FFBE0B): 引用和高亮
- **绿色** (#8AC926): 成功状态
- **紫色** (#8338EC): 特殊元素
- **黑色** (#000000): 边框和文字
- **浅灰** (#F3F4F6): 背景色

## 技术栈

- **Next.js 15**: React 框架
- **TypeScript**: 类型安全
- **Tailwind CSS**: 样式框架
- **Gray-matter**: Markdown 解析
- **Remark**: Markdown 处理

## 博客文章

项目包含四篇关于北京四季的博客文章：

1. **北京的春天** - 万物复苏，春暖花开
2. **北京的夏天** - 绿树成荫，荷花盛开
3. **北京的秋天** - 金风送爽，红叶满山
4. **北京的冬天** - 银装素裹，梅花傲雪

每篇文章都配有相应的封面图片和详细内容。

## 合规与版权说明

- 项目代码采用 MIT License，见 `LICENSE`。
- 第三方依赖和模板来源记录在 `THIRD_PARTY_NOTICES.md`。
- 静态视觉资产来源记录在 `ASSET_ATTRIBUTIONS.md`。
- `.env*` 和 `.claude/` 已加入 `.gitignore`，避免本地配置或密钥进入公开仓库。
