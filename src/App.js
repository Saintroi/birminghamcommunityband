import React from "react";
import { useRoutes, navigate } from "raviger";
import styled, { ThemeProvider } from "styled-components";
import { ErrorBoundary, Site, Gallery } from "./components";
import Routes from "./routes";
import "./App.css";

//const Login = React.lazy(() => import('./components'));

// Styles

const theme = {
  backgroundColor: "#FEF9EF",
  primaryColor: "#264653",
  altBackgroundColor: "#70ABAF",
  accentColor: "#FBB13C",
  brightAccentColor: "#00A896",
  altAccentColor: "#99E1D9",
  darkAccentColor: "#AD343E",
  vignetteColor: "#222C37",
  textColor: "black",
  altTextColor: "#8298A3",
};

const AppWrapper = styled.div`
  position: relative;
  background-color: ${theme.backgroundColor};
  height: 100vh;
`;

// JSX
function App(props) {
  const routeResult = useRoutes(Routes);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppWrapper key="app">{routeResult}</AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
