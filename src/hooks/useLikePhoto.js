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

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

export const useLikePhoto = ({ id }) => {
  const [toggleLike] = useMutation(LIKE_PHOTO)

  const likePhoto = () => {
    toggleLike({ variables: { input: { id: id } } })
  }
  return likePhoto
}
