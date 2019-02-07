import React, {Component} from 'react';
import moment from 'moment';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import {dateFormats} from '../../../config/config';

class DocumentSelector extends Component{

    render() {
        console.log(this.props.documentList);
        let documentsRender = [];
        documentsRender = this.props.documentList.map(function (document, index){
            const documentName = document.transfer_documents[0].transfer_document_type.name;
            const documentDate = moment(document.documentModification).format(dateFormats.shortDate);
            const documentUrl = document.path;
            return (
                <li className={'nav-item document-item-wrapper'} key={`document-item-${index}`}>
                    <a href={documentUrl} onClick={(event) => {
                        event.preventDefault();
                        if (this.props.onDocumentSelected) {
                            this.props.onDocumentSelected(documentName, documentUrl);
                        }
                    }}>
                        <div className="document-icon"><FontAwesomeIcon icon={faFilePdf}/></div>
                        <div className={'document-title'}>{documentName}</div>
                        <div className={'document-date'}>{documentDate}</div>
                    </a>
                </li>
            );
        }.bind(this));
        return (<div>
            <ul className="transference-document-list">
                {documentsRender}
            </ul>
        </div>);
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
}

export default DocumentSelector;
