import React from "react";
import { School, GraduationCap, Microscope } from "lucide-react";
import FyzikaBackground from "../ui/FyzikaBackground";
import SubjectSelection from "../shared/SubjectSelection";

const Fyzika = () => {
  const levels = [
    {
      id: "zakladni",
      title: "Základní škola",
      level: "Začátečník",
      description:
        "Objevte svět kolem sebe. Proč věci padají dolů? Jak funguje elektřina? Zábavné experimenty a základy fyziky.",
      icon: School,
      color: "green",
      topics: [
        "Vlastnosti látek",
        "Síla a pohyb",
        "Teplo a teplota",
        "Elektrické obvody",
      ],
      path: "/predmety/fyzika/zs",
    },
    {
      id: "stredni",
      title: "Střední škola",
      level: "Pokročilý",
      description:
        "Ponořte se hlouběji do tajů mechaniky, termodynamiky a optiky. Příprava na maturitu a vysokou školu.",
      icon: Microscope,
      color: "blue",
      topics: [
        "Mechanika",
        "Molekulová fyzika",
        "Elektřina a magnetismus",
        "Optika",
      ],
      path: "/predmety/fyzika/ss",
    },
    {
      id: "vysoka",
      title: "Vysoká škola",
      level: "Expert",
      description:
        "Komplexní fyzikální teorie, kvantová mechanika a teorie relativity. Pro ty, kteří chtějí vědět vše.",
      icon: GraduationCap,
      color: "purple",
      topics: [
        "Teoretická mechanika",
        "Kvantová fyzika",
        "Termodynamika",
        "Jaderná fyzika",
      ],
      path: "/predmety/fyzika/vs",
    },
  ];

  return (
    <SubjectSelection
      title="Vyberte si úroveň studia"
      description="Zvolte si obtížnost, která odpovídá vašim znalostem a cílům. Od základů až po pokročilé koncepty."
      levels={levels}
      BackgroundComponent={FyzikaBackground}
      subjectTheme="purple"
    />
  );
};

export default Fyzika;
