"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import GeometryBackground from "./GeometryBackground";

gsap.registerPlugin(SplitText, useGSAP);

// ===================== HERO =====================
export default function LandingPage({
  title = "Geometrie",
  description = "Objevte krásu tvarů, prostoru a jejich vztahů. Naučte se geometrické zákony od základů po pokročilé techniky.",
  badgeText = "Interaktivní výuka",
  badgeLabel = "Novinka",
  ctaButtons = [
    { text: "Začít studovat", href: "#get-started", primary: true },
    { text: "Prohlédnout kurzy", href: "#courses" },
  ],
  microDetails = [
    "3D Vizualizace",
    "Interaktivní modely",
    "Praktické příklady",
  ],
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const microRef = useRef(null);
  const microItem1Ref = useRef(null);
  const microItem2Ref = useRef(null);
  const microItem3Ref = useRef(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current, {
          type: "lines",
          wordsClass: "lines",
        });

        gsap.set(split.lines, {
          filter: "blur(16px)",
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: "50% 100%",
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [
          microItem1Ref.current,
          microItem2Ref.current,
          microItem3Ref.current,
        ].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        tl.to(
          split.lines,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.1
        );

        if (paraRef.current) {
          tl.to(
            paraRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.55"
          );
        }
        if (ctaRef.current) {
          tl.to(
            ctaRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.35"
          );
        }
        if (microItems.length > 0) {
          tl.to(
            microItems,
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.25"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative  ">
      <GeometryBackground />{" "}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.08em] text-black/70 dark:text-white/70">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-black/40 dark:bg-white/40" />
          <span className="text-xs tracking-tight text-black/80 dark:text-white/80">
            {badgeText}
          </span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl font-bold text-left text-5xl text-black dark:text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paraRef}
          className="max-w-xl text-left text-base leading-relaxed tracking-tight text-black/75 dark:text-white/75 sm:text-lg"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-2xl border px-5 py-3 text-sm tracking-tight transition-colors focus:outline-none focus:ring-2 duration-300 ${
                button.primary
                  ? "border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 text-black dark:text-white backdrop-blur-sm hover:bg-black/20 dark:hover:bg-white/20 focus:ring-black/30 dark:focus:ring-white/30"
                  : "border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 focus:ring-black/30 dark:focus:ring-white/30"
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <ul
          ref={microRef}
          className="mt-8 flex flex-wrap gap-6 text-xs tracking-tight text-black/60 dark:text-white/60"
        >
          {microDetails.map((detail, index) => {
            const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
            return (
              <li
                key={index}
                ref={refMap[index]}
                className="flex items-center gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-black/40 dark:bg-white/40" />{" "}
                {detail}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
