import styled from "styled-components";
import { breakpoints } from "./breakpoints";

type Props = {
    theme?: TemplateStringsArray
}

export const MainContainer = styled.main<Props>`
    background-color: ${props => props.theme.mainBackgroundColor};
    padding-top: 80px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    
    @media (max-width: ${'639px'}) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media (min-width: ${breakpoints.sm}) {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 90px;
    }
    @media (min-width: ${breakpoints.lg}) {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 100px;
    }
`