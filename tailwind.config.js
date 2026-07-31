/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // ICES brand — derived from the logo (royal blue + ICES green)
        ink: "#101541", // deepest royal, hero/footer base
        navy: "#1E228F", // royal brand blue, gradients / borders / accents
        emerald: "#00A14B", // ICES green accent
        mint: "#37D07A", // bright green for accents on dark
        paper: "#F6F7FB", // page background (blue-white)
        mist: "#EDEFF9", // alternating light section
        slate2: "#4C5480", // blue-grey body text
        text2: "#5A6390",
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
          primary: "#00A14B",
          "primary-focus": "#00863E",
          "primary-content": "#FFFFFF",
          secondary: "#1E228F",
          "secondary-focus": "#171B6B",
          "secondary-content": "#FFFFFF",
          accent: "#37D07A",
          "accent-content": "#062015",
          neutral: "#12163F",
          "neutral-focus": "#0C0F2E",
          "neutral-content": "#C6CBE8",
          "base-100": "#FFFFFF",
          "base-200": "#EDEFF9",
          "base-300": "#DBE0F2",
          "base-content": "#101541",
          info: "#1E228F",
          success: "#00A14B",
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
