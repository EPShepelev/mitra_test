import React from 'react'
import Card from 'react-bootstrap/Card';

const Comment = ({email, text}) => {
  return (
    <Card className="mb-1">
        <Card.Body>
            <Card.Title>{email}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Comment
