import React, { useState, useEffect } from 'react'
import {
  FormItem,
  Container,
  FlexContainer,
  Text,
  Input,
  Button,
  useForm,
  Image
} from '../../libs/shared-components'
import { EventType } from '../../types'
import { StyledForm } from './elements'
import { SignInFormProps } from '../../types'

export const SignIn: React.FC<SignInFormProps> = ({
  handleFormSubmitted,
  showLoader,
  heading
}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [activateButton, setActivateButton] = useState(false)

  const [form] = useForm()

  useEffect(() => {
    if (userName !== '' && password !== '') {
      form
        .validateFields()
        .then(() => {
          setActivateButton(true)
        })
        .catch(() => {
          setActivateButton(false)
        })
    } else {
      setActivateButton(false)
    }
  }, [userName, password])

  const handleInput = (
    event: EventType,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (event) {
      const { value } = event.target as HTMLInputElement
      return setter(value)
    }
  }

  const trySignIn = () => {
    handleFormSubmitted && handleFormSubmitted(userName, password)
  }

  return (
    <>
      <FlexContainer
        justifyContent='space-between'
        minHeight='100vh'
        alignItems='center'
      >
        <Container textAlign='center'>
          <Image
            src='https://uploads-ssl.webflow.com/61331aa6abb9fec3e2bdfacc/615eb427dca6915e4999117b_TT%20Logo.svg'
            alt={'Turing Tech logo'}
            width='75%'
            margin='auto'
          ></Image>
        </Container>
        <Container>
          <FlexContainer textAlign='center'>
            <Container>
              <StyledForm layout='vertical' onFinish={trySignIn}>
                <Text fontSize='24px' marginBottom='24px' display='block'>
                  Sign In
                </Text>
                <FormItem
                  label='UserName'
                  name='userName'
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder='Enter your User Name'
                    type='username'
                    name='userName'
                    onChange={event => {
                      handleInput(event, setUserName)
                    }}
                  />
                </FormItem>
                <FormItem
                  label='Password'
                  name='Password'
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder='Enter your password'
                    type='password'
                    name='email'
                    onChange={event => {
                      handleInput(event, setPassword)
                    }}
                  />
                </FormItem>
                <Button
                  active={activateButton ? activateButton : undefined}
                  marginBottom='20px'
                  fontSize='16px'
                  loading={showLoader}
                  htmlType='submit'
                  fluid
                >
                  {showLoader ? '' : 'Sign In'}
                </Button>
              </StyledForm>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </>
  )
}
