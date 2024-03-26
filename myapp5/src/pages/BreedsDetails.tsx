import React, { useState, useEffect } from 'react';
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


const BreedsDetails = ({ id }: { id: string }) => {
    const [breedDetail, setBreedDetail] = useState<BreedsDetails[]>([]);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    // fetch para la imagen 
    useEffect(() => {
        fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
            headers: {
                "x-api-key": "123456",
            },
        })
            .then((response) => response.json())
            .then((data: BreedsDetails) => {
                setBreedDetail([data]);
                fetchImage(data.reference_image_id);
            });
    }, [id]);

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

            <div className="container-fluid">
                <h1 className="position-relative">Detalles Raza</h1>
                {detalleRaza.map((raza) => (
                    <Card className="text-center align-self-baseline" key={raza.id}>
                        <Card.Body >
                            <Card.Title>{raza.name}</Card.Title>
                            <Card.Text>
                                <h1>Bred for: {raza.life_span}</h1>
                            </Card.Text>
                            <Card.Text>
                                <h1>Weight:</h1> {raza.weight.imperial} lbs ({raza.weight.metric} kg)
                            </Card.Text>
                            <Card.Text>
                                <h1>Life span:</h1> {raza.life_span}
                            </Card.Text>
                            <Card.Text>
                                <h1>Temperament:</h1> {raza.temperament}
                            </Card.Text>
                            <Card.Text>
                                <h1>Details:</h1> {raza.description}
                            </Card.Text>
                            <Card.Img />
                            {imageUrl && (
                                <Image className="img-fluid"
                                    src={imageUrl}
                                    alt={raza.name}
                                    fluid
                                />
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    };
}

export default BreedsDetails