import { Component } from 'react';
import PropTypes from 'prop-types';


export default class extends Component {
  static getInitialProps(ctx){
    return {
      token: ctx.query.token
    }
  }
  componentDidMount(){    
    document.cookie = `token=${this.props.token};path=/`;
    setTimeout(()=>location.href='/me', 1000);
  }
  render() {
    return <div>
      Ingresando a tu cuenta ...
    </div>
  }
}
