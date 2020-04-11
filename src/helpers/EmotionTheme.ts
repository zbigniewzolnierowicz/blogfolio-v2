export interface themeInterface {
  colors: {
    primary: string;
    background: {
      shadowTopLeft: string;
      shadowBottomRight: string;
      color: string;
    };
    backgroundAlt: {
      shadowTopLeft: string;
      shadowBottomRight: string;
      color: string;
    };
    text: string;
    textAlt: string;
  };
}

export enum ThemesEnum {
  dark = "dark",
  light = "light",
}

export const theme: { dark: themeInterface; light: themeInterface } = {
  [ThemesEnum.dark]: {
    colors: {
      primary: "hsl(43, 100%, 62%)",
      background: {
        shadowTopLeft: "hsl(43, 0%, 9%)",
        shadowBottomRight: "hsl(43, 0%, 12%)",
        color: "hsl(43, 0%, 10%)",
      },
      backgroundAlt: {
        shadowTopLeft: "hsl(43, 0%, 20%)",
        shadowBottomRight: "hsl(43, 0%, 20%)",
        color: "hsl(43, 0%, 20%)",
      },
      text: "hsl(43, 0%, 100%)",
      textAlt: "hsl(43, 0%, 100%)",
    },
  },
  [ThemesEnum.light]: {
    colors: {
      primary: "hsl(43, 100%, 62%)",
      background: {
        shadowTopLeft: "hsl(43, 0%, 9%)",
        shadowBottomRight: "hsl(43, 0%, 12%)",
        color: "hsl(43, 0%, 90%)",
      },
      backgroundAlt: {
        shadowTopLeft: "hsl(0, 0%, 60%)",
        shadowBottomRight: "hsl(0, 0%, 81%)",
        color: "hsl(43, 0%, 70%)",
      },
      text: "hsl(43, 0%, 0%)",
      textAlt: "hsl(43, 0%, 0%)",
    },
  },
};
