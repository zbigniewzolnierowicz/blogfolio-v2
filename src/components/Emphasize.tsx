import styled from "@emotion/styled";

import { themeInterface } from "../helpers/EmotionTheme";

interface EmphasizePropsInterface {
  theme: themeInterface;
  as?: string;
}

export const Emphasize = styled.span<EmphasizePropsInterface>`
  font-weight: 500;
  text-decoration: solid underline ${(props) => props.theme.colors.primary};
  h1 > &,
  h2 > &,
  h3 > &,
  h4 > &,
  h5 > & {
    font-weight: 700;
  }
`;
