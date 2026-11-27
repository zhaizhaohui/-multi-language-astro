export const languages = ["en", "zh"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "zh";

export const localeMap: Record<Lang, string> = {
  en: "en-US",
  zh: "zh-CN",
};

export function getLangPaths() {
  return languages.map((lang) => ({
    params: { lang },
    props: { lang, locale: localeMap[lang] },
  }));
}

export const languageNames: Record<Lang, string> = {
  en: "EN",
  zh: "中文",
};

export function getAlternatePath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && languages.includes(segments[0] as Lang)) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }

  const path = `/${segments.join("/")}`;
  return pathname.endsWith("/") ? `${path}/` : path;
}
