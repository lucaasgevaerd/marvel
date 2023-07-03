import styled from "styled-components";

type Props = {
    theme?: TemplateStringsArray
}

export const HeaderContainer = styled.header<Props>`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.marvelRed};
    height: 60px;
    z-index: 1;
    img {
        width: 100px;
    }
`