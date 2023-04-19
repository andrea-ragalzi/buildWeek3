export interface Experience {
  _id?: string, // server generated
  role: string,
  company: string,
  startDate: string,
  endDate: string | null,							
  description: string,
  area: string,
  username: string,
  createdAt?: string, // server generated
  updatedAt?: string | null, // server generated
  __v?: string,
  image: string
  }

export type MonthsMap = {
    [key: string]: number;
};