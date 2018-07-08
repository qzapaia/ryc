import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router'

const LAST_NEIGHBORHOOD = 'last-neighborhood';


class Container extends PureComponent {
  constructor(){
    super()
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      email: '',
      submitted:false
    }
  }
  onEmailChange(e){
    const { value } = e.target;

    this.setState({
      email:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({
      submitted:true
    })
    const { onLogin } = this.props;
    const { email } = this.state;
    
    onLogin(email);
  }
  render() {
    const {
      submitted,
    } = this.state;
    const {
      loading
    } = this.props
    
    return (!submitted && !loading) ? (
      <div>
        <h1>Tu email:</h1>
        <form onSubmit={this.onSubmit}>
          <div>  
            <input 
              type="email" 
              onChange={this.onEmailChange}
              value={this.state.email}
            />
          </div>
          <div>
            <button>
              Ingresar
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div>Te enviamos un mail con un link para ingresar a tu cuenta</div>
    )
  }
}

Container.propTypes = {

};

Container.defaultProps = {
  
}

export default Container;