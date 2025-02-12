module.exports = {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Add these colors
          'gray-50': '#f9fafb',
          'gray-800': '#1f2937',
          'gray-900': '#111827',
          'blue-600': '#2563eb',
        }
      },
    },
    plugins: [],
  }