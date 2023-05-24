import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Card >
    <Card.Body>
      <Card.Title>Шепелев Евгений</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Frontend-разработчик</Card.Subtitle>
      <Card.Text>
        Живу в Санкт-Петербурге. Увлекаюсь горными лыжами, люблю кататься на велосипеде в солнечную погоду, на машине - в дождливую. 
        Осваиваю гитару, танцую танго. Имею опыт работы со следующими технологиями:
      </Card.Text>
      <ListGroup>
        <ListGroup.Item>HTML (PUG)</ListGroup.Item>
        <ListGroup.Item>CSS (SCSS, LESS)</ListGroup.Item>
        <ListGroup.Item>jQuery</ListGroup.Item>
        <ListGroup.Item>JavaScript (ES6)</ListGroup.Item>
        <ListGroup.Item>TypeScript </ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Redux</ListGroup.Item>
        <ListGroup.Item>Webpack, Gulp</ListGroup.Item>
    </ListGroup>
    <Card.Text className="mt-2">Тут можно посмотреть примеры моего кода:</Card.Text>
      <Card.Link href="https://github.com/EPShepelev" target="_blank">GitHub</Card.Link>
      <Card.Link href="https://www.codewars.com/users/EPShepelev" target="_blank">Codewars</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default About


