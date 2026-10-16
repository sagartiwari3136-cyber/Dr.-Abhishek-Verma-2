export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  status: "confirmed" | "sample";
};

export const timeline: TimelineItem[] = [
  {
    year: "1968",
    title: "Born in New Delhi",
    description:
      "Born February 23, 1968, to Shrikant Verma and Veena Verma, into a family already active in public life.",
    status: "confirmed",
  },
  {
    year: "1980s",
    title: "Hindu College, Delhi University",
    description:
      "Completed his undergraduate education at Hindu College, one of Delhi University's oldest constituent colleges.",
    status: "confirmed",
  },
  {
    year: "1980s",
    title: "Georgetown University, Washington D.C.",
    description:
      "Obtained a Master's Diploma from Georgetown University, broadening his exposure to international policy and governance.",
    status: "confirmed",
  },
  {
    year: "1990s",
    title: "[Sample] First Public Role",
    description:
      "[Add detail — e.g. earliest involvement in party or civic work, youth wing, or family enterprise. Replace with the real starting point of his public life.]",
    status: "sample",
  },
  {
    year: "2000s",
    title: "[Sample] Expanding the Private Office",
    description:
      "[Add detail — growth of family business interests and the founding or expansion of The Private Office of Verma Family.]",
    status: "sample",
  },
  {
    year: "2021",
    title: "Maharashtra Samman",
    description:
      "Awarded the 'Maharashtra Samman' by the Governor of Maharashtra State, India, in July 2021.",
    status: "confirmed",
  },
  {
    year: "2024",
    title: "BBMG Award, London",
    description:
      "Received the BBMG Award from British Members of Parliament in London, UK, on March 8, 2024.",
    status: "confirmed",
  },
  {
    year: "2024",
    title: "Doctorate Conferred",
    description:
      "Conferred a Doctorate of Philosophy by Maryland State University, USA, in April 2024.",
    status: "confirmed",
  },
  {
    year: "2025",
    title: "Chief National Coordinator, NDA Alliance & Elections",
    description:
      "Appointed by Shiv Sena party chief and Maharashtra Deputy CM Eknath Shinde on January 30, 2025, in a formal Mumbai ceremony followed by a press conference.",
    status: "confirmed",
  },
  {
    year: "Ongoing",
    title: "[Sample] Current Initiatives",
    description:
      "[Add detail — current campaigns, alliance work, or public initiatives Dr. Verma is presently leading.]",
    status: "sample",
  },
];

export type Achievement = {
  title: string;
  description: string;
  year: string;
  sample?: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "Maharashtra Samman",
    description:
      "Conferred by the Governor of Maharashtra State in recognition of contribution to public life.",
    year: "JULY 2021",
  },
  {
    title: "BBMG Award",
    description:
      "Presented by British Members of Parliament in London in recognition of his international engagement.",
    year: "MARCH 2024",
  },
  {
    title: "Honorary Doctorate",
    description: "Doctorate of Philosophy conferred by Maryland State University, USA.",
    year: "APRIL 2024",
  },
  {
    title: "[Sample] Excellence in Public Service",
    description: "[Add detail — a further honour, fellowship, or civic recognition to feature here.]",
    year: "[YEAR]",
    sample: true,
  },
  {
    title: "[Sample] Global Leadership Fellowship",
    description: "[Add detail — placeholder for an additional international recognition.]",
    year: "[YEAR]",
    sample: true,
  },
  {
    title: "Chief National Coordinator, NDA",
    description:
      "Appointed by Shiv Sena party leadership to coordinate alliance and election strategy nationally.",
    year: "JANUARY 2025",
  },
];

export const philanthropy = [
  {
    num: "01 — Sample",
    title: "Education Initiative",
    description:
      "[Add detail — scholarships, school programs, or literacy drives supported by the Verma family office.]",
  },
  {
    num: "02 — Sample",
    title: "Healthcare Access",
    description:
      "[Add detail — medical camps, hospital partnerships, or health infrastructure funded through SKV Trust.]",
  },
  {
    num: "03 — Sample",
    title: "Disaster Relief Fund",
    description: "[Add detail — relief efforts or emergency response the family office has contributed to.]",
  },
];

export const titleTicker = [
  "Chief National Coordinator, NDA Alliance & Elections",
  "Chairman, The Private Office of Verma Family",
  "Philanthropist & Trustee, SKV Trust",
  "Doctor of Philosophy, Maryland State University",
];

export const galleryPlaceholders = [
  {
    title: "Induction ceremony, Mumbai — 2025",
    img: "https://ik.imagekit.io/5lj5xs7ii/Photos%20for%20Calender/Photos%20for%20Calender/VFO_6127.JPG",
  },
  {
    title: "BBMG Award, London — 2024",
    img: "https://ik.imagekit.io/5lj5xs7ii/IMG_3652.jpeg?updatedAt=1777660917952",
  },
  {
    title: "Maharashtra Samman — 2021",
    img: "https://ik.imagekit.io/5lj5xs7ii/IMG_3090.jpeg?updatedAt=1773490982238",
  },
  {
    title: "Public event",
    img: "https://ik.imagekit.io/5lj5xs7ii/IMG_2343.png?updatedAt=1769429459184",
  },
];
