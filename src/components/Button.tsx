/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ITheme } from "../helpers/EmotionTheme";

const ButtonWrapper = motion.custom(styled.button<{
  theme: ITheme;
  buttonType: string;
}>`
  display: block;
  background: ${(props) =>
    props.buttonType === "alt"
      ? props.theme.colors.backgroundAlt.color
      : props.theme.colors.background.color};
  color: ${(props) =>
    props.buttonType === "alt"
      ? props.theme.colors.textAlt
      : props.theme.colors.text};
  padding: 1em;
  border: none;
  margin: 1em;
  border-radius: 5px;
  text-decoration: none;
  height: fit-content;
  width: fit-content;
  box-shadow: -2px -2px 8px ${(props) => (props.buttonType === "alt" ? props.theme.colors.backgroundAlt.shadowTopLeft : props.theme.colors.background.shadowTopLeft)},
    2px 2px 8px
      ${(props) =>
        props.buttonType === "alt"
          ? props.theme.colors.backgroundAlt.shadowBottomRight
          : props.theme.colors.background.shadowBottomRight};
`);

interface ButtonProps {
  onClick?: (arg0: MouseEvent | TouchEvent | PointerEvent) => void;
  buttonCss?: any;
  wrapperProps?: any;
  buttonType?: "normal" | "alt";
  ariaHidden?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonWrapper
      onTap={(event) => props.onClick && props.onClick(event)}
      whileTap={{ scale: 0.9 }}
      css={props.buttonCss}
      {...props.wrapperProps}
      buttonType={props.buttonType || "normal"}
      aria-hidden={props.ariaHidden || false}
    >
      {props.children}
    </ButtonWrapper>
  );
};
