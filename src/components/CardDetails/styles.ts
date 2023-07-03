import { styled } from "styled-components";

type Props = {
    theme?: TemplateStringsArray
    sectionIsOpen?: boolean
}

export const CardDetailsContainer = styled.div<Props>`
width: 100%;
`
export const DetailsCardHeader = styled.header<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 10px 10px 0 0;
  background-color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.dark};
  font-size: 25px;
  font-family: 'Comic Neue', cursive;
  font-weight: bold;
  font-style: italic;
  div {
    position: absolute;
    display: flex;
    right: 20px;
    bottom: 0;
    font-size: 16px;
    font-style: normal;
    p {
        background-color: ${props => props.theme.infoBallonBackgroundColor};
        color: ${props => props.theme.dark};
        padding: 0 3px;
        border: 1px solid ${props => props.theme.dark};
        border-bottom: none;
        &:last-child {
            margin-left: 10px;
        }
    }
  }
`;


export const DetailsCardContent = styled.div<Props>`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    align-items: end;
    background-color: ${props => props.theme.light};
    padding: 20px;
    border: 2px solid ${props => props.theme.dark};
    border-top: none;
`
export const DetailsCardDescription = styled.div<Props>`
    display: flex;
    align-items: center;
    img {
        width: 10%;
        margin-right: 30px;
        border: 2px solid ${props => props.theme.dark};
    }
    p {
        width: 90%;
    }
    background-color: ${props => props.theme.infoBallonBackgroundColor};
    color: ${props => props.theme.dark};
    border: 2px solid ${props => props.theme.dark};
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-family: 'Comic Neue', cursive;
    font-style: italic;
    padding: 20px;
    border-radius: 5px;
    text-align: justify;
    margin-bottom: 20px;
`



export const DetailsCardSectionContainer = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.dark};
    margin-bottom: 20px;
`

export const DetailCardSectionTitle = styled.header<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.marvelRed};
    color: ${props => props.theme.light};
    font-size: 22px;
    font-weight: bold;
    border: 2px solid ${props => props.theme.dark};
`

export const DetailsCardSectionContent = styled.div<Props>`
    display: flex;
    overflow-x: auto;
    transition: height 0.2s;
    height: ${props => props.sectionIsOpen ? 'auto' : '0'};
    background-color: ${props => props.theme.lightGray};
    margin-bottom: 10px;
`

export const DetailsCardSectionButton = styled.div<Props>`
    width: 100%;
    display: flex;
    justify-content: center;
    .arrow-down {
        scale: 2;
        fill: ${props => props.theme.marvelRed};
        border-radius: 5px;
        transition: scale 0.2s;
        cursor: pointer;
        rotate: ${props => props.sectionIsOpen ? '180deg' : '0deg'};
        &:hover {
            scale: 2.5;
        }
    }
`