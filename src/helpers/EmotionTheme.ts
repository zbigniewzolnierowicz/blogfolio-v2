export interface themeInterface {
  colors: {
    primary: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textAlt: string;
  };
}

export const theme: themeInterface = {
  colors: {
    primary: "hsl(43, 100%, 62%)",
    background: "hsl(43, 0%, 10%)",
    backgroundAlt: "hsl(43, 0%, 20%)",
    text: "hsl(43, 0%, 100%)",
    textAlt: "hsl(43, 0%, 100%)",
  },
};