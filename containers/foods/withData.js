import { Component } from 'react';
import Comp from './';
import {
  getFoodsNearAddress,
  getFoodsNearHere
} from './lib';
import store from 'store2';

const LAST_ADDRESS = 'last-address';

export default class extends Component{
  constructor(){
    super();
    
    this.state = { 
      foods:[],
      error: null,
    }
  }
  async componentDidMount(){
    const {
      near,
      userGeoByIp = {}
    } = this.props;
    
    const {
      city = "",
      country = ""
    } = userGeoByIp

    const here = near == 'here';
    const result = here ? await getFoodsNearHere() : await getFoodsNearAddress({address:near, city, country});
    
    !here && store.set(LAST_ADDRESS, near);
    
    this.setState({
      foods:result.foods,
      error: result.error,
    });
  }
  render(){
    const {
      foods,
      error
    } = this.state;
    const {
      near
    } = this.props;

    return <Comp 
        foods={foods} 
        error={error}
        near={near}
    />
  }
}