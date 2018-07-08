import { Component } from 'react';
import Comp from './';
import {
  getFoodsNearAddress,
  getFoodsNearHere,
  getCurrentLocation,
} from './lib';

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
      near
    } = this.props;
    
    const here = near == 'here';
    
    const result = here ? await getFoodsNearHere() : await getFoodsNearAddress(near);
    
    console.log('result near', near, result);
    
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