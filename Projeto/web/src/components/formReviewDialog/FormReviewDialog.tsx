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
import { MenuItem } from "@mui/material";

export default function FormReviewDialog({ game }: { game: Game }) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(5);
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
            alert("Avaliação enviada com sucesso!");

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
            value={rating}
            onChange={(event) => setRating(+event.target.value)}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
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
