import styled from "styled-components"
import cloudinary from "lib/cloudinary"
import {InputDark} from "components/input-text"

export const RootContainer = styled.div`
  padding: 40px 10px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 23px;
`

export const LoginMessage = styled.div`
  font-size: 16px;
  margin-top: 20px;
`

export const Form = styled.form`
  margin-top: 20px;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display:flex;
  justify-content:center;
`

export const EmailText = styled.span`
  color:${props=>props.theme.colors.main};
`

export const SentEmail = styled.span`
  font-size: 23px;
  font-weight: 500;
  color:${props=>props.theme.colors.gray};
`

export const Disclaimer = styled.div`
  font-size: 14px;
  color:${props=>props.theme.colors.main};
  text-align: center;
  margin-top: 40px;
`
export const Error = Disclaimer.extend`
  color:${props=>props.theme.colors.coral};
  margin-top: 10px;
`

export const CodeInput = styled(InputDark)`
  text-align: center;
  font-size: 24px;
  letter-spacing: 10px;
`