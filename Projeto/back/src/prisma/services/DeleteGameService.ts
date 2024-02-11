import prismaClient from "..";

interface delateGameProps {
  id: string;
}

class DeleteGameService{
  async delete({ id }: delateGameProps) {
if(!id){
  throw new Error("Preencha todos os campos")
}

const game = await prismaClient.game.delete({
  where: {
    id
  }
})

return game;
  }
}

export { DeleteGameService }