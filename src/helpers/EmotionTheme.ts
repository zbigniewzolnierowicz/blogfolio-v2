export interface ITheme {
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

export const theme: { dark: ITheme; light: ITheme } = {
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
        shadowTopLeft: "hsl(43, 0%, 85%)",
        shadowBottomRight: "hsl(43, 0%, 100%)",
        color: "hsl(43, 0%, 100%)",
      },
      backgroundAlt: {
        shadowTopLeft: "hsl(0, 0%, 77%)",
        shadowBottomRight: "hsl(43, 0%, 100%)",
        color: "hsl(43, 0%, 90%)",
      },
      text: "hsl(43, 0%, 0%)",
      textAlt: "hsl(43, 0%, 0%)",
    },
  },
};
