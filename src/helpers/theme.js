const themeData = {
  light: {
    background: 'rgb(233,234,250)',
    color: 'white',
  },
  dark: { background: '#030534;', color: 'white' },
};

export default function GetThemeData(theme) {
  return themeData[theme];
}
