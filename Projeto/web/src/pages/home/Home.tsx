import { useEffect, useState } from "react";
import GameCard from "../../components/gameCard/GameCard";
import { useGame } from "../../hooks/useGame";
import { Game } from "../../types/Game";
import "./Home.css";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { getGames } = useGame();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await getGames();
      if (response.error) {
        console.log("Error");
      } else {
        setGames(response);
      }
    };
    fetchGames();
  }, []);

  return (
    <>
      <div className="game-card-container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default Home;
