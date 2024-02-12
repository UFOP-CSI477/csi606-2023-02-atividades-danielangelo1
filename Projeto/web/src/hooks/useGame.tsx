import {
  createGameService,
  deleteGameService,
  getAllGamesService,
} from "../services/GameService";
import { Game } from "../types/Game";

export const useGame = () => {
  const getGames = async () => {
    const response = await getAllGamesService();

    if (!response) {
      return { error: "Error" };
    }

    return response;
  };

  const createGame = async (game: Game) => {
    const response = await createGameService(game);

    if (!response) {
      return { error: "Error" };
    }

    return response;
  };

  const deleteGame = async (id: string) => {
    const response = await deleteGameService(id);

    if (!response) {
      return { error: "Error" };
    }

    return response;
  };
  return { getGames, createGame, deleteGame };
};
