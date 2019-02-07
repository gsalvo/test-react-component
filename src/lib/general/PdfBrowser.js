import React, {Component} from 'react';

export default class PdfBrowser extends Component {
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
        </div>
      </div>
    );
  }
}
