
import React from 'react';
import { render } from "react-dom";
import { PdfBrowser} from 'testo';

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
<PdfBrowser name={'test'}></PdfBrowser>  


  </div>
);

render(<App />, document.getElementById("root"));