import styled from 'styled-components'

export const Form = styled.form`
  padding:  16px;
  &[disabled] {
    opacity: 0.5;
  }
`

export const Input = styled.input`
  width: 100%;
  display: block;
  margin-bottom: 5px;
  padding: 8px 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

export const Button = styled.button`
  width: 100%;
  height: 32px;
  display: block;
  text-align: center;
  background: #ff9300;
  border-radius: 3px;
  color: #fff;
`

export const Title = styled.h2`
  padding: 8px 0;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`

export const Error = styled.span`
  display: inline-block;
  padding: 0 16px;
  color: red;
  font-size: 14px;
`
