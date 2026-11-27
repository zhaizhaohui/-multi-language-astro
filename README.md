# Multilingual Astro Starter

这是一个可复用的 Astro 多语言网站骨架，提供语言路由、Markdown 内容集合、博客列表与详情页、公共布局和 SEO 配置。

当前默认支持：`en`、`zh`。

## 快速开始

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

构建和预览生产版本：

```bash
npm run build
npm run preview
```

## 环境变量

复制环境变量模板：

```bash
cp .env.example .env
```

然后填写正式站点地址：

```env
SITE_URL=https://example.com
```

`SITE_URL` 会自动用于：

- canonical URL
- Open Graph URL
- Sitemap

`.env` 已被 Git 忽略，不要提交真实配置。

## 路由

| 地址 | 用途 |
| --- | --- |
| `/` | 跳转到默认语言 `/zh/` |
| `/:lang/` | 显示对应语言的首页内容 |
| `/:lang/blog` | 显示对应语言的博客列表 |
| `/:lang/blog/:slug` | 显示博客详情页 |
| 未匹配路由 | 使用全局 404 页面 |

示例：

```text
/en/
/zh/
/en/blog
/en/blog/1127
/zh/blog/home
```

## 内容管理

### 博客内容

博客文件放在：

```text
src/content/blog/{lang}/*.md
```

例如：

```text
src/content/blog/en/home.md
src/content/blog/en/1127.md
src/content/blog/zh/home.md
```

每篇文章至少需要 `title`：

```md
---
title: "Article title"
---

Article content.
```

文件名会自动成为文章 slug：

```text
src/content/blog/en/1127.md
→ /en/blog/1127
```

### 固定页面内容

固定页面内容放在：

```text
src/content/pages/{lang}/*.md
```

例如：首页内容：

```text
src/content/pages/en/home.md
src/content/pages/zh/home.md
```

语言首页 `/:lang/` 会读取对应语言的 `pages/{lang}/home.md`。如果文件不存在，会自动跳转到该语言的博客页。

About、Contact、Privacy 等固定页面建议继续使用 `src/content/pages`，不要放入博客集合：

```text
src/content/pages/en/about.md
src/content/pages/en/contact.md
src/content/pages/en/privacy.md
```

对应的 `.astro` 文件只负责读取内容、渲染布局和处理 SEO。

## 新增语言

1. 在 `src/utils/i18n.ts` 的 `languages` 中添加语言代码。
2. 在 `localeMap` 中添加对应 locale。
3. 在 `src/utils/dictionary.ts` 中添加界面文案。
4. 创建对应的内容目录：

```text
src/content/blog/{lang}/
src/content/pages/{lang}/
```

例如新增 `ja`：

```text
src/content/blog/ja/
src/content/pages/ja/
```

由于内容集合和语言字典使用类型约束，缺少必要配置时可以在构建阶段发现问题。

## SEO

公共布局位于：

```text
src/layouts/Layout.astro
```

页面可以传入：

```astro
<Layout
  title="Page title"
  description="Page description"
  lang={lang}
  image="/og-image.png"
  noindex={false}
>
  <slot />
</Layout>
```

canonical 不需要手动传入。配置 `SITE_URL` 后，Layout 会根据当前页面路径自动生成 canonical 和 Open Graph URL。

## 项目结构

```text
src/
├─ content/
│  ├─ blog/             # 博客 Markdown 内容
│  └─ pages/            # 固定页面 Markdown 内容
├─ layouts/
│  └─ Layout.astro      # 公共布局与 SEO
├─ pages/
│  ├─ [lang]/           # 多语言页面路由
│  ├─ 404.astro         # 全局 404 页面
│  └─ index.astro       # 根路径跳转
├─ styles/
│  └─ global.css        # Tailwind 与 Typography
└─ utils/
   ├─ i18n.ts           # 语言、locale 和路径工具
   └─ dictionary.ts     # 界面文案字典
```

内容集合配置位于：

```text
src/content.config.ts
```

其中 `blog` 和 `pages` 分别对应 `src/content/blog` 与 `src/content/pages`。
