/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { Emphasize } from '../components/Emphasize'
import { motion } from "framer-motion"
import styled from "@emotion/styled";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
        margin: .5em 0;
    }
    h2 {
        margin: .5em 0;
    }
`

export const Home = (props: RouteComponentProps) => {
    return (
        <Main>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
            >
                <h1 css={css`font-size: 3em;`}><Emphasize>Zbigniew Żołnierowicz</Emphasize></h1>
                <h2>A web developer with a penchant for <Emphasize>grilled cheese</Emphasize></h2>
            </motion.div>
        </Main>
    )
}