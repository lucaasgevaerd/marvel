import styled from "styled-components";

type Props = {
  theme?: TemplateStringsArray
}

export const CardContainer = styled.div<Props>`
  position: relative;
  background-color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.dark};
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 450px;
  padding: 10px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 10px;
    background-color: ${props => props.theme.light};
    color: ${props => props.theme.dark};
    position: absolute;
    z-index: 1;
    font-family: 'Comic Neue', cursive;
    font-weight: bold;
    font-style: italic;
    transition: all 0.4s;
    scale: 0
  }
  .more_card_information {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -2px;
    left: -2px;
    box-sizing: content-box;
    border: 2px solid ${props => props.theme.dark};
    background-color: ${props => props.theme.dark};
    opacity: 0;
    transition: all 0.2s;
  }
  &:hover a {
    scale: 1;
  }
  &:hover .more_card_information {
    opacity: 0.6;
  }
  &:hover img {
    filter: blur(2px);
  }
  img {
    border: 2px solid black;
    width: 100%;
    height: 100%;
    filter: blur(0);
  }
  div {
    position: absolute;
    width: 100%;
    bottom: 5%;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 80%;
        height: 100%;
        background-color: ${props => props.theme.infoBallonBackgroundColor};
        color: ${props => props.theme.dark};
        border: 2px solid ${props => props.theme.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-family: 'Comic Neue', cursive;
        font-weight: 700;
        font-style: italic;
    }
  }
  &:hover{
    transform: scale(1.05);
  }
`;