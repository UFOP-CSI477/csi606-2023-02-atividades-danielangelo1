import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { BASEAPI_URL } from "../../utils/API";
import StateItem from "../../components/stateItem/StateItem";
import StateDialog from "../../components/stateDialog/StateDialog";

export interface IState {
  name: string;
  uf: string;
  _id?: string;
}

const Estados = () => {
  const [states, setStates] = React.useState<IState[]>([]);
  const [editingState, setEditingState] = React.useState<IState | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    fetchStates();
    setIsDialogOpen(true);
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get(`${BASEAPI_URL}/states`);
      setStates(response.data);
    } catch (error) {
      console.error("Error na requisição", error);
    }
  };

  const handleEditState = (state: IState) => {
    setEditingState(state);
    setIsDialogOpen(true);
  };

  const handleDeleteState = async (_id: string) => {
    try {
      await axios.delete(`${BASEAPI_URL}/states/${_id}`);
      setStates(states.filter((state) => state._id !== _id));
      alert("Estado deletado");
    } catch (error) {
      console.error("Error ao deletar estado", error);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(true);
    setEditingState(null);
  };

  const handleSaveState = async (state: IState) => {
    try {
      if (state._id) {
        const response = await axios.put(
          `${BASEAPI_URL}/states/${state._id}`,
          state,
        );

        setStates(
          states.map((state) =>
            state._id === response.data._id ? response.data : state,
          ),
        );
        alert("Estado atualizado");
      } else {
        const response = await axios.post(`${BASEAPI_URL}/states`, state);
        setStates([...states, response.data]);
        alert("Estado criado");
      }
      handleCloseDialog();
    } catch (error) {
      console.error("Error ao salvar estado", error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>Estados</h1>
        <ul>
          {states.map((state) => (
            <StateItem
              key={state._id}
              name={state.name}
              uf={state.uf}
              onEdit={() => handleEditState(state)}
              onDelete={() => state._id && handleDeleteState(state._id)}
            />
          ))}
        </ul>
        {isDialogOpen && (
          <StateDialog
            stateToEdit={editingState}
            onSave={handleSaveState}
            onClose={handleCloseDialog}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Estados;
