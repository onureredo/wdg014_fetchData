import axios from 'axios';
import { useState, useEffect } from 'react';

function Async() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon2');
        setPokemons(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.response.data);
        setIsLoading(false);
      } finally {
        console.log('You will see this in any condition John!!!');
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Async/Await</h2>
      <ol>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Async;
