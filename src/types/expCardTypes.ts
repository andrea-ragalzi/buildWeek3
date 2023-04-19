export interface Experience {
    _id: string;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    area: string;
    username: string;
    image: string;
    skills?: string[];
  }

export type MonthsMap = {
    [key: string]: number;
};