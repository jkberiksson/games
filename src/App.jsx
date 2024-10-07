import { useState, useEffect } from 'react';

import Games from './assets/components/Games';
import Header from './assets/components/Header';
import Title from './assets/components/Title';

export default function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const popGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.rawg.io/api/games?key=${api_key}&dates=2024-01-01,2024-12-31`);

        if (!response.ok) {
          throw new Error('An error occurred. Try again!');
        }

        const data = await response.json();
        setGames(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    popGames();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = games.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [search, games]);

  return (
    <div className='text-[#eee] max-w-[1400px] mx-auto px-3'>
      <Header search={search} setSearch={setSearch} />
      <Title title='Games 2024' />
      <Games games={filteredGames} loading={loading} />
    </div>
  );
}
