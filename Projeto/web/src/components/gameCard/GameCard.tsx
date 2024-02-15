import "./GameCard.css";
import { Game } from "../../types/Game";
import AddReviewButton from "../addReviewButton/AddReviewButton";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <div className="game-card">
        <h2>{game.name}</h2>
        <img
          src="https://images.placeholders.dev/?width=200&height=200&text=Made%20with%20placeholders.dev&bgColor=%23f7f6f6&textColor=%236d6e71
 "
          alt="placeholder imagem do jogo"
        />
        <p>{game.genre}</p>
        <p>{game.year}</p>
        <p>{game.publisher}</p>
        <AddReviewButton gameId={game.id} />
      </div>
    </>
  );
};

export default GameCard;
