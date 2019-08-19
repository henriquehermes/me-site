import styled, { css, keyframes } from 'styled-components';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';

const iconsStyle = css`
  width: 50px;
  height: 50px;
  color: #fff;
`;

const fadeIn = keyframes`
  from {
    transform: translate(0px, 50px);
    opacity: 0;
  }

  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: url('https://i.ibb.co/W6HSgWh/clouds.jpg');
  background-repeat: no-repeat;
`;

export const MenuBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: 400px) {
    display: none;
  }

  @media (min-width: 401px) and (max-width: 767px) {
    height: 80px;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-size: 60px;
  color: #fff;
  margin-top: -50px;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;

  @media (max-width: 400px) {
    font-size: 25px;
  }

  @media (min-width: 401px) and (max-width: 767px) {
    font-size: 35px;
  }
`;

export const H3 = styled.h3`
  color: #fff;
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
  width: 550px;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;
  animation-delay: 0.5s;

  @media (max-width: 767px) {
    width: 70%;
  }
`;

export const MenuButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background: transparent;
  height: 40px;
  margin-left: 15px;
  border-radius: 12px;
  border: 1px #fff solid;
  color: #fff;
  transition: all 0.2s linear;

  &:hover {
    background: #fff;
    color: black;
  }
`;

export const MenuLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

export const ListIcons = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;
  animation-delay: 1s;
`;

export const NodeJS = styled(Node)`
  ${iconsStyle}
`;

export const ReactJS = styled(ReactLogo)`
  ${iconsStyle}
`;
