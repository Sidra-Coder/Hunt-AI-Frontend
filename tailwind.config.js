/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widest': '1600px',
      },
      colors: {
        background: "#0A0A0B",
        card: "rgba(18, 18, 20, 0.7)",
        primary: {
          DEFAULT: "#00F5FF", // Neon Cyan
          glow: "rgba(0, 245, 255, 0.4)",
        },
        secondary: {
          DEFAULT: "#BD00FF", // Neon Purple
          glow: "rgba(189, 0, 255, 0.4)",
        },
        accent: "#FACC15",
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00F5FF 0%, #BD00FF 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.3)',
        'neon-purple': '0 0 15px rgba(189, 0, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
