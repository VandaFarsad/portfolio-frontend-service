export type StackItem = {
  id: string;
  name?: string;
  order: number;
};

export type StackItemWithIcon = StackItem & {
  iconClass: string;
};

// Icon mapping: Backend ID → Iconify class
const ICON_MAP: Record<string, string> = {
  python: "icon-[logos--python]",
  django: "icon-[skill-icons--django]",
  docker: "icon-[skill-icons--docker]",
  kubernetes: "icon-[logos--kubernetes]",
  gitlab: "icon-[skill-icons--gitlablight]",
  github: "icon-[skill-icons--githublight]",
  git: "icon-[logos--git-icon]",
  typescript: "icon-[skill-icons--typescript]",
  javascript: "icon-[logos--javascript]",
  nextjs: "icon-[devicon--nextjs]",
  react: "icon-[logos--react]",
  nodejs: "icon-[logos--nodejs-icon]",
  postgresql: "icon-[logos--postgresql]",
  postgres: "icon-[logos--postgresql]",
  redis: "icon-[logos--redis]",
  tailwind: "icon-[logos--tailwindcss-icon]",
  html: "icon-[logos--html-5]",
  css: "icon-[logos--css-3]",
  aws: "icon-[logos--aws]",
  nginx: "icon-[logos--nginx]",
  linux: "icon-[logos--linux-tux]",
  bash: "icon-[devicon--bash]",
  graphql: "icon-[logos--graphql]",
  rest: "icon-[mdi--api]",
  mongodb: "icon-[logos--mongodb-icon]",
  mysql: "icon-[logos--mysql-icon]",
};

const DEFAULT_ICON = "icon-[mdi--code-braces]";

const getBackendUrl = (): string => {
  const url = process.env.BACKEND_API_URL ?? process.env.NEXT_PUBLIC_BACKEND_API_URL;
  if (!url) {
    throw new Error("BACKEND_API_URL or NEXT_PUBLIC_BACKEND_API_URL must be configured");
  }
  return url;
};

export const fetchStack = async (): Promise<StackItemWithIcon[]> => {
  try {
    const response = await fetch(`${getBackendUrl()}stackicons`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as StackItem[];

    // Map backend data to include icon classes
    return data.map((item) => ({
      ...item,
      iconClass: ICON_MAP[item.id.toLowerCase()] || DEFAULT_ICON,
    }));
  } catch (error) {
    console.error(`Failed to fetch Stack: ${error}`);
    return [];
  }
};
