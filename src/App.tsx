import React from 'react';
import './style/App.scss';
import ExpCard from './components/ExpCard';
import { ExpCardInterface } from './types/ExpCardTypes';

const exp1: ExpCardInterface = {
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

const exp2: ExpCardInterface = {
  company: "Epicode",
  position: "Student",
  employmentType: "Full-time",
  startDate: "Gennaio 2023",
  endDate: "Luglio 2023",
  location: "Remote",
  skills: [
    "Bootstrap", "CSS", "HTML"
  ]
}

const exp3: ExpCardInterface = {
  company: "Freelance",
  position: "Web Developer",
  employmentType: "Full-time",
  startDate: "Aprile 2023",
  endDate: "Aprile 2023",
  location: "Alessandria, Italy",
  skills: [
    "Flask", "Python", "Git", "Linux", "Bash", "C"
  ]
}

function App() {
  return (
    <div className="App">
      <ExpCard {...exp1} />
      <ExpCard {...exp2} />
      <ExpCard {...exp3} />
    </div>
  );
}

export default App;
