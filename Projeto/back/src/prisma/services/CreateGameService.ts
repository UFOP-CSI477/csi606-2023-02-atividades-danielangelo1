import prismaClient from "..";

interface createGameProps {
  name: string;
  year: string;
  genre: string;
  publisher: string;
}

class CreateGameService {
  async handle({ name, genre, year, publisher }: createGameProps) {
    if (!name || !publisher) {
      throw new Error("Preencha todos os campos");
    }

    const game = await prismaClient.game.create({
      data: {
        name,
        genre,
        year,
        publisher,
      },
    });

    return game;
  }
}

export { CreateGameService };
