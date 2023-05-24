import React, { useMemo, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../components/PostCard'
import Loader from '../components/Loader';
import { GET_POSTS, GET_USER } from '../redux/constants'

const User = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { posts } = useSelector((store) => store.posts)
  const { user } = useSelector((store) => store.user)

  const userPosts = useMemo(() => {
    return posts.filter(post => post.userId === location.state)
  }, [posts, location.state ])

  useEffect(() => {
    dispatch({type: GET_USER, payload: location.state})
  }, [dispatch, location.state]);

  useEffect(() => {
    dispatch({type: GET_POSTS})
  }, [dispatch]);


  return (
    <Card >
      <Card.Body>
        {user && 
          <>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>Все посты пользователя {user.username}:</Card.Text> 
          </>
        }
        <Card.Text>
          {userPosts.length !== 0 ? userPosts.map(post => <PostCard key={post.id} id={post.id} title={post.title} text={post.body} userId={post.userId} avatarDisabled={true} />) : <Loader />}
        </Card.Text>
        <Button variant="primary" className="mb-1" onClick={() => navigate('/mitra_test')}>Назад</Button>
      </Card.Body>
    </Card>
  )
}

export default User

