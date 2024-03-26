import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export type Razas = Raza[]

export interface Raza {
    weight: Weight
    id: string
    name: string
    cfa_url?: string
    vetstreet_url?: string
    vcahospitals_url?: string
    temperament: string
    origin: string
    country_codes: string
    country_code: string
    description: string
    life_span: string
    indoor: number
    lap?: number
    alt_names?: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    grooming: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    vocalisation: number
    experimental: number
    hairless: number
    natural: number
    rare: number
    rex: number
    suppressed_tail: number
    short_legs: number
    wikipedia_url?: string
    hypoallergenic: number
    reference_image_id?: string
    cat_friendly?: number
    bidability?: number
}

export interface Weight {
    imperial: string
    metric: string
}

function Breeds() {
    const [razas, setRazas] = React.useState([] as Razas)

    React.useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                "x-api.key": "live_mcTVh4fpn2L66xOCrz41QwgJdWazS7V74N62rI2Rd21cNDvDaT1m974KaXgNHjNl",
            },
        })
            .then((response) => response.json())
            .then((data: Razas) => {
                setRazas(data);
            });
    }, []);

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                {razas.map((raza, i) => (
                    <Col key={i}>
                        <Card className="card-body2">
                            <Card.Body>
                                <Card.Title>{raza.name}</Card.Title>
                                <Card.Text>{raza.origin}</Card.Text>
                            </Card.Body>
                            {raza.reference_image_id && (
                                <Image
                                    src={`https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`}
                                    alt={raza.name}
                                    fluid
                                    style={{ maxWidth: '200px', height: 'auto' }}
                                />
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Breeds

/*
<div>
<h1 className="position-relative">Razas</h1>
<div className="d-flex justify-content-center">
<Form.Select className="w-50 " value={selectRazaId} onChange={handleRazaChange}>
  <option value="">Seleccione una raza</option>

  {razas.map((raza) => (
    <option value={raza.id}>
      {raza.name}
    </option>
  ))}
</Form.Select >
</div>
{selectRazaId && <RazaDetalles id={selectRazaId} />}
*/