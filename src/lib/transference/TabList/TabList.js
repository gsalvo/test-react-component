import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

import TransferenceApiService from '../../services/TransferenceApiService';
import DocumentSelector from './Tabs/DocumentSelector';

class TabList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'documentSelector',
            documentList: [],
        };
    }

    async componentDidMount() {
       this.setState({
           documentList : await this.getDocumetByTransferenceCode(this.props.transferenceCode)
       });
    }

    getDocumetByTransferenceCode = async (code) => {
        const result = await TransferenceApiService.getTransferenceDocuments(code);
        return result;
    };

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return (
            <div>
                <Nav tabs className="sidebar-tabs">
                    <NavItem>
                        <NavLink
                            className={this.state.activeTab === 'documentSelector' ? 'active' : ''}
                            onClick={() => this.toggleTab('documentSelector')}
                        >Documentos</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="documentSelector" className="transference-document-list-tab-wrapper">
                        <DocumentSelector documentList={this.state.documentList} onDocumentSelected={this.props.onDocumentSelected} />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default TabList;
