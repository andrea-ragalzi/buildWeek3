export interface ExpCardInterface  {
    company: string;
    position: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    location: string;
    skills: string[];
}

export type MonthsMap = {
    [key: string]: number;
};