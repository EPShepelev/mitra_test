import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostCard = ({title, text }) => {
  return (
    <div className='postsList'>
      <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Комментарии</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PostCard
