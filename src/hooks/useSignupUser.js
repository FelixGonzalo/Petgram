import { gql, useMutation } from '@apollo/client'

const SIGNUP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useSignupUser = () => {
  const [signupMutation, { data, loading, error }] = useMutation(SIGNUP)
  return { signupMutation, data, loading, error }
}
