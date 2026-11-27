import type { Lang } from "./i18n";

export interface NotFoundDictionary {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  message: string;
  home: string;
  blog: string;
}

export const dictionary: Record<Lang, { notFound: NotFoundDictionary }> = {
  en: {
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
      eyebrow: "Page not found",
      heading: "This page has gone somewhere else",
      message: "The address may be outdated, or the page may have moved.",
      home: "Back home",
      blog: "Visit the blog",
    },
  },
  zh: {
    notFound: {
      title: "页面不存在",
      description: "你访问的页面不存在。",
      eyebrow: "页面未找到",
      heading: "这条路还没有通向任何地方",
      message: "你访问的地址可能已失效，或者页面已经移动。",
      home: "返回首页",
      blog: "浏览博客",
    },
  },
};

export function getDictionary(lang: Lang) {
  return dictionary[lang];
}
