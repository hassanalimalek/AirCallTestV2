import { useMutation } from '@apollo/client'
import { Notification } from '../../../libs/shared-components'
import {
  alreadyAuthenticatedRedirect,
  isAuthenticated,
  signInNotification
} from '../../../libs/shared-utils'
import { SignIn } from '../../../collections/auth/signIn'
import { GetServerSideProps, NextPage } from 'next'
import router from 'next/router'
import { GRAPHQL_USER } from '../../../services/GraphQL'
import { loginUser, useUserContext } from '../../../context'

const SignInPage: NextPage = () => {
  const [performLoginMutation, { loading, reset }] = useMutation(
    GRAPHQL_USER.MUTATIONS.LOGIN
  )
  const { dispatch } = useUserContext()

  const handleFormSubmitted = (username: string, password: string) => {
    performLoginMutation({
      onCompleted: data => {
        reset()
        dispatch(
          loginUser({
            accessToken: data.login.access_token,
            refreshToken: data.login.refresh_token,
            user: data.login.user
          })
        )
        router.push('/')
        Notification(signInNotification)
      },
      onError: error => {
        reset()
      },
      variables: {
        username: username,
        password
      }
    })
  }

  return (
    <>
      <SignIn
        handleFormSubmitted={handleFormSubmitted}
        showLoader={loading}
        heading={'Sign In'}
      />
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (isAuthenticated(req)) {
    return alreadyAuthenticatedRedirect('/')
  }
  return {
    props: {}
  }
}

export default SignInPage
