import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CityProps } from "../../pages/cidades/Cidades";

interface CityDialogProps {
  cityToEdit: CityProps | null;
  onSave: (city: CityProps) => void;
  onClose: () => void;
}

const CityDialog = ({ cityToEdit, onSave, onClose }: CityDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [cityName, setCityName] = React.useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = {
      name: cityName,
      estado_id: 0, // Certifique-se de tratar essa parte conforme necessário
      _id: cityToEdit?._id ? cityToEdit._id : undefined,
    };
    onSave(city);
    handleClose();
  };

  React.useEffect(() => {
    if (cityToEdit) {
      setCityName(cityToEdit.name); // Aqui deve ser o nome, não o _id
      setOpen(true);
    }
  }, [cityToEdit]);

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Adicionar cidade
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Criar Cidade</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="cidade"
            name="cidade"
            label="Nome da cidade"
            type="text"
            fullWidth
            variant="standard"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Adicionar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CityDialog;
