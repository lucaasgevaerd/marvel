import { styled } from "styled-components";
import { breakpoints } from "../../styles/layouts/breakpoints";

type Props = {
    theme?: TemplateStringsArray
}

export const SearchBarContainer = styled.div<Props>`
    width: 100%;
    height: 40px;
    border: 2px solid ${props => props.theme.darkText};
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.infoBallonBackgroundColor};
    &:focus {
        outline: none;
    }
    display: flex;
    align-items: center;
    position: relative;
    svg {
        position: absolute;
        left: 10px;
        scale: 1.25;
    }
    input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding-left: 40px;
        padding-right: 20px;
        font-family: 'Comic Neue', cursive;
        font-weight: 700;
        font-size: 18px;
        font-style: italic;
        &:focus {
            outline: none;
        }
    }
    @media (max-width: ${breakpoints.sm}) {
        max-width: 300px;
    }
    @media (min-width: ${breakpoints.sm}) {
        margin-bottom: 30px;
        max-width: 620px;
    }
    @media (min-width: ${breakpoints.lg}) {
        margin-bottom: 40px;
        max-width: 640px;
    }
`