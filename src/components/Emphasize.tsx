import styled from "@emotion/styled"
import { themeInterface } from "../helpers/EmotionTheme";

export const Emphasize = styled.span<{ theme: themeInterface }>`
    text-decoration: dashed underline ${(props) => props.theme.colors.primary};
`