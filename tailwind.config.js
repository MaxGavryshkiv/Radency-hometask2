/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bttn-edit": "url('./pictures/pencil.svg')",
        "bttn-archive": "url('./pictures/archive.svg')",
        "bttn-delete": "url('./pictures/trash.svg')",
        "active-bttn-edit": "url('./pictures/pencilWhite.svg')",
        "active-bttn-archive": "url('./pictures/archiveWhite.svg')",
        "active-bttn-delete": "url('./pictures/trashWhite.svg')",
        "active-bttn-close": "url('./pictures/closeWhite.svg')",
        "bttn-close": "url('./pictures/close.svg')",
      },
      spacing: {
        650: "650px",
        600: "600px",
        500: "500px",
        400: "400px",
        1200: "1200px",
        cent: "12%",
      },
      backgroundSize: { 20: "20px" },
      colors: { overlay: "rgba(0, 0, 0, 0.8);", border: "rgba(0, 0, 0, 0.1);" },
    },
  },
  plugins: [],
};
