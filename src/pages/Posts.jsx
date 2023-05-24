import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { GET_POSTS } from '../redux/constants'

import PostCard from '../components/PostCard'
import NoPosts from '../components/NoPosts';
import Loader from '../components/Loader';

const Posts = () => {
    const { posts } = useSelector((store) => store.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GET_POSTS})
      }, [dispatch]);
    
    if (!posts) {
      return (
        <NoPosts />
      )
    }

    return (
      <div>
      {posts.length !== 0 ? posts.map(post => <PostCard key={post.id} id={post.id} title={post.title} text={post.body} userId={post.userId} avatarDisabled={false}/>) : <Loader />}
    </div>
    )
  }

export default Posts
