import { ExpCardInterface, MonthsMap } from "./../types/ExpCardTypes";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";


const months: MonthsMap = {
  gennaio: 1,
  febbraio: 2,
  marzo: 3,
  aprile: 4,
  maggio: 5,
  giugno: 6,
  luglio: 7,
  agosto: 8,
  settembre: 9,
  ottobre: 10,
  novembre: 11,
  dicembre: 12,
};

const employmentTime = (startDate: string, endDate: string): string => {
    
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

const ExpCard = ({
  company,
  position,
  employmentType,
  startDate,
  endDate,
  location,
  skills,
}: ExpCardInterface) => {
    const [collapseButton, setCollapseButton] = useState<boolean>(false);
    const [skillsStr, setSkillsStr] = useState<string>(skills.join(' · '));
    const MAX_LENGHT_SKILLS = 95;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setCollapseButton(false);
        setSkillsStr(skills.join(' · '));
    }

    useEffect(() => {
        console.log('use effect 1');
        if (skillsStr.length >= MAX_LENGHT_SKILLS) {
            setSkillsStr(skillsStr.substring(0, MAX_LENGHT_SKILLS));
            setCollapseButton(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
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
                    <p>{location}</p>
                </Col>
                <Col xs={12}>
                    <p><strong>Competenze: </strong>{skillsStr}
                        {collapseButton && <span onClick={handleClick}
                            className={
                                skillsStr.length >= MAX_LENGHT_SKILLS ? "text-secondary d-inline" : "text-secondary d-none"}
                        > ...vedi altro</span>}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ExpCard;
