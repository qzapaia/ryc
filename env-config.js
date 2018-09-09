const {NODE_ENV , GRAPHCOOL_URL} = process.env
const prod = NODE_ENV === 'production'
const GRAPHCOOL_URL_DEV = 'http://localhost:60000/simple/v1/cjljtmpg200040129xllqtr82';

module.exports = {
  'process.env.GRAPHCOOL_URL': GRAPHCOOL_URL || GRAPHCOOL_URL_DEV
}