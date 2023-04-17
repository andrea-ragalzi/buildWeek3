import ExpCardInterface from "../types/ExpCardInterface";
import { Container, Row, Col } from 'react-bootstrap'

type MonthsMap = {
    [key: string]: number;
};

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
    'dicembre': 12
};

const employmentTime = (startDate: string, endDate: string): string => {
    console.log(startDate, endDate);
    if (!endDate) {
        return 'Present';
    }

    const [startMonthStr, startYearStr]: string[] = startDate.split(' ');
    const startMonth: number = months[startMonthStr.toLowerCase()];
    const startYear: number = parseInt(startYearStr.toLowerCase());

    const [endMonthStr, endYearStr]: string[] = endDate.split(' ');
    const endMonth: number = months[endMonthStr.toLowerCase()];
    const endYear: number = parseInt(endYearStr.toLowerCase());

    const yearsDiff = endYear - startYear;
    const monthsDiff = endMonth - startMonth;
    const monthsLabel = monthsDiff === 1 ? 'mese' : 'mesi';
    const yearsLabel = yearsDiff === 1 ? 'anno' : 'anni';
    return (
        `${yearsDiff} ${yearsLabel} e ${monthsDiff} ${monthsLabel}`
    );
};

const ExpCard = ({ company, position, employmentType,
    startDate, endDate, location, skills
}: ExpCardInterface) => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <strong>{position}</strong>
                </Col>
                <Col xs={12}>
                    <p>{company}</p>
                </Col>
                <Col xs={12}>
                    <p>{`${startDate} - ${endDate} · ${employmentTime(startDate, endDate)}`}</p>
                </Col>
                <Col xs={12}>
                    <p>{position}</p>
                </Col>
                <Col xs={12}>
                    <p>{position}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ExpCard;
