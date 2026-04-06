export type Experience = {
  id: string;
  type: string;
  date: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

const getBackendUrl = (): string => {
  const url = process.env.BACKEND_API_URL ?? process.env.NEXT_PUBLIC_BACKEND_API_URL;
  if (!url) {
    throw new Error("BACKEND_API_URL or NEXT_PUBLIC_BACKEND_API_URL must be configured");
  }
  return url;
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const response = await fetch(`${getBackendUrl()}experiences`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData as Experience[];
  } catch (error) {
    console.error(`Failed to fetch Experiences: ${error}`);
    return [];
  }
};
