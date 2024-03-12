import Carousel from 'react-bootstrap/Carousel';
import paisaje1 from "./paisaje1.jpg";
import paisaje2 from "./paisaje2.jpg";
import paisaje3 from "./paisaje3.jpg"
import { Container } from 'react-bootstrap';

function Carrusel() {
  return (
    <Container>
          <Carousel className='mx-5'>
            <Carousel.Item>
              <img
                src={paisaje1}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>La naturaleza está llamando.</h3>
                <p>Explora el entorno que te rodea, conoce grandes lagos, increibles parajes.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={paisaje2}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>Infinitas posibilidades</h3>
                <p>Este texto apenas se ve, HeHeHe</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={paisaje3}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>Que bonito verdad?</h3>
                <p>En tu reflejo está la respuesta.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
  );
}

export default Carrusel;