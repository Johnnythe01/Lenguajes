import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Raza} from '../pages/Breeds'

interface CardsProps {
  raza: Raza;
}

const Cards: React.FC<CardsProps> = ({ raza }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`} />
      <Card.Body>
      <Card.Title>{raza.name}</Card.Title>
      <Card.Text>{raza.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Temperament: {raza.temperament}</ListGroup.Item>
        <ListGroup.Item>Origin: {raza.origin}</ListGroup.Item>
        <ListGroup.Item>Life Span: {raza.life_span}</ListGroup.Item>
      </ListGroup>
      <Card.Body> 
      <Card.Link href={raza.wikipedia_url}>Wikipedia Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;