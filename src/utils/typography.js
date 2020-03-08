import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    // 'a.gatsby-resp-image-link': {
    //   boxShadow: `none`,
    // },
    a: {
      color: `#34e4f6`,
    },
    h1: {
      fontFamily: ['Holtwood One SC', 'serif'].join(','),
    },
    h2: {
      fontFamily: ['Holtwood One SC', 'serif'].join(','),
      fontWeight: '400',
    },
    h3: {
      fontFamily: ['Holtwood One SC', 'serif'].join(','),
      fontWeight: '400',
    },
    body: {
      fontFamily: ['roboto', 'sans-serif'].join(','),
    },
    pre: {
      fontFamily: ['IBM Plex Mono', 'monospace'].join(','),
    },
    code: {
      fontFamily: ['IBM Plex Mono', 'monospace'].join(','),
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);
Wordpress2016.baseFontFamily = ['roboto', 'sans-serif'];
Wordpress2016.headerFontFamily = ['Holtwood One SC', 'serif'];
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
