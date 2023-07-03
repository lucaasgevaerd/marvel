import { createGlobalStyle } from 'styled-components'

interface Props {
    theme?: TemplateStringsArray;
}

export const GlobalStyles = createGlobalStyle<Props>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
