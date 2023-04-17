import React from 'react';
import './style/App.scss';
import ExpCard from './components/ExpCard';
import ExpCardInterface from './types/ExpCardInterface';

const experience: ExpCardInterface = {
    company: "GEFIT SPA",
    position: "Software Developer",
    employmentType: "Full-time",
    startDate: "Ottobre 2019",
    endDate: "Novembre 2022",
    location: "Alessandria, Italy",
    skills: [
        "Bootstrap", "CSS", "HTML", "Flask", "Python", "Git", "Linux",
        "Bash", "C", "MySQL", "Server Microsoft SQL", "Sviluppo front-end",
        "Sviluppo di software", "Sviluppo di applicazioni",
        "Progettazione software", "Strutture dati", "Database",
        "Programmazione", "Debug", "Problem solving",
        "Lavoro di squadra", "Mentoring", "Informatica", "Container",
        "Sistemi embedded", "Raspberry"
    ]
}

function App() {
    return (
        <div className="App">
            <h1>APP OK</h1>
            <ExpCard {...experience} />
        </div>
    );
}

export default App;
