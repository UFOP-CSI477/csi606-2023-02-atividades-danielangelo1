import { useReview } from "../../hooks/useReview";

interface deleteReviewButtonProps {
  id: string;
}

const DeleteReviewButton = ({ id }: deleteReviewButtonProps) => {
  const { deleteReview } = useReview();

  const handleClick = () => {
    deleteReview(id);
    alert("Review deletada com sucesso!");
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: "#f44336" }}>
      Deletar Review
    </button>
  );
};

export default DeleteReviewButton;
