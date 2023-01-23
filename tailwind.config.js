/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://mir-s3-cdn-cf.behance.net/projects/404/e2266d158193225.Y3JvcCw4NDIsNjU4LDAsMA.png')",
      },
    },
  },
  plugins: [],
}