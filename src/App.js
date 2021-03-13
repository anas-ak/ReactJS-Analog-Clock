import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Clock from './Clock';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>

        <div>
          <div className="row">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick = {() => themeToggler()}>Change Theme</button>
            <div className="col-lg-6 col-lg-offset-3">
              <div className="text-center"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <Clock size={400} timeFormat="24hour" hourFormat="standard"/>

            </div>
          </div>
        </div>
      
      </StyledApp>
      </ThemeProvider>
  );
}


// class App extends React.Component {
//   render() {
//     return (
      
//     );
//   }
// }

export default App;
