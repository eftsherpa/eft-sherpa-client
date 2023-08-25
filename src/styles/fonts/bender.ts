import localFont from 'next/font/local';

const bender = localFont({
  src: [
    {
      path: '../../assets/fonts/bender-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/bender.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../assets/fonts/bender-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/bender-black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/bender-light-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/bender-italic.woff2',
      weight: '400',
      style: 'italic',
    },

    {
      path: '../../assets/fonts/bender-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/bender-black-italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default bender;
