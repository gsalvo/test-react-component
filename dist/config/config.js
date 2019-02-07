var endpoints = {
  transferenceApi: {
    url: process.env.REACT_APP_TRANSFERENCE_API_URL || 'https://vn225hz994.execute-api.us-east-1.amazonaws.com/transference/',
    version: 'v1',
    apiKey: ''
  }
};
var dateFormats = {
  longDate: 'DD-MM-YYYY HH:mm:ss',
  shortDate: 'DD-MM-YYYY'
};
module.exports = {
  endpoints: endpoints,
  dateFormats: dateFormats
};