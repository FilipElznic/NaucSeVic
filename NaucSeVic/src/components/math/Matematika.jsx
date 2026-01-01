import React from "react";
import { Calculator, School, GraduationCap, Divide } from "lucide-react";
import MatematikaBackground from "./MatematikaBackground";
import SubjectSelection from "../shared/SubjectSelection";

const Matematika = () => {
  const levels = [
    {
      id: "zs1",
      title: "1. Stupeň ZŠ",
      level: "Začátečník",
      description:
        "Základy počítání, sčítání, odčítání, násobilka a první setkání s geometrií.",
      icon: School,
      color: "green",
      topics: [
        "Sčítání a odčítání",
        "Malá násobilka",
        "Geometrické tvary",
        "Slovní úlohy",
      ],
      path: "/predmety/matematika/zs/1-stupen",
    },
    {
      id: "zs2",
      title: "2. Stupeň ZŠ",
      level: "Mírně pokročilý",
      description:
        "Zlomky, procenta, rovnice a složitější geometrie. Příprava na přijímačky.",
      icon: Divide,
      color: "teal",
      topics: [
        "Zlomky a procenta",
        "Lineární rovnice",
        "Pythagorova věta",
        "Výrazy",
      ],
      path: "/predmety/matematika/zs/2-stupen",
    },
    {
      id: "stredni",
      title: "Střední škola",
      level: "Pokročilý",
      description:
        "Příprava na maturitu a další studium. Funkce, komplexní čísla a úvod do analýzy.",
      icon: Calculator,
      color: "blue",
      topics: [
        "Funkce a grafy",
        "Komplexní čísla",
        "Posloupnosti a řady",
        "Kombinatorika",
      ],
      path: "/predmety/matematika/ss",
    },
    {
      id: "vysoka",
      title: "Vysoká škola",
      level: "Expert",
      description:
        "Pokročilá matematika pro technické a přírodovědné obory. Diferenciální počet a algebra.",
      icon: GraduationCap,
      color: "purple",
      topics: [
        "Matematická analýza",
        "Lineární algebra",
        "Diferenciální rovnice",
        "Statistika",
      ],
      path: "/predmety/matematika/vs",
    },
  ];

  return (
    <SubjectSelection
      title="Vyberte si úroveň studia"
      description="Zvolte si obtížnost, která odpovídá vašim znalostem a cílům. Od základů až po pokročilé koncepty."
      levels={levels}
      BackgroundComponent={MatematikaBackground}
      subjectTheme="blue"
    />
  );
};

export default Matematika;
