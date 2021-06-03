import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ErrorBoundary, Site, Dashboard, Login } from './components';
import GlobalFonts from './fonts/fonts';
import './App.css';

//const Login = React.lazy(() => import('./components'));

// Styles

const theme = {
  backgroundColor: '#FEF9EF',
  primaryColor: '#02C39A',
  altBackgroundColor: '#055574',
  accentColor: '#05668D',
  brightAccentColor: '#00A896',
  altAccentColor: '#BBBBBF',
  darkAccentColor: '#028090',
  vignetteColor: '#222C37',
  textColor: 'black',
  altTextColor: '#8298A3' 
}

const AppWrapper = styled.div`
  position: relative;
  background-color: ${theme.backgroundColor};
  height: 100vh;
`;

// JSX
function App(props){


  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppWrapper key='app'>
          <GlobalFonts />
          <Route exact path="/" component={Site}></Route>
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default withRouter(App);
