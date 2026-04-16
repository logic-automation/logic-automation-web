/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#c2c6d9",
        "inverse-on-surface": "#dff4ff",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#cfe6f2",
        "surface-container-low": "#e6f6ff",
        "surface-container-highest": "#cfe6f2",
        "on-secondary-fixed": "#000767",
        "tertiary-fixed": "#a1efff",
        "tertiary-container": "#007a8a",
        "on-primary-fixed": "#00174b",
        "on-primary": "#ffffff",
        "primary-fixed": "#dbe1ff",
        "on-tertiary-fixed-variant": "#004e59",
        "error": "#ba1a1a",
        "on-primary-container": "#f1f2ff",
        "on-secondary-fixed-variant": "#343d96",
        "surface-tint": "#0052dc",
        "on-error": "#ffffff",
        "on-surface": "#071e27",
        "surface-container-high": "#d5ecf8",
        "on-surface-variant": "#424656",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff",
        "secondary": "#4c56af",
        "on-primary-fixed-variant": "#003ea8",
        "secondary-fixed-dim": "#bdc2ff",
        "surface-container": "#dbf1fe",
        "surface-dim": "#c7dde9",
        "on-background": "#071e27",
        "tertiary-fixed-dim": "#44d8f1",
        "outline": "#737687",
        "secondary-container": "#959efd",
        "inverse-primary": "#b4c5ff",
        "surface": "#f3faff",
        "tertiary": "#005f6c",
        "surface-bright": "#f3faff",
        "background": "#f3faff",
        "on-tertiary-fixed": "#001f25",
        "on-secondary": "#ffffff",
        "inverse-surface": "#1e333c",
        "primary-fixed-dim": "#b4c5ff",
        "primary": "#004bca",
        "primary-container": "#0061ff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}