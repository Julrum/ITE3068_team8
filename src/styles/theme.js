const calcRem = (size) => `${size / 13}rem`;

const theme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(13),
  },

  colors: {
    bold: '#000000',
    main: '#333333',
    sub: '#666666',
    placeholder: '#999999',
    white: '#ffffff',
    background: '#fafafa',
    bgDivider: '#f0f0f0',
    disabledbg: '#f5f5f5',
    disabledborder: '#d9d9d9',
    boxShawdow: 'rgba(0, 0, 0, 0.25)',
    primary: '#4D4DFF',
    primaryDarken: '#3939EB',
    primaryMoreDarken: '#2525D7',
    primaryLighten: '#9D9DFF',
    primaryTransparent: 'rgba(177, 177, 255, 0.3)',
    secondary: '#3BAAFF',
    danger: '#EB5757',
    warning: '#FF9400',
    success: '#64E981',
    pollButtonHover: 'rgba(77, 77, 255, 0.15)',
    pollButtonBasic: 'rgba(255, 255, 255, 0.25)',
    pollButtonLineLight: '#d1c4e9',
    pollDarkBlue: '#191970'
  },
};

export default theme;
