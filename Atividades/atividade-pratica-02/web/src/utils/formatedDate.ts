export const formatedDate = (date: string) => {
  return new Date(date).toLocaleDateString("pt-BR");
};
