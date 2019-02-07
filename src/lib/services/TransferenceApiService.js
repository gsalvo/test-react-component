import {endpoints} from '../config/config';
import BaseApiService from "./BaseApiService";

const API_BASE_URL = endpoints.transferenceApi.url;
const VERSION = endpoints.transferenceApi.version;
const API_URL = `${API_BASE_URL}${VERSION}/`;

const defaultFetchParams = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
};

class TransferenceApiService extends BaseApiService {

    static async getTransferenceDocuments(code) {
        const apiResponse = await fetch(`${API_URL}document/${code}`, defaultFetchParams);
        return await super.processApiResponseSingle(apiResponse);
    }
}

export default TransferenceApiService;
