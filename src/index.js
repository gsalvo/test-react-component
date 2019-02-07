
import React from 'react';
import { render } from "react-dom";
import { PdfBrowser, TabList} from 'testo';
import './index.css';


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
<PdfBrowser name={'test'}></PdfBrowser>  
  <TabList transferenceCode={'TRF5c5a22b2d1e21'} />


  </div>
);

render(<App />, document.getElementById("root"));