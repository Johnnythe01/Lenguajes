import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export interface Raza {
    weight: Weight
    id: string
    name: string
    temperament: string
    origin: string
    description: string
    indoor: number
    alt_names?: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    experimental: number
    suppressed_tail: number
    wikipedia_url?: string
    reference_image_id?: string
}

export interface Weight {
    imperial: string
    metric: string
}

const BreedsDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [breedDetail, setBreedDetail] = useState<Raza[]>([]);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
            headers: {
                "x-api-key": "123456",
            },
        })
            .then((response) => response.json())
            .then((data: Raza) => {
                setBreedDetail([data]);
                fetchImage(data.reference_image_id || '');
            });
    }, [id]);

    const fetchImage = (imageId: string) => {
        fetch(`https://cdn2.thecatapi.com/images/${imageId}.png`, {
            method: 'GET'
        })
            .then((response) => {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.startsWith('image/png')) {
                    setImageUrl(`https://cdn2.thecatapi.com/images/${imageId}.png`);
                } else {
                    setImageUrl(`https://cdn2.thecatapi.com/images/${imageId}.jpg`);
                }
            });
    };

    return (
        <div className="container-fluid">
            <h1 className="position-relative">Detalles de las Razas</h1>
            {breedDetail.map((raza) => (
                <Card className="text-center align-self-baseline" key={raza.id}>
                    <Card.Body >
                        <Card.Title>{raza.name}</Card.Title> {/* Accede a las propiedades de la raza actual */}
                        <Card.Text>
                            <h1>Origin:</h1> {raza.origin}
                        </Card.Text>
                        <Card.Text>
                            <h1>Weight:</h1> ({raza.weight.metric} kg)
                        </Card.Text>
                        <Card.Text>
                            <h1>Temperament:</h1> {raza.temperament}
                        </Card.Text>
                        <Card.Text>
                            <h1>Details:</h1> {raza.description}
                        </Card.Text>
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

export default BreedsDetails;