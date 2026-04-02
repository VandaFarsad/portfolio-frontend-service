export type StackIcon = {
  text: string;
  icon: string;
  position: number;
};

export const fetchStackIcons = async (): Promise<StackIcon[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}stackicons`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as StackIcon[];
  } catch (error) {
    console.error(`Failed to fetch StackIcons: ${error}`);
    return [];
  }
};

// Unfortunatly, I can't use the API above, because the @iconify-json package does only support hardcoding the icons.
export const stackIconData = [
  {
    text: "Python",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[logos--python]",
  },
  {
    text: "Django",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[skill-icons--django]",
  },
  {
    text: "Docker",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[skill-icons--docker]",
  },
  {
    text: "Kubernetes",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[logos--kubernetes]",
  },
  {
    text: "Gitlab",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[logos--gitlab]",
  },
  {
    text: "TypeScript",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[skill-icons--typescript]",
  },
  {
    text: "Next.js",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[devicon--nextjs]",
  },
  {
    text: "React.js",
    icon: "lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 icon-[logos--react]",
  },
];
