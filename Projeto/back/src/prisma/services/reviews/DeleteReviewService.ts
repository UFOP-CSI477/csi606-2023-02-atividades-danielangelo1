import prismaClient from "../..";

interface deleteReviewProps {
  id: string;
}

class DeleteReviewService {
  async handle({ id }: deleteReviewProps) {
    if (!id) {
      throw new Error("Preencha todos os campos");
    }

    const review = await prismaClient.gameReview.delete({
      where: {
        id,
      },
    });

    return { message: "Review deletada com sucesso!" };
  }
}

export { DeleteReviewService };
