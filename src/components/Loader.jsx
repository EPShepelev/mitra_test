import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="info" />
    </div>
  )
}

export default Loader
