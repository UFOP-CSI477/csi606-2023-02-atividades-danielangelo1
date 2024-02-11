import { Game } from "../types/Game";
import { api } from "./api";

const enum Endpoints{
geral = "/game"
}

export const createGameService = async (game: Game) =>{
  try{
    const response = await api.post(Endpoints.geral, game)
    return response.data
  }catch(err){
    console.error(err)
  }
}

export const getAllGamesService = async () =>{
  try{
    const response = await api.get(Endpoints.geral)
    return response.data
  }
  catch(err){
    console.error(err)
  }
}

export const deleteGameService = async (id: string) =>{
  try{
    const response = await api.delete(`${Endpoints.geral}/${id}`)
    return response.data
  }catch(err){
    console.error(err)
  }
}