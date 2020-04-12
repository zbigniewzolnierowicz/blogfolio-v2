import styled from "@emotion/styled";

import { ITheme } from "../helpers/EmotionTheme";

interface IEmphasizeProps {
  theme: ITheme;
  as?: string;
}

export const Emphasize = styled.span<IEmphasizeProps>`
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
