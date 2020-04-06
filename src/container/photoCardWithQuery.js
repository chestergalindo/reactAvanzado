import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProps = ({ loading, error, data }) => {
  if (loading) return <h1>Loading... </h1>
  if (error) return <h1>error... </h1>
  if (data) {
    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }
  return null
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }} >
    {renderProps}
  </Query>
)
