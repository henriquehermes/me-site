import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #ecf1f8;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}
`;
