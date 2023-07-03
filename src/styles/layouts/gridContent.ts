import { styled } from "styled-components";
import { breakpoints } from "./breakpoints";

export const GridContent = styled.div`
    display: inline-grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    justify-items: center;
    max-width: 1700px;
    min-height: 100vh;
    gap: 20px;
    margin: 0 auto 30px;
    @media (max-width: '639px') {
        grid-template-columns: auto;
    }
    @media (min-width: ${breakpoints.sm}) {
        grid-template-columns: auto auto;
    }
    @media (min-width: ${breakpoints.lg}) {
        gap: 40px;
    }
    @media (min-width: ${breakpoints.xl}) {
        grid-template-columns: auto auto auto auto;
    }
    @media (min-width: ${breakpoints.xxl}) {
        grid-template-columns: auto auto auto auto auto;
    }
`
