import React from 'react';

import { Container } from './styles';
import Header from './components/Header';
import About from './components/About';

const Home = () => (
  <Container>
    <Header />
    <About />
  </Container>
);

export default Home;
