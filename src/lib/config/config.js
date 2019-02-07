const endpoints = {
  transferenceApi: {
    url: process.env.REACT_APP_TRANSFERENCE_API_URL || 'http://localhost:3000/transference/',
    version: 'v1',
    apiKey: '',
  }
}

const dateFormats = {
  longDate: 'DD-MM-YYYY HH:mm:ss',
  shortDate: 'DD-MM-YYYY'
}

module.exports = {
  endpoints,
  dateFormats
}
