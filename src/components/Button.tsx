/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { themeInterface } from "../helpers/EmotionTheme";
import { motion } from "framer-motion";

const ButtonWrapper = motion.custom(styled.button<{ theme: themeInterface }>`
  display: block;
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
  padding: 1em;
  border: none;
  margin: 1em;
  border-radius: 5px;
  text-decoration: none;
  height: fit-content;
  width: fit-content;
  box-shadow: -2px -2px 8px ${(props) => props.theme.colors.background.shadowTopLeft},
    2px 2px 8px ${(props) => props.theme.colors.background.shadowBottomRight};
`);

interface ButtonProps {
    onClick?: (arg0: MouseEvent | TouchEvent | PointerEvent) => void;
    buttonCss?: any;
    wrapperProps?: any;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonWrapper
            onTap={(event) => props.onClick && props.onClick(event)}
            whileTap={{ scale: 0.9 }}
            css={props.buttonCss}
            {...props.wrapperProps}
        >
            {props.children}
        </ButtonWrapper>
    )
}