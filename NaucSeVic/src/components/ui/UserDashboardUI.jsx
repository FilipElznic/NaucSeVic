import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { cloudFunctionsService } from "../../services/cloudFunctions";
import { subjectConfig } from "../../config/subjectConfig";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  User,
  Zap,
  TrendingUp,
  Calendar as CalendarIcon,
  BookOpen,
  Award,
  Star,
  Activity,
  Target,
  Plus,
  Clock,
  X,
  Trophy,
  Flame,
  Coins,
} from "lucide-react";

// Helper component to ensure chart only renders when container has dimensions
const MeasuredContainer = ({ children }) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const checkDimensions = () => {
      if (
        ref.current &&
        ref.current.offsetWidth > 0 &&
        ref.current.offsetHeight > 0
      ) {
        setReady(true);
      }
    };

    // Initial check
    checkDimensions();

    // Observer for changes
    const ro = new ResizeObserver(checkDimensions);
    ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      {ready ? children : null}
    </div>
  );
};

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

// Simple icons component for usage
const BrainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 12.15 0 0 1 12 4.15 2.5 12.15 0 0 1 14.5 2c2 0 4.05 1.65 4.05 4.5V11c0 .9-.55 1.6-1.55 1.6-2 0-3.05-1.15-4-3.5 0 0-1.5 1.65-2 3-1 2.5-3.5 2.5-3.5 2.5A3.5 3.5 0 0 1 2 11c0-2.85 2.05-4.5 4.05-4.5A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M2.5 14.5A3.5 3.5 0 0 0 4.5 21a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2-3" />
  </svg>
);

const PlayIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor,
      ),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  isDarkMode = true,
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: ${isDarkMode ? "screen" : "normal"};
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius,
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [
    gridRef,
    disableAnimations,
    enabled,
    spotlightRadius,
    glowColor,
    isDarkMode,
  ]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-3 sm:gap-6 p-2 sm:p-4 w-full max-w-[1600px] select-none relative"
    style={{ fontSize: "clamp(0.875rem, 0.8rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const parseCourseDetails = (courseId) => {
  if (!courseId || typeof courseId !== "string") return null;

  const parts = courseId.split("_");
  // Check if it matches expected format (at least subject_difficulty)
  // But be lenient if it's just one word? No, user said "data format like this"
  if (parts.length < 2) return null;

  const subjectMap = {
    matematika: "Matematika",
    fyzika: "Fyzika",
    geometrie: "Geometrie",
  };

  const rawSubject = parts[0];
  const rawDifficulty = parts[1];
  const rawLevel = parts[2];

  const subject =
    subjectMap[rawSubject] ||
    rawSubject.charAt(0).toUpperCase() + rawSubject.slice(1);

  let difficulty = rawDifficulty.toUpperCase();
  if (rawDifficulty === "zs") difficulty = "ZŠ";
  else if (rawDifficulty === "ss") difficulty = "SŠ";
  else if (rawDifficulty === "vs") difficulty = "VŠ";

  return {
    subject,
    difficulty,
    level: rawLevel,
  };
};

const UserDashboardUI = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  isDarkMode = true,
  leaderboard = [],
  leaderboardLoading = false,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  const { user } = useFirebaseAuth();
  const navigate = useNavigate();

  const isGoogleUser = user?.providerData?.some(
    (p) => p?.providerId === "google.com",
  );
  const googleProvider = user?.providerData?.find(
    (p) => p?.providerId === "google.com",
  );
  const photoURL = (isGoogleUser && googleProvider?.photoURL) || user?.photoURL;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [selectedBooster, setSelectedBooster] = useState(null);
  const [loadingAction, setLoadingAction] = useState(false);

  const shopItems = [
    {
      id: "xp_boost_1h",
      price: 100,
      name: "XP Boost (1h)",
      duration: "1 hodina",
      multiplier: "2x",
      icon: Zap,
      color: "text-amber-400 bg-amber-500/20",
    },
    {
      id: "xp_boost_12h",
      price: 500,
      name: "XP Boost (12h)",
      duration: "12 hodin",
      multiplier: "2x",
      icon: Zap,
      color: "text-purple-400 bg-purple-500/20",
    },
    {
      id: "xp_boost_24h",
      price: 1000,
      name: "XP Boost (24h)",
      duration: "24 hodin",
      multiplier: "2x",
      icon: Zap,
      color: "text-emerald-400 bg-emerald-500/20",
    },
  ];

  const handleBuyBooster = async (boosterId) => {
    setLoadingAction(true);
    try {
      await cloudFunctionsService.buyBooster(boosterId);
      const homeData = await cloudFunctionsService.getHomeData();
      setData(homeData);
      setShowShop(false);
    } catch (error) {
      console.error(error);
      alert(error.message || "Chyba při nákupu");
    } finally {
      setLoadingAction(false);
    }
  };

  const handleUseBooster = async () => {
    if (!selectedBooster) return;
    setLoadingAction(true);
    try {
      await cloudFunctionsService.activateBooster(selectedBooster);
      const homeData = await cloudFunctionsService.getHomeData();
      setData(homeData);
      setSelectedBooster(null);
    } catch (error) {
      console.error(error);
      alert(error.message || "Chyba při aktivaci");
    } finally {
      setLoadingAction(false);
    }
  };

  const handleCourseClick = (courseId) => {
    if (!courseId) return;
    const parts = courseId.split("_");

    // Check if it's a lecture (has at least subject, level, chapter, lecture)
    if (parts.length >= 4) {
      navigate(`/kurz/${parts.join("/")}`);
      setShowAllCourses(false);
    } else if (parts.length >= 2) {
      // Fix for matematika ZŠ routing (1 -> 1-stupen, 2 -> 2-stupen)
      if (parts[0] === "matematika" && parts[1] === "zs") {
        if (parts[2] === "1") parts[2] = "1-stupen";
        if (parts[2] === "2") parts[2] = "2-stupen";
      }

      // It looks like subject/level (e.g. matematika_ss)
      navigate(`/predmety/${parts.join("/")}`);
      setShowAllCourses(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const homeData = await cloudFunctionsService.getHomeData();
          setData(homeData);
        } catch (error) {
          console.error("Error fetching bento data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  // Use real data or fallback to defaults while loading/if error
  const activityData = data?.activityData || [
    { name: "Po", xp: 0 },
    { name: "Út", xp: 0 },
    { name: "St", xp: 0 },
    { name: "Čt", xp: 0 },
    { name: "Pá", xp: 0 },
    { name: "So", xp: 0 },
    { name: "Ne", xp: 0 },
  ];

  const userStats = data?.userStats || {
    name: user?.displayName || "Uživatel",
    email: user?.email || "...",
    level: 1,
    xp: 0,
    maxXp: 100,
    coins: 0,
    streak: 0,
  };

  // If backend returned "Uživatel" but we have a display name, prefer display name
  if (userStats.name === "Uživatel" && user?.displayName) {
    userStats.name = user.displayName;
  }

  const activeBoosters = data?.activeBoosts || [];
  const inventory = data?.inventory || {};

  // Computed boosters display list (Active + Inventory Summary)
  // We want to show active ones first, then maybe inventory counts?
  // For the prompt requirement, we'll focus on active and inventory.

  // Helper to format time left
  const getTimeLeft = (endsAt) => {
    if (!endsAt) return "";
    const diff = endsAt - Date.now();
    if (diff <= 0) return "Vypršel";
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const rawFavoriteCourses = data?.favoriteCourses;
  let favoriteCourses = [];

  if (rawFavoriteCourses && rawFavoriteCourses.length > 0) {
    favoriteCourses = rawFavoriteCourses.map((courseItem) => {
      let courseId = courseItem;
      let progress = 0;

      // If object, extract ID and progress
      if (typeof courseItem === "object" && courseItem !== null) {
        courseId = courseItem.id;
        progress = courseItem.progress || 0;
      }

      const details = parseCourseDetails(courseId);
      const subjectKey = courseId.split("_")[0];
      const config = subjectConfig[subjectKey];
      const colorName = config?.themeColor || "blue";

      return {
        id: courseId,
        title: details ? details.subject : courseId,
        progress: progress,
        color: `bg-${colorName}-500`,
        details: details,
      };
    });
  } else {
    favoriteCourses = [
      {
        id: "fallback",
        title: "Zatím žádné kurzy",
        progress: 0,
        color: "bg-gray-500",
      },
    ];
  }

  // Calendar Logic
  const date = new Date();
  const monthName = date.toLocaleString("cs-CZ", { month: "long" });
  const year = date.getFullYear();
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, date.getMonth(), 1).getDay(); // 0 = Sun
  const startingDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Mon start

  const daysOfWeek = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: startingDayIndex }, () => null);

  // Active days for calendar – use full month progress so dates older than 7 days show up
  const monthProgress = data?.monthProgress || {};
  const activeDays = Object.entries(monthProgress)
    .filter(([, dayData]) =>
      dayData.loginTime ||
      (dayData.xpGained || 0) > 0 ||
      (dayData.coinsGained || 0) > 0 ||
      (dayData.tasksFinished || 0) > 0
    )
    .map(([dateStr]) => new Date(dateStr).getDate());

  // Wrapper for consistency
  const BentoItem = ({
    children,
    className = "",
    style = {},
    padding = "p-6",
  }) => {
    const baseClassName = `card flex flex-col justify-between relative w-full h-full ${padding} rounded-[24px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
      enableBorderGlow ? "card--border-glow" : ""
    } ${className}`;

    const cardStyle = {
      backgroundColor: "var(--background-dark)",
      borderColor: "var(--border-color)",
      color: "var(--white)",
      "--glow-x": "50%",
      "--glow-y": "50%",
      "--glow-intensity": "0",
      "--glow-radius": "200px",
      ...style,
    };

    if (enableStars) {
      return (
        <ParticleCard
          className={baseClassName}
          style={cardStyle}
          disableAnimations={shouldDisableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
        >
          {children}
        </ParticleCard>
      );
    }

    return (
      <div
        className={baseClassName}
        style={cardStyle}
        ref={(el) => {
          if (!el) return;

          const handleMouseMove = (e) => {
            if (shouldDisableAnimations) return;

            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
              const rotateX = ((y - centerY) / centerY) * -10;
              const rotateY = ((x - centerX) / centerX) * 10;

              gsap.to(el, {
                rotateX,
                rotateY,
                duration: 0.1,
                ease: "power2.out",
                transformPerspective: 1000,
              });
            }

            if (enableMagnetism) {
              const magnetX = (x - centerX) * 0.05;
              const magnetY = (y - centerY) * 0.05;

              gsap.to(el, {
                x: magnetX,
                y: magnetY,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          };

          const handleMouseLeave = () => {
            if (shouldDisableAnimations) return;

            if (enableTilt) {
              gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }

            if (enableMagnetism) {
              gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          };

          const handleClick = (e) => {
            if (!clickEffect || shouldDisableAnimations) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxDistance = Math.max(
              Math.hypot(x, y),
              Math.hypot(x - rect.width, y),
              Math.hypot(x, y - rect.height),
              Math.hypot(x - rect.width, y - rect.height),
            );
            const ripple = document.createElement("div");
            ripple.style.cssText = `
              position: absolute;
              width: ${maxDistance * 2}px;
              height: ${maxDistance * 2}px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
              left: ${x - maxDistance}px;
              top: ${y - maxDistance}px;
              pointer-events: none;
              z-index: 1000;
            `;
            el.appendChild(ripple);
            gsap.fromTo(
              ripple,
              { scale: 0, opacity: 1 },
              {
                scale: 1,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => ripple.remove(),
              },
            );
          };

          el.addEventListener("mousemove", handleMouseMove);
          el.addEventListener("mouseleave", handleMouseLeave);
          el.addEventListener("click", handleClick);
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: ${isDarkMode ? "#392e4e" : "#111111"};
            --background-dark: ${isDarkMode ? "#000000" : "#ffffff"};
            --white: ${isDarkMode ? "hsl(0, 0%, 100%)" : "#020617"};
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
            --shadow-primary: ${
              isDarkMode ? "rgba(46, 24, 78, 0.4)" : "rgba(0, 0, 0, 0.25)"
            };
          }
          
          .card-responsive {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            margin: 0 auto;
            min-width: 0;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              gap: 2rem;
            }
          }

          .dashboard-grid {
            display: grid;
            gap: 0.75rem;
            grid-template-columns: 1fr;
            width: 100%;
            min-width: 0;
          }
          
          @media (min-width: 600px) {
            .dashboard-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }
          }
          
          /* 
            MATCHING HOME.JSX LAYOUT 
            ------------------------
            Grid: 4 Columns
            
            1. Sidebar (Left): Col 1, Row 1-3
            2. Header (Top Right): Col 2-4, Row 1
            3. Activity (Middle Left): Col 2-3, Row 2 (Height min 300px)
            4. Calendar/Boosters (Middle Right): Col 4, Row 2 (Height min 300px)
            5. Quick Actions (Bottom Left): Col 2, Row 3
            6. Courses (Bottom Right): Col 3-4, Row 3
          */
          @media (min-width: 1024px) {
            .card-responsive {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }

            .dashboard-grid {
              display: grid;
              gap: 1.5rem;
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: auto 260px 260px;
              width: 100%;
            }
            
            /* Sidebar */
            .dashboard-grid .card:nth-child(1) {
              grid-column: 1;
              grid-row: 1 / span 3;
            }
            
            /* Header */
            .dashboard-grid .card:nth-child(2) {
              grid-column: 2 / span 3;
              grid-row: 1;
              min-height: 120px;
            }
            
            /* Activity Graph */
            .dashboard-grid .card:nth-child(3) {
              grid-column: 2 / span 2;
              grid-row: 2;
            }

            /* Calendar/Assistant */
            .dashboard-grid .card:nth-child(4) {
              grid-column: 4;
              grid-row: 2;
            }
            
            /* Quick Actions */
            .dashboard-grid .card:nth-child(5) {
              grid-column: 2;
              grid-row: 3;
            }

            /* Courses */
            .dashboard-grid .card:nth-child(6) {
              grid-column: 3 / span 2;
              grid-row: 3;
            }

           
          }
          
          
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px var(--shadow-primary), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
         
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
          isDarkMode={isDarkMode}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive">
          <div className="dashboard-grid">
            {/* 1. Sidebar (User Stats) */}
            <BentoItem>
              <div className="flex flex-col h-full gap-6 relative z-10 hidden lg:flex">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 p-1">
                    <div className="w-full h-full rounded-full bg-blue-50 dark:bg-[#0B0C15] flex items-center justify-center overflow-hidden">
                      {photoURL == 0 || photoURL == null ? (
                        <User size={48} className="text-gray-400" />
                      ) : (
                        <img
                          src={photoURL}
                          alt={userStats.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{userStats.name}</h2>
                    <p className="text-sm opacity-60 break-all">
                      {userStats.email}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 w-full">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">{userStats.xp} XP</span>
                    <span className="font-mono text-purple-600 dark:text-purple-400">
                      {userStats.maxXp} XP
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-purple-600 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                      style={{
                        width: `${Math.min(
                          (userStats.xp / userStats.maxXp) * 100,
                          100,
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-black/5 dark:bg-[#0B0C15]/50 border border-transparent dark:border-white/5 rounded-xl p-3 flex flex-col items-center">
                    <Star
                      className="text-amber-500 dark:text-amber-400 mb-1"
                      size={20}
                    />
                    <span className="font-bold">{userStats.coins}</span>
                    <span className="text-[10px] opacity-60 uppercase">
                      Mince
                    </span>
                  </div>
                  <div className="bg-black/5 dark:bg-[#0B0C15]/50 border border-transparent dark:border-white/5 rounded-xl p-3 flex flex-col items-center">
                    <Zap
                      className="text-blue-500 dark:text-fuchsia-500 mb-1"
                      size={20}
                    />
                    <span className="font-bold">{userStats.streak}</span>
                    <span className="text-[10px] opacity-60 uppercase">
                      Série
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => navigate("/profil")}
                    className="w-full py-2 bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-white/10 rounded-xl text-sm transition-colors border border-black/5 dark:border-white/5"
                  >
                    Upravit profil
                  </button>
                </div>
              </div>
              {/* Mobile Fallback for sidebar content */}
              <div className="flex flex-col h-full gap-4 relative z-10 lg:hidden">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-blue-50 dark:bg-[#0B0C15] flex items-center justify-center overflow-hidden">
                      {photoURL ? (
                        <img
                          src={photoURL}
                          alt={userStats.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={24} className="text-gray-400" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{userStats.name}</h2>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400">
                      Lvl {userStats.level} • {userStats.xp} XP
                    </span>
                  </div>
                </div>
              </div>
            </BentoItem>

            {/* 2. Header */}
            <BentoItem className="justify-center">
              <div className="flex flex-col h-full relative z-10 w-full overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="text-amber-400" size={16} /> Boostery
                  </h3>
                  <button
                    onClick={() => setShowShop(true)}
                    className="text-xs p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="flex-1 flex overflow-x-auto gap-2 pb-2 custom-scrollbar mask-gradient-right">
                  {/* Active Boosts */}
                  {activeBoosters.map((boost, index) => (
                    <div
                      key={`active-${index}`}
                      className="flex-shrink-0 w-[130px] flex flex-col justify-between p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 snap-start"
                    >
                      <div className="flex items-start justify-between w-full mb-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                          <TrendingUp size={16} />
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse mt-1"></div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">
                          {boost.multiplier}x XP
                        </div>
                        <div className="text-[10px] opacity-60 flex items-center gap-1">
                          <Clock size={10} /> {getTimeLeft(boost.endsAt)}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Inventory Summary */}
                  {Object.keys(inventory).length > 0
                    ? Object.entries(inventory).map(([id, count]) => {
                        if (count <= 0) return null;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedBooster(id)}
                            className="flex-shrink-0 w-[130px] flex flex-col justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group snap-start"
                          >
                            <div className="flex items-start justify-between w-full mb-2">
                              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <Zap size={16} />
                              </div>
                              <div className="px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-mono">
                                x{count}
                              </div>
                            </div>
                            <div>
                              <div
                                className="text-sm font-medium opacity-90 truncate"
                                title={
                                  shopItems.find((item) => item.id === id)
                                    ?.name ||
                                  (id.includes("xp_boost")
                                    ? "XP Boost"
                                    : "Booster")
                                }
                              >
                                {shopItems.find((item) => item.id === id)
                                  ?.name ||
                                  (id.includes("xp_boost")
                                    ? "XP Boost"
                                    : "Booster")}
                              </div>
                              <div className="text-[10px] opacity-50">
                                {shopItems.find((item) => item.id === id)
                                  ?.duration || "Použít"}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : activeBoosters.length === 0 && (
                        <div className="w-full flex items-center justify-center text-center opacity-40 p-4 min-h-[100px]">
                          <div className="flex flex-col items-center">
                            <Zap size={24} className="mb-2" />
                            <p className="text-xs">Žádné boostery</p>
                          </div>
                        </div>
                      )}
                </div>
              </div>
            </BentoItem>

            {/* 3. Activity Graph */}
            <BentoItem>
              <div className="flex flex-col h-full relative z-10 w-full">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Activity
                    size={18}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Aktivita
                </h3>
                <div className="flex-1 w-full min-h-[140px] min-w-0 relative">
                  <MeasuredContainer>
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minWidth={50}
                      minHeight={50}
                      debounce={300}
                    >
                      <AreaChart data={activityData}>
                        <defs>
                          <linearGradient
                            id="colorXp"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#8b5cf6"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8b5cf6"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke={isDarkMode ? "#ffffff10" : "#00000010"}
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          stroke={isDarkMode ? "#6b7280" : "#94a3b8"}
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke={isDarkMode ? "#6b7280" : "#94a3b8"}
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white/95 dark:bg-[#0B0C15]/95 border border-purple-500/30 p-2 rounded-lg shadow-lg text-xs min-w-[80px] text-center backdrop-blur-md">
                                  <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                                    {label}
                                  </p>
                                  <p className="text-purple-600 dark:text-purple-400 font-bold">
                                    {payload[0].value} XP
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ stroke: "#8b5cf6", strokeWidth: 1 }}
                        />
                        <Area
                          type="monotone"
                          dataKey="xp"
                          stroke="#8b5cf6"
                          fillOpacity={1}
                          fill="url(#colorXp)"
                          strokeWidth={3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </MeasuredContainer>
                </div>
              </div>
            </BentoItem>

            {/* 4. Calendar & Boosters */}

            {/* in calendar use the users progress data and mark each day the activity was written to the database */}
            <BentoItem padding="p-4">
              <div className="flex flex-col h-full overflow-hidden relative z-10">
                {/* Calendar Section */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex-shrink-0 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xs font-semibold flex items-center gap-1.5">
                        <CalendarIcon size={14} /> {monthName} {year}
                      </h3>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-[9px] opacity-60">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-7 grid-rows-6 gap-1 text-center text-[9px] min-h-0">
                    {padding.map((_, index) => (
                      <div key={`pad-${index}`} />
                    ))}
                    {days.map((day) => {
                      const isToday = day === date.getDate();
                      const isActive = activeDays.includes(day);
                      return (
                        <div
                          key={day}
                          className={`flex flex-col items-center justify-center rounded-md cursor-pointer transition-colors relative
                              ${
                                isToday
                                  ? "bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                                  : "hover:bg-black/5 dark:hover:bg-purple-500/10 opacity-80"
                              }
                              ${
                                isActive && !isToday
                                  ? "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/30"
                                  : ""
                              }
                              `}
                        >
                          <span className={`${isToday ? "text-[10px]" : ""}`}>
                            {day}
                          </span>
                          {isActive && !isToday && (
                            <div className="w-0.5 h-0.5 bg-fuchsia-500 dark:bg-fuchsia-400 rounded-full mt-0.5 shadow-[0_0_5px_rgba(232,121,249,0.8)]"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </BentoItem>

            {/* 5. Quick Actions */}
            <BentoItem>
              <div className="flex flex-col h-full relative z-10 w-full">
                <h3 className="text-lg font-semibold mb-4">Rychlé akce</h3>
                <div className="grid grid-cols-2 gap-3 h-full">
                  <button
                    onClick={() => navigate("/vsechny-ukoly")}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group"
                  >
                    <BookOpen
                      size={20}
                      className="mb-2 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium opacity-80">
                      Úkoly
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/geometricka-telesa")}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group"
                  >
                    <Target
                      size={20}
                      className="mb-2 text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium opacity-80">
                      Geometrická tělesa
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/statistiky")}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group"
                  >
                    <TrendingUp
                      size={20}
                      className="mb-2 text-blue-500 dark:text-purple-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium opacity-80">
                      Statistiky
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("zebricek")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group"
                  >
                    <Award
                      size={20}
                      className="mb-2 text-amber-500 dark:text-fuchsia-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium opacity-80">
                      Žebříček
                    </span>
                  </button>
                </div>
              </div>
            </BentoItem>

            {/* 6. Active Courses */}
            <BentoItem>
              <div className="flex flex-col h-full relative z-10 w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Oblíbené kurzy</h3>
                  <button
                    onClick={() => setShowAllCourses(true)}
                    className="text-xs text-blue-600 dark:text-purple-400 hover:text-blue-500 dark:hover:text-purple-300"
                  >
                    Zobrazit vše
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {favoriteCourses.slice(0, 3).map((course) => {
                    const details =
                      course.details || parseCourseDetails(course.id);
                    const displayTitle =
                      course.title || (details ? details.subject : "Kurz");

                    return (
                      <div
                        key={course.id}
                        onClick={() => handleCourseClick(course.id)}
                        className="group flex flex-col justify-between p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 border border-black/5 dark:border-white/5 transition-colors cursor-pointer h-full"
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={`w-8 h-8 rounded-lg ${
                              course.color || "bg-blue-500"
                            } flex items-center justify-center group-hover:scale-105 transition-transform`}
                          >
                            <BookOpen size={16} className="text-white" />
                          </div>
                          {/* Only show play icon if progress > 0 */}
                          {course.progress > 0 && (
                            <div className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20">
                              <PlayIcon size={12} className="ml-1 opacity-80" />
                            </div>
                          )}
                        </div>
                        <div className="mt-3">
                          <div className="mb-2">
                            <h4
                              className="text-xs font-bold line-clamp-1"
                              title={displayTitle}
                            >
                              {displayTitle}
                            </h4>
                            {details && (
                              <div className="flex items-center gap-1.5 text-[10px] opacity-70 mt-0.5">
                                <span className="font-medium bg-white/10 px-1 py-px rounded">
                                  {details.difficulty}
                                </span>
                                {details.level && (
                                  <span className="font-mono bg-white/5 px-1 py-px rounded">
                                    {details.level}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                course.color || "bg-blue-500"
                              } rounded-full`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-right mt-1">
                            <span className="text-[10px] opacity-60">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BentoItem>
          </div>{" "}
          {/* 6. Ends Dashboard Grid */}
          {/* All Courses Modal */}
          {showAllCourses && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
              onClick={() => setShowAllCourses(false)}
            >
              <div
                className="bg-white dark:bg-[#0B0C15] w-full max-w-2xl rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden flex flex-col max-h-[80vh] dark:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <BookOpen className="text-purple-500" />
                    Všechny oblíbené kurzy
                  </h2>
                  <button
                    onClick={() => setShowAllCourses(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 custom-scrollbar">
                  {favoriteCourses.map((course) => {
                    const details =
                      course.details || parseCourseDetails(course.id);
                    const displayTitle =
                      course.title || (details ? details.subject : "Kurz");

                    return (
                      <div
                        key={course.id}
                        onClick={() => handleCourseClick(course.id)}
                        className="group flex flex-col justify-between p-4 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#0B0C15]/50 dark:hover:bg-[#1e1b2e]/80 border border-black/5 dark:border-white/5 transition-colors cursor-pointer min-h-[140px]"
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={`w-10 h-10 rounded-lg ${
                              course.color || "bg-blue-500"
                            } flex items-center justify-center group-hover:scale-105 transition-transform`}
                          >
                            <BookOpen size={18} className="text-white" />
                          </div>
                          {course.progress > 0 && (
                            <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20">
                              <PlayIcon size={14} className="ml-1 opacity-80" />
                            </div>
                          )}
                        </div>
                        <div className="mt-4">
                          <div className="mb-2">
                            <h4
                              className="text-sm font-bold line-clamp-1"
                              title={displayTitle}
                            >
                              {displayTitle}
                            </h4>
                            {details && (
                              <div className="flex items-center gap-2 text-xs opacity-70 mt-0.5">
                                <span className="font-medium bg-white/10 px-1.5 py-0.5 rounded text-[10px]">
                                  {details.difficulty}
                                </span>
                                {details.level && (
                                  <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-[10px]">
                                    {details.level}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="w-full h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                course.color || "bg-blue-500"
                              } rounded-full`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-right mt-1">
                            <span className="text-xs opacity-60">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div className="w-full mt-12 col-span-full">
            <div
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 `}
            >
              {/* Content Container */}
              <div className="relative z-10 p-8 lg:p-12 ">
                {/* Header Section */}
                <div className="text-center mb-8">
                  <h2
                    className={`text-4xl lg:text-8xl font-black mb-4 pb-4 text-start ${
                      isDarkMode
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
                    }`}
                  >
                    Sleduj svůj pokrok
                  </h2>
                  <p
                    className={`text-sm lg:text-base max-w-2xl text-start  ${
                      isDarkMode ? "text-purple-200/70" : "text-gray-600"
                    }`}
                  >
                    Vizualizuj svůj růst a objevuj detailní analytiku svého
                    studia
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* XP Graph Section */}
                  <BentoItem
                    className={`min-h-[320px] relative overflow-hidden group transition-all duration-300 }`}
                  >
                    {/* Decorative corner accents */}

                    <div className="relative z-10 flex flex-col h-full p-6">
                      {/* Graph Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-xl ${
                              isDarkMode
                                ? "bg-purple-500/20 text-purple-300"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            <TrendingUp size={22} strokeWidth={2.5} />
                          </div>
                          <div>
                            <h3
                              className={`text-xl font-bold ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              XP Trend
                            </h3>
                            <p
                              className={`text-xs mt-0.5 ${
                                isDarkMode
                                  ? "text-purple-300/60"
                                  : "text-gray-500"
                              }`}
                            >
                              Posledních 7 dní
                            </p>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                            isDarkMode
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          <TrendingUp size={14} />
                          +32%
                        </div>
                      </div>

                      {/* Chart Container */}
                      <div className="flex-1 w-full min-h-[200px] relative">
                        <MeasuredContainer>
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                              data={[
                                { day: "Po", xp: 150 },
                                { day: "Út", xp: 280 },
                                { day: "St", xp: 420 },
                                { day: "Čt", xp: 280 },
                                { day: "Pá", xp: 730 },
                                { day: "So", xp: 450 },
                                { day: "Ne", xp: 950 },
                              ]}
                              margin={{
                                top: 10,
                                right: 10,
                                left: -20,
                                bottom: 0,
                              }}
                            >
                              <defs>
                                <linearGradient
                                  id="xpGradient"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="0%"
                                    stopColor={
                                      isDarkMode ? "#a78bfa" : "#8b5cf6"
                                    }
                                    stopOpacity={0.9}
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor={
                                      isDarkMode ? "#c084fc" : "#a855f7"
                                    }
                                    stopOpacity={0.1}
                                  />
                                </linearGradient>
                              </defs>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke={
                                  isDarkMode
                                    ? "rgba(255,255,255,0.06)"
                                    : "rgba(0,0,0,0.06)"
                                }
                              />
                              <XAxis
                                dataKey="day"
                                stroke={isDarkMode ? "#a78bfa" : "#8b5cf6"}
                                style={{ fontSize: "12px", fontWeight: "600" }}
                                tickLine={false}
                              />
                              <YAxis hide />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: isDarkMode
                                    ? "rgba(15, 16, 22, 0.95)"
                                    : "rgba(255, 255, 255, 0.95)",
                                  border: isDarkMode
                                    ? "1px solid rgba(168, 139, 250, 0.3)"
                                    : "1px solid rgba(229, 231, 235, 1)",
                                  borderRadius: "12px",
                                  boxShadow:
                                    "0 10px 40px -10px rgba(0, 0, 0, 0.3)",
                                  backdropFilter: "blur(10px)",
                                }}
                                itemStyle={{
                                  color: isDarkMode ? "#d8b4fe" : "#7c3aed",
                                  fontWeight: "600",
                                }}
                                labelStyle={{
                                  color: isDarkMode ? "#fff" : "#000",
                                  fontWeight: "700",
                                }}
                                formatter={(value) => [
                                  `${value} XP`,
                                  "Získáno",
                                ]}
                              />
                              <Area
                                type="monotone"
                                dataKey="xp"
                                stroke={isDarkMode ? "#a78bfa" : "#8b5cf6"}
                                strokeWidth={3}
                                fill="url(#xpGradient)"
                                animationDuration={2000}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </MeasuredContainer>
                      </div>
                    </div>
                  </BentoItem>

                  {/* Statistics Info Section */}
                  <div
                    className={`min-h-[320px] relative overflow-hidden transition-all duration-300 `}
                  >
                    <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-10">
                      {/* Badge */}

                      {/* Main Content */}
                      <h3
                        className={`text-3xl lg:text-4xl font-black mb-4 leading-tight ${
                          isDarkMode
                            ? "text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-fuchsia-200"
                            : "text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-fuchsia-900"
                        }`}
                      >
                        Pokročilé statistiky čekají
                      </h3>

                      <p
                        className={`text-base lg:text-lg mb-8 leading-relaxed ${
                          isDarkMode ? "text-purple-200/80" : "text-gray-700"
                        }`}
                      >
                        Zjisti svůj skutečný pokrok. Náš statistický systém ti
                        ukáže detailní přehled tvého studia, silné stránky a
                        oblasti ke zlepšení.
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {[
                          "Detailní XP historie",
                          "Analýza výkonnosti",
                          "Personalizované tipy",
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isDarkMode ? "bg-purple-400" : "bg-purple-600"
                              }`}
                            />
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode
                                  ? "text-purple-300/90"
                                  : "text-gray-700"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => navigate("/statistiky")}
                        className={`group relative w-1/2 inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
                            : "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/60"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          Zobrazit statistiky
                          <PlayIcon
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 col-span-full">
            <div
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 `}
            >
              {/* Content Container */}
              <div className="relative z-10 p-8 lg:p-12 ">
                {/* Header Section */}
                <div className="text-start mb-8">
                  <h2
                    className={`text-4xl lg:text-8xl font-black mb-4 pb-4 text-center ${
                      isDarkMode
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
                    }`}
                  >
                    Prohlédněte si <br></br>Geometrická Tělesa
                  </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div
                    className={`min-h-[320px] relative overflow-hidden transition-all duration-300 `}
                  >
                    <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-10">
                      {/* Badge */}

                      {/* Main Content */}
                      <h3
                        className={`text-3xl lg:text-4xl font-black mb-4 leading-tight ${
                          isDarkMode
                            ? "text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-fuchsia-200"
                            : "text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-fuchsia-900"
                        }`}
                      >
                        Geometrická tělesa čekají
                      </h3>

                      <p
                        className={`text-base lg:text-lg mb-8 leading-relaxed ${
                          isDarkMode ? "text-purple-200/80" : "text-gray-700"
                        }`}
                      >
                        Objevuj svět 3D geometrie. Prohlédni si interaktivní
                        modely těles, nauč se jejich vlastnosti a procvič si
                        výpočty objemů a povrchů.
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {[
                          "Interaktivní 3D modely",
                          "Vzorce a výpočty",
                          "Praktické příklady",
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isDarkMode ? "bg-purple-400" : "bg-purple-600"
                              }`}
                            />
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode
                                  ? "text-purple-300/90"
                                  : "text-gray-700"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => navigate("/geometricka-telesa")}
                        className={`group relative w-1/2 inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
                            : "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/60"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          Prozkoumat tělesa
                          <PlayIcon
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <BentoItem
                    className={`min-h-[320px] relative overflow-hidden group transition-all duration-300 }`}
                  >
                    {/* Decorative corner accents */}
                  </BentoItem>

                  {/* Statistics Info Section */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 col-span-full mb-[20vh]" id="zebricek">
            <div
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 `}
            >
              {/* Content Container */}
              <div className="relative z-10 p-8 lg:p-12 ">
                {/* Header Section */}
                <div className="text-start mb-8">
                  <h2
                    className={`text-4xl lg:text-8xl font-black mb-4 pb-4 text-center ${
                      isDarkMode
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
                    }`}
                  >
                    Žebříček uživatelů
                  </h2>
                  <p
                    className={`text-sm lg:text-base max-w-2xl mx-auto text-center ${
                      isDarkMode ? "text-purple-200/70" : "text-gray-600"
                    }`}
                  >
                    Seřazeno podle XP a série. Soutěž s ostatními a dostaň se na
                    vrchol!
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 gap-6 lg:gap-8">
                  <BentoItem
                    className={`min-h-[320px] relative overflow-hidden group transition-all duration-300 }`}
                  >
                    <div className="flex flex-col relative w-[100%] z-10 h-[50vh]  text-gray-900 dark:text-white ">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                        <span
                          className={`text-xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Top Studenti
                        </span>
                      </div>

                      {leaderboardLoading ? (
                        <div className="flex justify-center flex-1 items-center min-h-[100px]">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 w-full overflow-y-auto pr-2 custom-scrollbar  ">
                          {leaderboard.map((user, index) => {
                            const pos = index + 1;
                            const isTop3 = pos <= 3;

                            let bgClass = "bg-white/5 dark:bg-black/20";
                            let borderClass =
                              "border-black/5 dark:border-white/5";

                            if (pos === 1) {
                              bgClass = "bg-purple-500/10";
                              borderClass = "border-purple-500/20";
                            } else if (pos === 2) {
                              bgClass = "bg-purple-400/10";
                              borderClass = "border-purple-400/20";
                            } else if (pos === 3) {
                              bgClass = "bg-purple-300/10";
                              borderClass = "border-purple-300/20";
                            }

                            return (
                              <div
                                key={user.userId || index}
                                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-xl border ${bgClass} ${borderClass} transition-all gap-2 sm:gap-0 min-w-0`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div
                                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold bg-white/10 text-xs sm:text-base flex-shrink-0`}
                                  >
                                    {pos}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <span className="font-bold block truncate text-sm sm:text-base">
                                      {user.name}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pl-10 sm:pl-0">
                                  <div className="flex items-center gap-3 text-xs">
                                    <span className="flex items-center gap-1.5 opacity-80">
                                      <Flame
                                        size={12}
                                        className="text-purple-500"
                                      />{" "}
                                      <span className="font-mono">
                                        {user.streak}
                                      </span>
                                    </span>
                                    <span className="flex items-center gap-1.5 opacity-80">
                                      <Coins
                                        size={12}
                                        className="text-purple-400"
                                      />{" "}
                                      <span className="font-mono">
                                        {user.coins}
                                      </span>
                                    </span>
                                  </div>
                                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400 sm:min-w-[80px] sm:text-right text-xs sm:text-sm">
                                    {user.xp} XP
                                  </span>
                                </div>
                              </div>
                            );
                          })}

                          {leaderboard.length === 0 && (
                            <div className="col-span-full text-center py-8 opacity-50">
                              Zatím žádná data k zobrazení.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </BentoItem>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics & XP Progress Section */}
      </BentoCardGrid>

      {/* Shop Modal */}
      {showShop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowShop(false)}
        >
          <div
            className="bg-white dark:bg-[#0B0C15] w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl relative dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Zap className="text-amber-500" />
                Obchod s boostery
              </h2>
              <button
                onClick={() => setShowShop(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                disabled={loadingAction}
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {shopItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-xs opacity-60">{item.duration}</p>
                    </div>
                  </div>
                  <button
                    disabled={loadingAction || userStats.coins < item.price}
                    onClick={() => handleBuyBooster(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      userStats.coins >= item.price
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {item.price} <Star size={10} className="fill-current" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-500 dark:border-gray-800 flex justify-between items-center text-sm">
              <span className="opacity-60">Vaše mince:</span>
              <span className="font-bold flex items-center gap-1 text-amber-500">
                {userStats.coins} <Star size={14} className="fill-current" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Use Booster Modal */}
      {selectedBooster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedBooster(null)}
        >
          <div
            className="bg-white dark:bg-[#0B0C15] w-full max-w-sm rounded-2xl border border-white/10 p-6 shadow-2xl relative text-center dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-500 border border-purple-500/30">
                <Zap size={32} />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">Použít booster?</h3>
            <p className="text-sm opacity-60 mb-6">
              Chcete aktivovat{" "}
              <strong>
                {shopItems.find((i) => i.id === selectedBooster)?.name ||
                  "Booster"}
              </strong>
              ? Tím se zdvojnásobí zisk XP na určitou dobu.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedBooster(null)}
                disabled={loadingAction}
                className="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 font-semibold text-sm hover:opacity-80 transition-opacity"
              >
                Zrušit
              </button>
              <button
                onClick={handleUseBooster}
                disabled={loadingAction}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
              >
                {loadingAction ? "Aktivuji..." : "Aktivovat"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboardUI;
