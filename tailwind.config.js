/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-2xl": "1400px",
        "custom-1200": "1200px",
        "custom-900": "900px",
      },
      colors: {
        primary: "#3498db",
        "primary-dark": "#2980b9",
        "primary-light": "#ecf0f1",
        "text-dark": "#2c3e50",
        "text-light": "#95a5a6",
        "extra-light": "#f5f5f5",
      },
    },
  },
};
