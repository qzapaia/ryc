const varsToEnvVars = (vars) => {
  const envConfig = {}
  for(const k in vars){
    envConfig[`process.env.${k}`] = process.env[k] || vars[k]
  }
  return envConfig
}

module.exports = varsToEnvVars({
  GRAPHCOOL_URL: "http://192.168.0.3:60000/simple/v1/cjljtmpg200040129xllqtr82",
  MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiemFwYWlhbWFyY2UiLCJhIjoiY2ptZmt5ZDJ2MThrNjNrbnZnNjJmM2wwMyJ9.T1Ue4UMyarIHDZ2MaTpFGw",
  ALGOLIA_INDEX_ID: "6REPSIU7OT",
  ALGOLIA_SEARCH_API_KEY: "b1d654a7488d3513af7575de2705b447"
})

// console.log(module.exports)