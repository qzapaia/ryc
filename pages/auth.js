import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const Text = styled.div`
  background-color:${props=>props.theme.colors.main};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  color:white;
  padding:20px;
`

export default class extends Component {
  static getInitialProps(ctx){
    const { token, redirect} = ctx.query;
    
    return {
      token,
      redirect
    }
  }
  componentDidMount(){    
    const {token,redirect} = this.props;
    document.cookie = `token=${token};path=/`;
    
    setTimeout(()=> location.href = '/', 1000);
  }
  render() {
    return <Text>
      Ingresando a tu cuenta ...
    </Text>
  }
}
