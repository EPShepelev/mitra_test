import React, { useState, useMemo } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar'
import { useSelector, useDispatch } from 'react-redux';
import { GET_COMMENTS } from '../redux/constants'
import Comment from './Comment';
import { useNavigate } from 'react-router-dom'

const PostCard = ({ id, title, text, userId, avatarDisabled }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { comments } = useSelector((store) => store.comments)
  const [isCommentsVisible, setIsCommentsVisible] = useState(false)

  const filtredComments = useMemo(() => {
    return comments.filter(comment => comment.postId === id)
  }, [comments, id])

  const handleComments = () => {
    setIsCommentsVisible(prev => !prev)
    if (!isCommentsVisible) {
      dispatch({type: GET_COMMENTS, payload: id})
    }
  }

  return (
    <Card className="mb-2">
      <Card.Body>
        {!avatarDisabled && 
          <Button className="mb-1" variant="light" onClick={() => navigate(`/mitra_test/users/${userId}`, { state: userId })}> 
            <Avatar />
          </Button>
        }
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" className="mb-1" onClick={handleComments}>Комментарии</Button>
        {!!isCommentsVisible && filtredComments.map(comment => <Comment key={comment.id} email={comment.email} text={comment.body} />)}
      </Card.Body>
    </Card>
  )
}

export default PostCard
