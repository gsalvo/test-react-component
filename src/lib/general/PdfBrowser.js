import React, {Component} from 'react';
import config from '../config/config';

export default class PdfBrowser extends Component {

  test = async() => {
    await fetch(config.endpoints.transferenceApi.url);
  }

  render() {
    
    const name = this.props.name || this.props.src.replace(/^.*[\\/]/, '');
    let document = '';
    if (this.props.src) {
      document = (
        <iframe
          src={this.props.src}
          title={name}
          className={`embed-responsive-item`}
        />
      );
    }
    return (
      <div>
        <div id='document-browser' className={`embed-responsive embed-responsive-1by1`}>
          {document}
          <button onClick={this.test} >testo</button>
        </div>
      </div>
    );
  }
}
