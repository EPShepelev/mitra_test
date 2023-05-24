import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar'
import { useDispatch } from 'react-redux';
import { GET_COMMENTS } from '../redux/constants'

const PostCard = ({ title, text }) => {
  const dispatch = useDispatch()
  const [isCommentsVisible, setIsCommentsVisible] = useState(false)

  const handleComments = () => {
    setIsCommentsVisible(prev => !prev)
    dispatch({type: GET_COMMENTS})
  }

  return (
    <div className='postsList'>
      <Card>
      <Card.Body>
        <Avatar />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={handleComments}>Комментарии</Button>
        {!!isCommentsVisible && <div>Комментарии здесь!</div>}
      </Card.Body>
    </Card>
    </div>
  )
}

export default PostCard
