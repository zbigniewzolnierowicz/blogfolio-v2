/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { Emphasize } from '../components/Emphasize'
import { motion } from "framer-motion"
import styled from "@emotion/styled";


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

export const Home = (_props: RouteComponentProps) => {
    const [scale, setScale] = useState(1);
    return (
        <Main>
            <Head
                initial={{ y: 200, rotateX: "-90deg" }}
                animate={{ y: 0, rotateX: 0, scale }}
                onTap={() => setScale(scale === 1 ? 1.3 : 1)}
                whileTap={{ scale: 1.1 }}
            >
                <h1 css={css`font-size: 3em;`}><Emphasize>Zbigniew Żołnierowicz</Emphasize></h1>
                <h2>A web developer with a penchant for <Emphasize>grilled cheese</Emphasize></h2>
            </Head>
        </Main>

    )
}