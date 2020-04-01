import styled from "@emotion/styled"
import { themeInterface } from "../helpers/EmotionTheme";

interface EmphasizePropsInterface {
    theme: themeInterface
}

export const Emphasize = styled.span<EmphasizePropsInterface>`
    text-decoration: dashed underline ${(props) => props.theme.colors.primary};
`