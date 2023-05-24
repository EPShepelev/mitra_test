import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard'
import NoPosts from '../components/NoPosts'
import { useDispatch } from 'react-redux';
import { GET_POSTS } from '../redux/constants'

const Posts = () => {
    const { posts } = useSelector((store) => store.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GET_POSTS})
      }, [dispatch]);

  return (
    <div>
      {posts.length !== 0 ? posts.map(post => <PostCard key={post.id} title={post.title} text={post.body} />) : <NoPosts />}
    </div>
  )
}

export default Posts
