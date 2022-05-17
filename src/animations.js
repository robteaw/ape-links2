// Navbar
export const linkAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const logoAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

// Main
export const textAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};

export const imgAnim = {
  hidden: { y: -80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const container = {
  show: {
    x: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
      staggerChildren: 1,
      when: "before",
    },
  },
};
