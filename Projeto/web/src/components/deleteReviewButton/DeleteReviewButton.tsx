import { useReview } from "../../hooks/useReview";

interface deleteReviewButtonProps {
  id: string;
  onDeleteSuccess: () => void;
}

const DeleteReviewButton = ({
  id,
  onDeleteSuccess,
}: deleteReviewButtonProps) => {
  const { deleteReview } = useReview();

  const handleClick = () => {
    deleteReview(id);
    onDeleteSuccess();
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: "#f44336" }}>
      Deletar Review
    </button>
  );
};

export default DeleteReviewButton;
