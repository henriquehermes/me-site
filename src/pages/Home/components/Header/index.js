import React from 'react';

import {
  Container,
  H1,
  MenuBar,
  Body,
  MenuLabel,
  MenuButton,
  H3,
  NodeJS,
  ListIcons,
  ReactJS
} from './styles';

const Header = () => (
  <Container>
    <MenuBar>
      <MenuButton>
        <MenuLabel>Sobre</MenuLabel>
      </MenuButton>
      <MenuButton>
        <MenuLabel>Projetos</MenuLabel>
      </MenuButton>
      <MenuButton>
        <MenuLabel>Contato</MenuLabel>
      </MenuButton>
    </MenuBar>
    <Body>
      <H1>Full Stack Developer</H1>
      <H3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </H3>
      <ListIcons>
        <ReactJS />
        <NodeJS />
      </ListIcons>
    </Body>
  </Container>
);

export default Header;
