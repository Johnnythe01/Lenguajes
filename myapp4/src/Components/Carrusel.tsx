import Carousel from 'react-bootstrap/Carousel';
import SpidyBlack from "./Spidyblack.jpg";
import MegamanX from "./MegamanX.jpg";
import MONSTERS from "./MONSTERS.png"
import { Container } from 'react-bootstrap';

function Carrusel() {
  return (
    <Container>
          <Carousel className='mx-5'>
            <Carousel.Item>
              <img
                src={SpidyBlack}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={MegamanX}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={MONSTERS}
                alt="First slide"
                className="d-block w-100"
                style={{ width: '500px', height: '700px' }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
  );
}

export default Carrusel;