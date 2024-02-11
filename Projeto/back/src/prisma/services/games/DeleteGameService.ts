import prismaClient from "../../index";

interface delateGameProps {
  id: string;
}

class DeleteGameService{
  async handle({ id }: delateGameProps) {
if(!id){
  throw new Error("Preencha todos os campos")
}

const game = await prismaClient.game.delete({
  where: {
    id
  }
})

return{ message: "Game deletado com sucesso!"}
  }
}

export { DeleteGameService }