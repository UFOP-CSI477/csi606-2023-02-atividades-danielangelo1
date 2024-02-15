import { Game } from "../../types/Game";
import FormReviewDialog from "../formReviewDialog/FormReviewDialog";
import "./AddReviewButton.css";

interface GameReviewProps {
  game: Game;
}

const AddReviewButton = ({ game }: GameReviewProps) => {
  return (
    <>
      <FormReviewDialog game={game} />;
    </>
  );
};

export default AddReviewButton;
