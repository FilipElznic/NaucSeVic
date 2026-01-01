import React from "react";
import { Compass, School, GraduationCap } from "lucide-react";
import GeometryBackground from "./GeometryBackground";
import SubjectSelection from "../shared/SubjectSelection";

const Geometrie = () => {
  const levels = [
    {
      id: "zakladni",
      title: "Základní škola",
      level: "Začátečník",
      description:
        "Poznáváme tvary kolem nás. Čtverec, trojúhelník, kruh. Měříme, rýsujeme a počítáme obvody a obsahy.",
      icon: School,
      color: "green",
      topics: [
        "Základní útvary",
        "Měření a rýsování",
        "Obvody a obsahy",
        "Tělesa a jejich sítě",
      ],
      path: "/predmety/geometrie/zs",
    },
    {
      id: "stredni",
      title: "Střední škola",
      level: "Pokročilý",
      description:
        "Analytická geometrie, kuželosečky a trigonometrie. Propojujeme algebru s geometrií.",
      icon: Compass,
      color: "blue",
      topics: [
        "Analytická geometrie",
        "Trigonometrie",
        "Kuželosečky",
        "Vektory",
      ],
      path: "/predmety/geometrie/ss",
    },
    {
      id: "vysoka",
      title: "Vysoká škola",
      level: "Expert",
      description:
        "Diferenciální geometrie, topologie a neeukleidovské geometrie. Abstraktní pohled na prostor.",
      icon: GraduationCap,
      color: "purple",
      topics: [
        "Lineární algebra",
        "Diferenciální geometrie",
        "Topologie",
        "Neeukleidovská geometrie",
      ],
      path: "/predmety/geometrie/vs",
    },
  ];

  return (
    <SubjectSelection
      title="Vyberte si úroveň studia"
      description="Zvolte si obtížnost, která odpovídá vašim znalostem a cílům. Od základů až po pokročilé koncepty."
      levels={levels}
      BackgroundComponent={GeometryBackground}
      subjectTheme="pink"
    />
  );
};

export default Geometrie;
