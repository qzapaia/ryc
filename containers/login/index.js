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
  Error,
  LoginMessage,
  Disclaimer,
  CodeInput
} from "./styled"

class Container extends PureComponent {
  constructor(){
    super()
    autoBind(this)
    
    this.state = {
      email: '',
      code: '',
      submitted: false
    }
  }
  onEmailChange(e){
    this.setState({ email:e.target.value })
  }
  onCodeChange(e){
    this.setState({ code:e.target.value })
  }
  onSubmitEmail(e){
    e.preventDefault();
    this.setState({ submitted:true })
    const { email } = this.state;
    
    this.props.onSignUpIn(email);
  }
  onSubmitCode(e){
    e.preventDefault();
    const { email, code } = this.state;
    this.props.onAuth(email, code);
  }
  render() {
    const {submitted, email, code} = this.state;
    const {loginMessage, onAuthLoading, onAuthError} = this.props;

    return (!submitted) ? (
      <RootContainer>
        <Title>Ingresá solo con tu email</Title>
        {loginMessage && (
          <LoginMessage>
            {loginMessage}
          </LoginMessage>
        )}
        <Form onSubmit={this.onSubmitEmail}>
            <InputDark 
              type="email" 
              placeholder="yo@gmail.com"
              onChange={this.onEmailChange}
              value={email}
              autocomplete="on"
              />
            <ButtonContainer>
              <SecondaryButton>Ingresar</SecondaryButton>
            </ButtonContainer>
        </Form>
        <Disclaimer>No importa si es la primera vez</Disclaimer>
      </RootContainer>
    ) : (
      <RootContainer>
        <Title>
          Te enviamos un mail a <EmailText>{email}</EmailText> con un código para ingresar a tu cuenta
        </Title>
        <Form onSubmit={this.onSubmitCode}>
            <CodeInput 
              type="text"
              maxlength="6"
              placeholder="------"
              onChange={this.onCodeChange}
              value={code}
              disabled={onAuthLoading}
            />
            {onAuthError && <Error>! {onAuthError}</Error>}
            <ButtonContainer>
              <SecondaryButton disabled={onAuthLoading}>Ingresar</SecondaryButton>
            </ButtonContainer>
        </Form>
      </RootContainer>
    )
  }
}


export default Container;