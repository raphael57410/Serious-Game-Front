module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        bgColor: 'var(--primary-background)',
        textColor: 'var(--text-color)',
        inputBorderColor: 'var(--input-border-color)',
      },
      fontSize: {
        mediumSize: '28px',
        titleSize: '80px',
        titleMobileSize: '16px',
      },
    },
  },
  plugins: [],
};
