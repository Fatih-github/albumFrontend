import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@material-ui/core";

const AlbumForm = ({ album, onSubmit, submitLabel, onRemove }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: album
      ? album
      : {
          name: "",
          artist: "",
          imageUrl: "",
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Naam"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Artiest"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Coverafbeelding"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" type="submit" color="primary">
            {submitLabel}
          </Button>
          {onRemove && (
            <Button
              variant="outlined"
              type="button"
              color="secondary"
              onClick={onRemove}
            >
              Verwijder
            </Button>
          )}
        </CardActions>
      </Card>
    </form>
  );
};

export default AlbumForm;
