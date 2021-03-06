const mainTheme = {
  black: '#1A1239',
  pink: '#E05E75',
  lightPink: 'rgba(224, 94, 117, .08)',
  rose: '#ECB3C0',
  lightRose: 'rgba(236, 179, 192, .08)',
  blue: '#5A87E5',
  lightBlue: 'rgba(90, 135, 229, .08)',
  azure: '#98BAFF',
  lightAzure: 'rgba(152, 186, 255, .08)',
  white: '#FFFFFF',
  bg: '#EEF2FE',
  gray: '#CCCCCC',

  font: {
    family: {
      rhd: 'Red Hat Display, sans-serif',
      rdt: 'Red Hat Text, sans-serif',
    },
    weight: {
      regular: '400',
      bold: '700',
      black: '900',
    },
    size: {
      desktop: {
        huge: '8rem',
        h1: '4rem',
        h2: '3.2rem',
        h3: '2.8rem',
        h4: '2.4rem',
        h5: '1.8rem',
        h6: '1.5rem',
        body: '1.6rem',
        body2: '1.4rem',
        button: '1.5rem',
        caption: '1.3rem',
      },
      mobile: {
        huge: '5rem',
        h1: '3.2rem',
        h2: '2.8rem',
        h3: '2.4rem',
        h4: '1.8rem',
        h5: '1.5rem',
        h6: '1.4rem',
        body: '1.6rem',
        body2: '1.4rem',
        button: '1.4rem',
        caption: '1.3rem',
      },
    },
  },
  mq: {
    huge: '@media (min-width: 1440px)',
    desktop: '@media (min-width: 1024px)',
    tablet: '@media (min-width: 768px)',
    mobile: '@media (min-width: 360px)',
    small: '@media (max-width: 359px)',
  },
}

export default mainTheme
