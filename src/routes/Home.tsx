/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { RouteComponentProps } from "@reach/router";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faReact,
  faAngular,
  faSass,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { Emphasize } from "../components/Emphasize";
import { Typescript } from "../components/icons/Typescript";
import { Firebase } from "../components/icons/Firebase";
import { Project, Projects, ProjectsInterface } from "../components/Projects";
import Rocketboost from "../assets/rocketboost.png";
import MrDecal from "../assets/mrdecal.png";
import { themeInterface } from "../helpers/EmotionTheme";

const Head = motion.custom(styled.div`
  text-align: center;
  backface-visibility: hidden;
  h1 {
    margin: 0.5em 0;
  }
  h2 {
    margin: 0.5em 0;
  }
  margin: 0 3ch;
`);

const Main = styled.main<{ theme: themeInterface }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
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

const ProjectShowoff = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  height: fit-content;
  justify-items: center;
  transition: height 100ms ease;
  min-width: 60vw;
  > * {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`

const objects: ProjectsInterface[] = [
  {
    title: "RocketBoost calculators",
    description:
      `I coded up a set of calculators for a boosting service for the game Counter Strike: Global Offensive.
      I utilized React for the actual frontend part of the calculator, Firebase for storage of data and pricing and the PayPal API for payments.`,
    imageSrc: Rocketboost,
    emoji: {
      actual: "🚀",
      label: "rocket",
    },
    links: [
      {
        name: "Website",
        link: "https://rocketboost.pro",
        icon: faGlobe,
      },
    ],
  },
  {
    title: "Mr. Decal",
    description:
      `One of my earliest projects. This is the page that lists example prices for various decals.
      The page was written in Vue, with VueX used for state management, Firebase for data with RxFire and Vue-Rx connecting it to the frontend,
      Vue-i18n for internationalization and Bulma for the appearance of the components.`,
    imageSrc: MrDecal,
    emoji: {
      actual: "✈️",
      label: "plane",
    },
    links: [
      {
        name: "Website",
        link: "https://mrdecal.zolnierowi.cz",
        icon: faGlobe,
      },
      {
        name: "Github",
        link: "https://github.com/zbigniewzolnierowicz/mrdecal",
        icon: faGithub,
      },
    ],
  },
  {
    title: "Washr",
    description: "My personal project I made when learning Angular. It's a social platform built entirely on Firebase and its tooling, such as Firestore, Firebase Hosting and Firebase Storage. The front-end part of the website was built with Angular and connected to Firebase via angularfire. It also features a barebones Markdown editor, courtesy of Showdown.js.",
    emoji: {
      actual: "👕",
      label: "shirt",
    },
    links: [
      {
        name: "Website",
        link: "https://washrsocial.web.app",
        icon: faGlobe,
      },
      {
        name: "Github",
        link: "https://github.com/zbigniewzolnierowicz/washr",
        icon: faGithub,
      },
    ],
  },
];

export const Home = (_props: RouteComponentProps) => {
  const [selected, setSelected] = useState<undefined | number>(undefined);

  const Paragraph = styled.p`
    max-width: 50%;
    line-height: 1.6em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
  `;

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
      <Section
        css={css`
          p {
          }
        `}
      >
        <Emphasize
          as="h3"
          css={css`
            font-size: 1.4em;
          `}
        >
          What do I do?
        </Emphasize>
        <Paragraph>
          I'm a <Emphasize>front-end developer</Emphasize> specializing in
          JavaScript single-page applications written in <Typescript />{" "}
          <Emphasize>Typescript</Emphasize>,{" "}
          <FontAwesomeIcon icon={faVuejs} color="#42b883" />{" "}
          <Emphasize>Vue.js</Emphasize>,{" "}
          <FontAwesomeIcon icon={faReact} color="#00d8ff" />{" "}
          <Emphasize>React</Emphasize>,{" "}
          <FontAwesomeIcon icon={faAngular} color={"#DD0031"} /> Angular, and
          JAMstack development using state-of-the-art serverless solutions, like{" "}
          <Firebase /> <Emphasize>Google Firebase</Emphasize> or{" "}
          <Emphasize>Netlify</Emphasize>. For styling, I mainly use{" "}
          <FontAwesomeIcon icon={faSass} color={"#CD6799"} />{" "}
          <Emphasize>Sass</Emphasize> or <Emphasize>Emotion</Emphasize>, if I'm
          working with React components. For API prototyping, I also know{" "}
          <Emphasize>Express.js</Emphasize>. In terms of other miscellaneous
          libraries - I know and like working with the{" "}
          <Emphasize>ReactiveX</Emphasize> pattern and with its implementations
          - be it <Emphasize>RxJS</Emphasize>, RxFire or Angular Services; as
          well as <Emphasize>Framer</Emphasize> and other animation libraries,
          like <Emphasize>GreenSock</Emphasize>.
        </Paragraph>
        <Paragraph>...</Paragraph>
        <Paragraph>
          I also know <FontAwesomeIcon icon={faHtml5} color={"#e34c26"} />{" "}
          <Emphasize>HTML5</Emphasize>,{" "}
          <FontAwesomeIcon icon={faCss3Alt} color={"#2965f1"} />{" "}
          <Emphasize>CSS3</Emphasize> and <Emphasize>JQuery</Emphasize>, I
          guess.
        </Paragraph>
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
        <ProjectShowoff>
          {objects
            .map((el, i) => (
              <Project
                {...el}
                key={i}
                index={0}
                mode={i === selected}
                onClick={() => setSelected(undefined)}
              />
            ))
            .filter((_, i: number) => i === selected)}
        </ProjectShowoff>
      </AnimatePresence>
      <Projects>
        <AnimatePresence>
          {objects
            .map((el, i) => (
              <Project
                {...el}
                index={i}
                mode={i === selected}
                onClick={() => setSelected(i)}
              />
            ))
            .filter((_, i: number) => i !== selected)}
        </AnimatePresence>
      </Projects>
      <Section
        css={css`
          p {
            margin-block-start: 0.5em;
            margin-block-end: 0.5em;
          }
        `}
      >
        <Emphasize
          as="h3"
          css={css`
            font-size: 1.4em;
          `}
        >
          How did I become a developer?
        </Emphasize>
        <Paragraph>
          I first started by learning the usual - HTML, CSS and some basics of
          JavaScript. That was around the time when I was in middle school, with
          the help of my school teachers. Once I hit high school, I picked up
          C++ (then dropped it) and Python, dabbled with Go, but then I found my
          calling: I wanted to be a web developer.
        </Paragraph>
        <Paragraph>
          So I marathoned a ton of Udemy courses, read documentation, watched
          people like Jeff Delaney's Fireship, conferences (especially this one
          by my programming hero - Jake Archibald), and thought: "Yeah, I like
          this."
        </Paragraph>
      </Section>
    </Main>
  );
};
