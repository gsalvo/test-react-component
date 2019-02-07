import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import moment from 'moment';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dateFormats } from '../../../config/config';

var DocumentSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentSelector, _Component);

  function DocumentSelector() {
    _classCallCheck(this, DocumentSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentSelector).apply(this, arguments));
  }

  _createClass(DocumentSelector, [{
    key: "render",
    value: function render() {
      console.log(this.props.documentList);
      var documentsRender = [];
      documentsRender = this.props.documentList.map(function (document, index) {
        var _this = this;

        var documentName = document.transfer_documents[0].transfer_document_type.name;
        var documentDate = moment(document.documentModification).format(dateFormats.shortDate);
        var documentUrl = document.path;
        return React.createElement("li", {
          className: 'nav-item document-item-wrapper',
          key: "document-item-".concat(index)
        }, React.createElement("a", {
          href: documentUrl,
          onClick: function onClick(event) {
            event.preventDefault();

            if (_this.props.onDocumentSelected) {
              _this.props.onDocumentSelected(documentName, documentUrl);
            }
          }
        }, React.createElement("div", {
          className: "document-icon"
        }, React.createElement(FontAwesomeIcon, {
          icon: faFilePdf
        })), React.createElement("div", {
          className: 'document-title'
        }, documentName), React.createElement("div", {
          className: 'document-date'
        }, documentDate)));
      }.bind(this));
      return React.createElement("div", null, React.createElement("ul", {
        className: "transference-document-list"
      }, documentsRender));
    }
    /*render() {
        const documentsRender = [];
        this.props.documentList.filter(document => document.estado === 1).forEach(document => {
            const DocumentType = getDocumentTypeFromId(document.tipo);
            let documentTitle = DocumentType ? DocumentType.label : 'OTRO';
            if (DocumentType && DocumentType.id === TransferenceDocumentType.OTHER.id) {
                documentTitle += ` (${document.nombre})`;
            }
            documentsRender.push(<li className={'nav-item document-item-wrapper'} key={`document-item-${document.iddocumento}`}>
                <a href={document.ruta_fisica} onClick={(event) => {
                    event.preventDefault();
                    if (this.props.onDocumentSelect) {
                        this.props.onDocumentSelect(document);
                    }
                }}>
                    <div className="document-icon"><FontAwesomeIcon icon="file-pdf"/></div>
                    <div className={'document-title'}>{documentTitle}</div>
                    <div className={'document-date'}>{moment(document.timestamp_modificacion).format(formats.date)}</div>
                </a>
            </li>);
        });
        return (<div>
            <ul className="transference-document-list">
                {documentsRender}
            </ul>
        </div>);
    }*/

  }]);

  return DocumentSelector;
}(Component);

export default DocumentSelector;