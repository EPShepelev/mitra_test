import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar'
import { useSelector, useDispatch } from 'react-redux';
import { GET_COMMENTS } from '../redux/constants'
import Comment from './Comment';

const PostCard = ({ id, title, text }) => {
  const dispatch = useDispatch()
  const { comments } = useSelector((store) => store.comments)
  const [isCommentsVisible, setIsCommentsVisible] = useState(false)

  const filtredComments = comments.filter(comment => comment.postId === id)

  const handleComments = () => {
    setIsCommentsVisible(prev => !prev)
    if (!isCommentsVisible) {
      dispatch({type: GET_COMMENTS, payload: id})
    }
  }

  return (
    <div className="postsList">
      <Card>
      <Card.Body>
        <Avatar />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={handleComments}>Комментарии</Button>
        {!!isCommentsVisible && filtredComments.map(comment => <Comment email={comment.email} text={comment.body} />)}
      </Card.Body>
    </Card>
    </div>
  )
}

export default PostCard
