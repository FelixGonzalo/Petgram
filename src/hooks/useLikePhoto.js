import { gql, useMutation } from '@apollo/client'

const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

export const useLikePhoto = ({ id }) => {
  const [toggleLike] = useMutation(LIKE_ANONYMOUS_PHOTO)

  const likePhoto = () => {
    toggleLike({ variables: { input: { id: id } } })
  }
  return likePhoto
}
