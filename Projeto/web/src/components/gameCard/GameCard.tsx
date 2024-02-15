import "./GameCard.css";
import { Game } from "../../types/Game";
import AddReviewButton from "../addReviewButton/AddReviewButton";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  return (
    <>
      <div className="game-card">
        <div className="clickable" onClick={handleClick}>
          <h2>{game.name}</h2>
          <img
            src="https://images.placeholders.dev/?width=200&height=200&text=Made%20with%20placeholders.dev&bgColor=%23f7f6f6&textColor=%236d6e71
 "
            alt="placeholder imagem do jogo"
          />
          <p>{game.genre}</p>
          <p>{game.year}</p>
          <p>{game.publisher}</p>
        </div>
        <AddReviewButton game={game} />
      </div>
    </>
  );
};

export default GameCard;
