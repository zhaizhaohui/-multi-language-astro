# Multilingual Astro starter

这是一个可复用的 Astro 多语言项目骨架，默认支持 `en` 和 `zh`，并提供按语言组织的博客内容集合。

## 开始使用

```bash
npm install
npm run dev
```

生产构建与预览：

```bash
npm run build
npm run preview
```

## 环境变量

复制 `.env.example` 为 `.env`，并填写正式站点地址：

```env
SITE_URL=https://example.com
```

`SITE_URL` 会自动用于 canonical、Open Graph URL 和 Sitemap。`.env` 已被 Git 忽略，不要提交真实配置。

## 路由

- `/`：跳转到默认语言 `/zh/`
- `/:lang/`：跳转到该语言的博客页
- `/:lang/blog`：显示该语言的 Markdown 内容

支持的语言在 `src/utils/i18n.ts` 中维护。新增语言时，同时在 `src/content/blog/` 下创建对应目录即可。

## 内容

博客内容放在：

```text
src/content/blog/{lang}/*.md
```

Markdown 的 frontmatter 目前要求 `title` 字段。内容集合由 Astro 官方 `glob` loader 自动读取，文件名会作为文章 ID。

## 项目结构

```text
src/
├─ content/          # Markdown 内容
├─ layouts/          # 全局页面布局
├─ pages/            # 页面与多语言路由
├─ styles/           # 全局样式
└─ utils/            # 语言配置与路由工具
```
