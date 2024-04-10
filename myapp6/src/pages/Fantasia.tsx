import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export type Armas = Arma[]

export interface Arma {

  nombre: string
  id: string
  disponible: true
  origen: string
  imageUrl: string
  reference_image_id?: string
}

function Fantasia() {
  const [armas, setArmas] = React.useState([] as Armas)

  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/Johnnythe01/Lenguajes/main/myapp6/data.json", {
    })
      .then((response) => response.json())
      .then((data: Armas) => {
        setArmas(data);
      });
  }, []);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
        {armas.map((arma, i) => (

          <Col key={i}>
            <div className="row text-center">
              <Link to={`/Fantasia/${arma.id}`}>
                <Card className="card-body2">
                  <Card.Body>
                    <Card.Title>{arma.nombre}</Card.Title>
                  </Card.Body>
                  {(
                    <Image
                      src={arma.imageUrl}
                      alt={arma.nombre}
                      fluid
                      style={{ maxWidth: '200px', height: '260px', margin: '0 auto' }}
                    />
                  )}
                  <Card.Text>{arma.origen}</Card.Text>
                  <Card.Text>{arma.disponible ? "Disponible" : "No disponible"} </Card.Text>
                  <Card.Text>{arma.id}</Card.Text>
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Fantasia