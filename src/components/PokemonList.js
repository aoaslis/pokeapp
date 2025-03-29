import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Spinner } from 'react-bootstrap';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(response => {
                setPokemons(response.data.results); // Accede a 'results' para obtener los pokemones
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center">
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Pokémon List</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{pokemon.name}</td>
                            <td>
                                <Button variant="info" href={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`} target="_blank">Details</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PokemonList;
