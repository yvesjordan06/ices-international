/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ink: "#0A1628",
        navy: "#0F2850",
        emerald: "#0EA472",
        mint: "#4DE8B8",
        paper: "#F7FAFC",
        mist: "#EDF3F9",
        slate2: "#4A5F7A",
        text2: "#5A6B80",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,22,40,0.04), 0 12px 32px -12px rgba(10,22,40,0.14)",
        lift: "0 8px 20px rgba(10,22,40,0.08), 0 24px 48px -16px rgba(10,22,40,0.22)",
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
          primary: "#0EA472",
          "primary-focus": "#0B8A60",
          "primary-content": "#FFFFFF",
          secondary: "#0F2850",
          "secondary-focus": "#0A1E3E",
          "secondary-content": "#FFFFFF",
          accent: "#4DE8B8",
          "accent-content": "#06231A",
          neutral: "#0A1628",
          "neutral-focus": "#060F1D",
          "neutral-content": "#C3D2E3",
          "base-100": "#FFFFFF",
          "base-200": "#EDF3F9",
          "base-300": "#DBE5F0",
          "base-content": "#0A1628",
          info: "#2E6BE6",
          success: "#0EA472",
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
