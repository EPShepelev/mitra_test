import React from 'react'
import defaultAvatar from '../static/default_avatar.png'

const Avatar = ({avatar}) => {
  return (
    <div className="avatar">
      <img className="avatarPic" src={avatar ? avatar : defaultAvatar} alt="user avatar" />
    </div>
  )
}

export default Avatar
