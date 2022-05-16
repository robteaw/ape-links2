// Navbar
export const linkAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const logoAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

// Hero
export const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const imgAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const container = {
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 1,
      when: "before",
    },
  },
};

// Main
export const textAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const cardAnim = {
  hidden: { y: -200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};
