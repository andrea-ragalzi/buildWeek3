import { MonthsMap } from "../types/expCardTypes";

export const employmentTime = (startDate: string, endDate: string): string => {
    const months: MonthsMap = {
        'gennaio': 1,
        'febbraio': 2,
        'marzo': 3,
        'aprile': 4,
        'maggio': 5,
        'giugno': 6,
        'luglio': 7,
        'agosto': 8,
        'settembre': 9,
        'ottobre': 10,
        'novembre': 11,
        'dicembre': 12,
    };

    if (!endDate) {
        return 'Present';
    }

    const [startMonthStr, startYearStr]: string[] = startDate.split(" ");
    const startMonth: number = months[startMonthStr.toLowerCase()];
    const startYear: number = parseInt(startYearStr.toLowerCase());

    const [endMonthStr, endYearStr]: string[] = endDate.split(" ");
    const endMonth: number = months[endMonthStr.toLowerCase()];
    const endYear: number = parseInt(endYearStr.toLowerCase());

    const yearsDiff = endYear - startYear;
    const monthsDiff = (endMonth - startMonth) + 1;
    const monthsLabel = monthsDiff === 1 ? 'mese' : 'mesi';
    const yearsLabel = yearsDiff === 1 ? 'anno' : 'anni';

    if (!yearsDiff) {
        return (
            `${monthsDiff} ${monthsLabel}`
        );
    }
    else {
        return (
            `${yearsDiff} ${yearsLabel} e ${monthsDiff} ${monthsLabel}`
        );
    }
};