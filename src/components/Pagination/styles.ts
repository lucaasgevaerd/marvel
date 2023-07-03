import { styled } from "styled-components";

type Props = {
  theme?: TemplateStringsArray;
}

export const PaginationContainer = styled.div<Props>`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination-item {
  width: 30px;
  height: 30px;
  border: 2px solid ${props => props.theme.dark};
  font-weight: bold;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.infoBallonBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 50%;
}

.pagination-item:hover {
  cursor: pointer;
  scale: 110%;
}

.pagination-link-active {
  background-color: ${props => props.theme.dark};
  border: 2px solid ${props => props.theme.infoBallonBackgroundColor};
  color: ${props => props.theme.infoBallonBackgroundColor};
}

.arrow-previous {
    width: 30px;
  height: 30px;
  border: 2px solid ${props => props.theme.infoBallonBackgroundColor};
  font-weight: bold;
  color: ${props => props.theme.infoBallonBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  border-radius: 50%;
}

.arrow-next {
    width: 30px;
  height: 30px;
  border: 2px solid ${props => props.theme.infoBallonBackgroundColor};
  font-weight: bold;
  color: ${props => props.theme.infoBallonBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  border-radius: 50%;
}

.arrow-inactive {
  color: ${props => props.theme.lightGray};
  opacity: 0.4;
  border: 2px solid ${props => props.theme.lightGray};
}

.arrow-active {
  color: black;
}

.pagination-arrow-container {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.arrow-previous:hover,
.arrow-next:hover {
  cursor: pointer;
}

.arrow-inactive:hover {
  cursor: default;
}
`