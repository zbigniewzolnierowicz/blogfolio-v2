/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { Emphasize } from '../components/Emphasize'

export const Home = (props: RouteComponentProps) => {
    return (
        <React.Fragment>
            <h1 css={css`font-size: 3em;`}>Zbigniew Żołnierowicz</h1>
            <h2>A web developer with a penchant for <Emphasize>grilled cheese</Emphasize></h2>
        </React.Fragment>
    )
}