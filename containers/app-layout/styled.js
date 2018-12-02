import styled, { keyframes, css } from 'styled-components'

const move = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const Root = styled.div`
  position: relative;
`

export const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  top:0;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  min-height: 100vh;
  height: 100%;
  transform: translateX(${props => props.show ? "0" : "-100%"});
  z-index:10;
`

export const MenuAnimation = styled.div`
  transform: translateX(-100%);
  ${props => props.show && css`
    animation: ${move} .1s linear forwards;
  `}
`