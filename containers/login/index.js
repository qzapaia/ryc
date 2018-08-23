import {PureComponent } from 'react';
import autoBind from "react-autobind"
import {InputDark} from "components/input-text"
import {SecondaryButton} from "components/button"
import Link from 'next/link'
import Router from 'next/router'

import {
  Title, 
  RootContainer, 
  ButtonContainer,
  Form,
  EmailText,
  Error,
  SubTitle,
  Disclaimer,
  CodeInput,
  CodeNotReceived
} from "./styled"

class Container extends PureComponent {
  constructor(){
    super()
    autoBind(this)
    
    this.state = {
      email: '',
      code: ''
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
    const { email } = this.state;
    this.props.onSignUpIn(email);
    Router.push("/login?step=insertCode")
  }
  onSubmitCode(e){
    e.preventDefault();
    const { email, code } = this.state;
    this.props.onAuth(email, code);
  }
  render() {
    const {submitted, email, code} = this.state;
    const {loginMessage, authLoading, authError, step} = this.props;

    return (step == "insertCode") ? (
      <RootContainer>
        <Title>
          Te enviamos un mail a <EmailText>{email}</EmailText> con un código
        </Title>
        <SubTitle>Ingresalo para continuar</SubTitle>
        <Form onSubmit={this.onSubmitCode}>
            <CodeInput 
              type="text"
              maxlength="6"
              placeholder="------"
              onChange={this.onCodeChange}
              value={code}
              disabled={authLoading}
            />
            {authError && <Error>! {authError}</Error>}
            <ButtonContainer>
              <SecondaryButton disabled={authLoading}>Ingresar</SecondaryButton>
            </ButtonContainer>
            <CodeNotReceived>¿No te llegó? <Link href="/login"><a>Click aquí</a></Link></CodeNotReceived>
        </Form>
      </RootContainer>
    ) : (
      <RootContainer>
        <Title>Ingresá solo con tu email</Title>
        {loginMessage && (
          <SubTitle>{loginMessage}</SubTitle>
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
              <SecondaryButton disabled={!email}>Ingresar</SecondaryButton>
            </ButtonContainer>
        </Form>
        <Disclaimer>No importa si es la primera vez</Disclaimer>
      </RootContainer>
    )
  }
}


export default Container;