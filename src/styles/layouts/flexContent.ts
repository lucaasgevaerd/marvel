import { styled } from "styled-components";

type Props = {
    theme?: TemplateStringsArray
}

export const FlexContent = styled.div<Props>`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
`