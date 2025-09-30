module.exports = {
  content: {},
  theme: {
    extend: {
      fontFamily: {
        IRANSans: ["IRANSans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("taos/plugin")],
};
