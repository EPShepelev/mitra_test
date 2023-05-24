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
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { posts } = useSelector((store) => store.posts)
  const { user } = useSelector((store) => store.user)

  // TODO заменить на более красивое решение
  const userPosts = useMemo(() => {
    return posts.filter(post => post.userId === +pathname.split('/')[2])
  }, [pathname, posts ])

  useEffect(() => {
    dispatch({type: GET_USER, payload: +pathname.split('/')[2]})
  }, []);

  useEffect(() => {
    dispatch({type: GET_POSTS})
  }, [dispatch]);

  console.log(user)

  return (
    <Card >
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>Все посты пользователя {user.username}:</Card.Text>
        <Card.Text>
          {userPosts.length !== 0 ? userPosts.map(post => <PostCard key={post.id} id={post.id} title={post.title} text={post.body} userId={post.userId} />) : <Loader />}
        </Card.Text>
        <Button variant="primary" className="mb-1" onClick={() => navigate('/')}>Назад</Button>
      </Card.Body>
    </Card>
  )
}

export default User


