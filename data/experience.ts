import { Certification, EducationEntry, ExperienceEntry } from "./types";

// Sourced from resume (Resume_OYOLA_ANGELY_2026.pdf)
export const experience: ExperienceEntry[] = [
  {
    role: "Automotive Software Embedded Engineer",
    company: "Teoresi S.p.A.",
    companyUrl: "https://www.teoresigroup.com/",
    start: "Feb 2022",
    end: "Present",
    description:
      "Led internationally distributed automotive projects involving 15+ engineers and 10+ cross-functional stakeholders. Owned 6+ production-grade embedded C applications for OEMs/Tier-1s (Ferrari, Aston Martin, Brembo, Bosch) under MISRA C and ISO 26262. Engineered full-stack AUTOSAR solutions (ARM MCUs), developed Python/CAPL ECU testing tools (60%+ manual testing reduction), and designed a real-time 3D gaze estimation deep learning model for driver monitoring.",
  },
  {
    role: "Senior Business Software Developer",
    company: "Ecuaquimica Group",
    start: "Jul 2015",
    end: "Aug 2019",
    description:
      "Engineered an intelligent purchasing and demand forecasting platform using data-driven projection techniques, achieving a 70% reduction in excess inventory while improving forecast accuracy, cash flow, and storage efficiency.",
  },
  {
    role: "AI Research Assistant",
    company: "CIDIS",
    start: "Jun 2015",
    end: "Jun 2017",
    description:
      "Architected and developed a real-time C++ evacuation routing system integrating 6+ sensors and 4 RGB camera feeds (published in Springer IEA/AIE 2017). Built and validated a deep learning computer vision model for early viral disease detection in shrimp under real-world aquaculture conditions.",
  },
];

export const education: EducationEntry = {
  degree: "M.Sc. in Artificial Intelligence & B.Sc. in Computer Engineering",
  institution: "University of Bologna & ESPOL",
  institutionUrl: "https://www.unibo.it/",
  start: "2010",
  end: "Oct 2022",
  note: "Focus on Embedded Systems, AUTOSAR, Machine Learning, and Computer Vision",
  achievements: [
    "Master's Thesis on Deep Learning optimization (INT8 quantization & model compression) for Arm Cortex processors",
    "B.Sc. in Computer Engineering & Electronics from ESPOL (May 2017)",
  ],
  publications: [
    "Real-time Evacuation Routing System combining multi-sensor and RGB camera data (Springer IEA/AIE 2017, DOI: 10.1007/978-3-319-60042-0_15)",
  ],
};

export const certifications: Certification[] = [
  {
    title: "Update to Modern C++",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "ROS2 Update 2026",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "AUTOSAR CEA",
    issuer: "Vector",
    year: "2023",
  },
  {
    title: "STM32 SW Development",
    issuer: "TTC",
    year: "2023",
  },
];