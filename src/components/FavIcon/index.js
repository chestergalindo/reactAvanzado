import React from 'react'
import { Button } from './stylus'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavIcon = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
