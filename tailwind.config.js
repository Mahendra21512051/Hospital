// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind looks inside all JSX/JS/TS files in the src folder
    './public/index.html', // Also include any HTML files, like in the public folder
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
      
    },
  },
  plugins: [],
};

