import {PureComponent } from 'react';
import autoBind from "react-autobind"
import {InputDark} from "components/input-text"
import {SecondaryButton} from "components/button"
import {
  Title, 
  RootContainer, 
  ButtonContainer,
  Form,
  EmailText,
  SentEmail,
  Postman,
  LoginMessage
} from "./styled"

class Container extends PureComponent {
  constructor(){
    super()
    autoBind(this)
    
    this.state = {
      email: '',
      submitted: false
    }
  }
  onEmailChange(e){
    this.setState({ email:e.target.value })
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({ submitted:true })
    const { email } = this.state;
    
    this.props.onLogin(email);
  }
  render() {
    const {submitted, email} = this.state;
    const {loading, loginMessage} = this.props;
    const notSentYet = !submitted && !loading;
    // const notSentYet = false

    return notSentYet ? (
      <RootContainer>
        <Title>Ingresá con tu email</Title>
        {loginMessage && (
          <LoginMessage>
            {loginMessage}
          </LoginMessage>
        )}
        <Form onSubmit={this.onSubmit}>
            <InputDark 
              type="email" 
              placeholder="yo@gmail.com"
              onChange={this.onEmailChange}
              value={email}
            />
            <ButtonContainer>
              <SecondaryButton>Ingresar</SecondaryButton>
            </ButtonContainer>
        </Form>
      </RootContainer>
    ) : (
      <RootContainer>
        <SentEmail>
          Te mandamos un mail a <EmailText>{email}</EmailText> con un botón para ingresar a tu cuenta
        </SentEmail>
        <Postman />
      </RootContainer>
    )
  }
}


export default Container;