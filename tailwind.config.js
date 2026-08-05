/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // ICES brand — exact logo colors (royal blue #010081 + green #00B050)
        ink: "#06063C", // deepest royal indigo, hero/footer base
        navy: "#010081", // royal brand blue, gradients / borders / accents
        emerald: "#00B050", // ICES green accent
        mint: "#4FD98C", // bright green for accents on dark
        paper: "#F5F6FB", // page background (blue-white)
        mist: "#ECEEF8", // alternating light section
        slate2: "#4A5178", // blue-grey body text
        text2: "#59608C",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,21,65,0.05), 0 12px 32px -12px rgba(16,21,65,0.16)",
        lift: "0 8px 20px rgba(16,21,65,0.10), 0 24px 48px -16px rgba(16,21,65,0.26)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        ices: {
          primary: "#00B050",
          "primary-focus": "#009344",
          "primary-content": "#FFFFFF",
          secondary: "#010081",
          "secondary-focus": "#01015E",
          "secondary-content": "#FFFFFF",
          accent: "#4FD98C",
          "accent-content": "#052015",
          neutral: "#06063C",
          "neutral-focus": "#04042A",
          "neutral-content": "#C3C8E6",
          "base-100": "#FFFFFF",
          "base-200": "#ECEEF8",
          "base-300": "#DBDFF0",
          "base-content": "#06063C",
          info: "#010081",
          success: "#00B050",
          warning: "#E0A100",
          error: "#D64545",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.6rem",
          "--rounded-badge": "2rem",
          "--animation-btn": "0.2s",
          "--btn-text-case": "none",
          "--border-btn": "1.5px",
          "--tab-radius": "0.6rem",
        },
      },
    ],
  },
};
