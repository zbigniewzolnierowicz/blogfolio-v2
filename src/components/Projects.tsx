/** @jsx jsx */
import { Fragment, useRef } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Emphasize } from "./Emphasize"

const distance = (from: { x: number, y: number }, to: { x: number, y: number }) => Math.abs(Math.sqrt(Math.pow((to.x - from.x), 2) + Math.pow((to.y - from.y), 2)))

const ProjectVariants = {
  enter: {
    scale: 0,
  },
  minimal: (distance: number) => ({
    delay: distance / 1000,
    scale: 1,
    width: "20vw",
    height: "20vh",
  }),
  show: (distance: number) => ({
    delay: distance / 1000,
    scale: 1,
    width: "90vw",
    height: "40vh",
  }),
};

interface ProjectInterface {
  title: string;
  description: string;
  onClick: () => void;
  mode: boolean;
  imageSrc?: string;
  emoji?: {
    actual: string,
    label: string
  }
}

export const Project: React.FunctionComponent<ProjectInterface> = (props) => {
  const ref = useRef<any>(null)
  return (
    <motion.div
      css={css`
        margin: 1em;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        z-index: 9;
        display: grid;
        grid-template-rows: auto 2fr auto;
        grid-template-columns: 3fr 1fr;
        background: #fafafa;
      `}
      whileTap={{ scale: 0.9 }}
      variants={ProjectVariants}
      initial="enter"
      animate={props.mode ? "show" : "minimal"}
      onTap={props.onClick}
      exit={{ scale: 0 }}
      ref={ref}
      custom={distance({ x: 0, y: 0 }, { x: ref?.current?.offsetLeft || 0, y: ref?.current?.offsetTop || 0 })}
    >
      {props.mode ? (
          <Fragment>
            <h4 css={css`grid-column: 1 / -1; grid-row: "1"; font-size: 1.4em; margin: 0.4em 1ch;`}>{props.title}</h4>
            <p css={css`grid-column: 1; grid-row: 2; margin: 0.4em 1ch;`}>{props.description}</p>
            {props.imageSrc && <img
              css={css`
                grid-row: 2;
                grid-column: auto;
                max-height: 20vmin;
                width: 100%;
                object-fit: contain;
                align-self: center;
                justify-self: center;
                padding: 0.4em 1ch;
              `}
              src={props.imageSrc}
              alt={props.title}
            />}
            <div css={css`height: 100%; width: 100%; background: red; grid-row: -1; grid-column: 1 / -1;`}>TODO: Add social media buttons</div>
          </Fragment>
        ) :
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            height: fit-content;
            align-self: center;
            text-align: center;
            font-size: 1.4em;
          `}
        >
          <Emphasize as="h4">{props.title}</Emphasize>
          {props.emoji?.actual && <span role="img" aria-label={props.emoji.label}>{props.emoji.actual}</span>}
        </div>
      }
    </motion.div>
  );
};

export const Projects = motion.custom(styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  padding: 1em;
  gap: 1em;
  width: 100%;
  align-content: space-evenly;
  justify-content: space-evenly;
`);
