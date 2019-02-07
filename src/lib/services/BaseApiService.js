

class BaseApiService {

    static async processApiResponseSingle(apiResponse) {
        if (![200, 201].includes(apiResponse.status)) {
            return false;
        }
        const fullResponse = await apiResponse.json();
        return fullResponse.data;
    }

    static async processApiResponseList(apiResponse) {
        if (apiResponse.status !== 200) {
            return {
                data: [],
                extra: {
                    recordsTotal: 0,
                    recordsFiltered: 0
                }
            };
        }
        return await apiResponse.json();
    }

    static objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return keyValuePairs.join('&');
    }

}

export default BaseApiService;
