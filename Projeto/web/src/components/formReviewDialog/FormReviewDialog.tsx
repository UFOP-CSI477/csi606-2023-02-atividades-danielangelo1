import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useReview } from "../../hooks/useReview";
import { Game } from "../../types/Game";

export default function FormReviewDialog({ game }: { game: Game }) {
  const [open, setOpen] = React.useState(false);
  const { createReview } = useReview();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Avaliar Jogo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.currentTarget;
            const review = form.review.value;
            const rating = +form.rating.value;
            createReview({
              id: "",
              game_id: game.id,
              user_id: "1",
              review,
              rating,
              created_at: "",
              updated_at: "",
            });

            handleClose();
          },
        }}
      >
        <DialogTitle>Avalie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qual a sua avaliação para este jogo?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="review"
            name="review"
            label="Avaliação"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* rating em estrelas com select */}
          <TextField
            required
            margin="dense"
            id="rating"
            name="rating"
            label="Nota"
            fullWidth
            variant="standard"
            select
            defaultValue={5}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
