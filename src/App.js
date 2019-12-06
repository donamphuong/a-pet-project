import React from 'react';
import WebApp from './WebApp.js'
import MobileApp from './MobileApp.js'
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserView><WebApp/></BrowserView>
        <MobileView><MobileApp/></MobileView>
      </div>
   );
 }
}

export default (App);
