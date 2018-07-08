import styled, { keyframes } from 'styled-components'

const move = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const Root = styled.div`
  position: relative;
`

export const MenuContainer = styled.div`
  position: absolute;
  top:0;
  transform: translateX(-100%);
  width: 100%;
  background-color: rgba(0,0,0,.5);
  min-height: 100vh;

  ${props => props.show && `
    animation: ${move} .1s linear forwards;
  `}
`