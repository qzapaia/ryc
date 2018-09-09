import {withProps, withState, compose} from "recompose"
const c = s => s[0].toUpperCase() + s.slice(1);

export default (keys) => {
  const keysInfo = keys.map(k=>({
    name:k,
    internalName:`_${k}`,
    onChangeName:`on${c(k)}Change`,
    internalOnChangeName:`_on${c(k)}Change`,
  }))

  const withStateEnhacers = keysInfo.map(i=>(
    withState(i.internalName, i.internalOnChangeName, '')
  ))
  .concat(withProps(props=>{
    const newProps = {}

    keysInfo.forEach(i=>{
      newProps[i.name] = props[i.name] || props[i.internalName];
      newProps[i.onChangeName] = props[i.onChangeName] || props[i.internalOnChangeName];
    })

    return newProps
  }))

  return compose(...withStateEnhacers)
  return r=>r
}