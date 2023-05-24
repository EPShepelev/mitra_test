import React from 'react'
import Card from 'react-bootstrap/Card';

const Comment = ({email, text}) => {
  return (
    <>
      <Card className="mb-1">
      <Card.Title>{email}</Card.Title>
      <Card.Body>{text}</Card.Body>
    </Card>
    </>
  )
}

export default Comment
