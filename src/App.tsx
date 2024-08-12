
import { createGlobalStyle } from 'styled-components';
import Workspace from './Components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;

    --main-bg-color: #0d1b2a;
    --layouts-bg-color: #14213d;
    --elements-bg-color: #fca311;
    --main-text-color: #ffffff;

  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: var(--main-text-color);
    background-color: var(--main-bg-color);
    padding: 0;
    margin: 0;
  }
}
`;



function App() {
  return (
    <>
      <GlobalStyles />
      <Workspace/>
    </>
  )
}

export default App
