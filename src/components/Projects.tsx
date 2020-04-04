/** @jsx jsx */
import { Fragment, useRef, useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Emphasize } from "./Emphasize";
import { themeInterface } from "../helpers/EmotionTheme";
import { Button } from "./Button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const distance = (
  from: { x: number; y: number },
  to: { x: number; y: number }
) =>
  Math.abs(Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)));

const ProjectVariants = {
  enter: {
    scale: 0,
  },
  minimal: (distance: number) => ({
    delay: distance / 100,
    scale: 1,
  }),
  show: (distance: number) => ({
    delay: distance / 100,
    scale: 1,
  }),
};

export interface ProjectsInterface {
  title: string;
  description: string;
  imageSrc?: string;
  emoji?: {
    actual: string;
    label: string;
  };
  links?: {
    icon?: IconProp;
    name: string;
    link: string;
  }[]
}

export interface ProjectElementInterface extends ProjectsInterface {
  onClick: () => void;
  mode: boolean;
}

const ProjectWrapper = motion.custom(styled.div<{
  mode: boolean;
  theme: themeInterface;
}>`
  margin: 1em;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: 9;
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 4fr auto;
  grid-template-columns: 5fr 4fr 1fr;
  width: ${(props) => (props.mode ? "80%" : "20%")};
  height: ${(props) => (props.mode ? "45vh" : "20vh")};
  background: ${(props) => props.theme.colors.backgroundAlt.color};
`);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        maxWidth: "80%",
        maxHeight: "80%",
      },
    },
  })
);

export const Project: React.FunctionComponent<ProjectElementInterface> = (props) => {
  const ref = useRef<any>(null);
  const [showFullImg, setShowFullImg] = useState(false);
  const classes = useStyles();
  return (
    <ProjectWrapper
      whileTap={{ scale: props.mode ? 1 : 0.95 }}
      variants={ProjectVariants}
      initial="enter"
      animate={props.mode ? "show" : "minimal"}
      onTap={() => !props.mode && props.onClick()}
      exit={{ scale: 0 }}
      ref={ref}
      mode={props.mode}
      custom={distance(
        { x: 0, y: 0 },
        { x: ref?.current?.offsetLeft || 0, y: ref?.current?.offsetTop || 0 }
      )}
      positionTransition
    >
      {props.mode ? (
        <Fragment>
          <h4
            css={css`
              grid-column: 1 / -1;
              grid-row: 1 / 2;
              font-size: 1.4em;
              margin: 0.4em 1ch;
            `}
          >
            {props.title}
          </h4>
          <p
            css={css`
              grid-column: 1;
              grid-row: 3 / 5;
              margin: 0.4em 1ch;
              @media (max-width: 930px) {
                grid-column: 1 / -1;
                grid-row: 3 / 4;
              }
            `}
          >
            {props.description}
          </p>
          {props.imageSrc && (
            <img
              css={css`
                grid-row: 3 / 5;
                grid-column: 2 / -1;
                height: 100%;
                width: 100%;
                object-fit: cover;
                align-self: center;
                justify-self: center;
                cursor: pointer;
                @media (max-width: 930px) {
                  grid-column: 1 / -1;
                  grid-row: 4 / 5;
                }
              `}
              src={props.imageSrc}
              alt={props.title}
              onClick={() => setShowFullImg(true)}
            />
          )}
          <div
            css={css`
              height: 100%;
              width: 100%;
              grid-row: -1;
              grid-column: 1 / -1;
            `}
          >
            {props.links?.map(link => <Button wrapperProps={{ as: "a", href: link.link }}>{link.icon && <FontAwesomeIcon icon={link.icon}/>} {link.name}</Button>)}
          </div>
          <Button
            onClick={props.onClick}
            buttonCss={css`
              grid-row: 1;
              grid-column: 3;
              margin: 0;
              margin-top: 1em;
              margin-right: 1em;
              justify-self: flex-end;
            `}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Fragment>
      ) : (
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
          {props.emoji?.actual && (
            <span role="img" aria-label={props.emoji.label}>
              {props.emoji.actual}
            </span>
          )}
        </div>
      )}
      <Modal
        className={classes.modal}
        open={showFullImg}
        onClose={() => setShowFullImg(false)}
      >
        <img src={props.imageSrc} alt={props.title} />
      </Modal>
    </ProjectWrapper>
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
