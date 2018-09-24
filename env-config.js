const {NODE_ENV , GRAPHCOOL_URL, MAPBOX_ACCESS_TOKEN} = process.env
const prod = NODE_ENV === 'production'

const GRAPHCOOL_URL_DEV = 'http://localhost:60000/simple/v1/cjljtmpg200040129xllqtr82';
const MAPBOX_ACCESS_TOKEN_DEV = 'pk.eyJ1IjoiemFwYWlhbWFyY2UiLCJhIjoiY2ptZmt5ZDJ2MThrNjNrbnZnNjJmM2wwMyJ9.T1Ue4UMyarIHDZ2MaTpFGw'

module.exports = {
  'process.env.GRAPHCOOL_URL': GRAPHCOOL_URL || GRAPHCOOL_URL_DEV,
  'process.env.MAPBOX_ACCESS_TOKEN': MAPBOX_ACCESS_TOKEN || MAPBOX_ACCESS_TOKEN_DEV
}