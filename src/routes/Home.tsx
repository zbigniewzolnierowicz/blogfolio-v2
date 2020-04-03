/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { RouteComponentProps } from "@reach/router";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact } from "@fortawesome/free-brands-svg-icons";

import { Emphasize } from "../components/Emphasize";
import { Typescript } from "../components/icons/Typescript";
import { Firebase } from "../components/icons/Firebase";
import { Project, Projects } from "../components/Projects";
import Rocketboost from "../assets/rocketboost.png"
import MrDecal from "../assets/mrdecal.png"

const Head = motion.custom(styled.div`
  text-align: center;
  backface-visibility: hidden;
  h1 {
    margin: 0.5em 0;
  }
  h2 {
    margin: 0.5em 0;
  }
`);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5ch;
  h3 {
    margin: 0.5em 0;
  }
  p {
    margin: 0;
    text-align: justify;
  }
`;

interface ProjectsInterface {
  title: string;
  description: string;
  imageSrc?: string;
  emoji?: {
    actual: string,
    label: string
  }
}

export const Home = (_props: RouteComponentProps) => {
  const [selected, setSelected] = useState<undefined | number>(0);
  const [objects] = useState<ProjectsInterface[]>([
    {
      title: "RocketBoost calculators",
      description: "CSGO calculators",
      imageSrc: Rocketboost,
      emoji: {
        actual: "🚀",
        label: "rocket"
      }
    },
    {
      title: "Mr. Decal",
      description: "A front for a decal shop.",
      imageSrc: MrDecal,
      emoji: {
        actual: "✈️",
        label: "plane"
      }
    },
    {
      title: "Washr",
      description: "Social platform",
      emoji: {
        actual: "👕",
        label: "shirt"
      }
    }
  ]);

  return (
    <Main>
      <Head
        initial={{ y: 200, rotateX: "-90deg", scale: 0 }}
        animate={{ y: 0, rotateX: 0, scale: 1 }}
      >
        <h1
          css={css`
            font-size: 3em;
          `}
        >
          <Emphasize>Zbigniew Żołnierowicz</Emphasize>
        </h1>
        <h2>
          A web developer with a penchant for{" "}
          <Emphasize>grilled cheese</Emphasize>{" "}
          <span role="img" aria-label="cheese">
            🧀
          </span>
        </h2>
      </Head>
      <Section css={css`
        p {
          margin-block-start: .5em;
          margin-block-end: .5em;
        }
      `}>
        <Emphasize
          as="h3"
          css={css`
            font-size: 1.4em;
          `}
        >
          What do I do?
        </Emphasize>
        <p>
          I'm a <Emphasize>front-end developer</Emphasize> specializing in
          JavaScript single-page applications written in <Typescript />{" "}
          <Emphasize>Typescript</Emphasize>,{" "}
          <FontAwesomeIcon icon={faVuejs} color="#42b883" />{" "}
          <Emphasize>Vue.js</Emphasize>,{" "}
          <FontAwesomeIcon icon={faReact} color="#00d8ff" />{" "}
          <Emphasize>React</Emphasize> and JAMstack development using
          state-of-the-art serverless solutions, like <Firebase />{" "}
          <Emphasize>Google Firebase</Emphasize>.
        </p>
      </Section>
      <Emphasize
        as="h3"
        css={css`
          font-size: 1.4em;
        `}
      >
        What did I work on?
      </Emphasize>
      <AnimatePresence>
        <div
          css={css`
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto;
            height: fit-content;
            transition: height 100ms ease;
            > * {
              grid-row: 1 / 1;
              grid-column: 1 / 1;
            }
          `}
        >
          {objects
            .map((el, i) => (
              <Project
                title={el.title}
                emoji={el.emoji}
                description={el.description}
                key={i}
                mode={i === selected}
                imageSrc={el.imageSrc}
                onClick={() => setSelected(undefined)}
              />
            ))
            .filter((_, i: number) => i === selected)}
        </div>
      </AnimatePresence>
      <Projects>
        <AnimatePresence>
          {objects
            .map((el, i) => (
              <Project
                title={el.title}
                emoji={el.emoji}
                description={el.description}
                key={i}
                mode={i === selected}
                imageSrc={el.imageSrc}
                onClick={() => setSelected(i)}
              />
            ))
            .filter((_, i: number) => i !== selected)}
        </AnimatePresence>
      </Projects>
    </Main>
  );
};
