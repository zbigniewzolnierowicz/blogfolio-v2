/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { Emphasize } from '../components/Emphasize'
import { motion } from "framer-motion"
import styled from "@emotion/styled";
import { Typescript } from "../components/icons/Typescript"
import { Firebase } from "../components/icons/Firebase"

const Head = motion.custom(styled.div`
text-align: center;
backface-visibility: hidden;
h1 {
    margin: .5em 0;
}
h2 {
    margin: .5em 0;
}
`)

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        text-align: justify;
    }
`

export const Home = (_props: RouteComponentProps) => {
    return (
        <Main>
            <Head
                initial={{ y: 200, rotateX: "-90deg", scale: 0 }}
                animate={{ y: 0, rotateX: 0, scale: 1 }}
            >
                <h1 css={css`font-size: 3em;`}><Emphasize>Zbigniew Żołnierowicz</Emphasize></h1>
                <h2>A web developer with a penchant for <Emphasize>grilled cheese</Emphasize>  <span role="img" aria-label="cheese">🧀</span></h2>
            </Head>
            <Section>
                <Emphasize as="h3" css={css`font-size: 1.4em`}>
                    What do I do?
                </Emphasize>
                <p>I'm a <Emphasize>front-end developer</Emphasize> specializing in JavaScript single-page applications written in <Typescript /> Typescript,  and JAMstack development using state-of-the-art serverless solutions, like <Firebase /> <Emphasize>Google Firebase</Emphasize>.</p>
            </Section>
        </Main>
    )
}