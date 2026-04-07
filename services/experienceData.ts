export type Experience = {
  id: number;
  category: "work" | "education";
  start_date: string;
  end_date: string | null;
  date_range: string;
  is_current: boolean;
  organization: string;
  position: string;
  stack: string[];
};

const getBackendUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  if (!url) {
    throw new Error("NEXT_PUBLIC_BACKEND_API_URL must be configured");
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
