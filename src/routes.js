import React from "react";
import {Site, Gallery, Donate} from './components';

const routes = {
    "/": () => <Site />,
    "/gallery": () => <Gallery />,
    "/donate": () => <Donate/>
  };
  export default routes;