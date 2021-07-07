import {Button, Grid} from "@material-ui/core";
import {AlbumCard} from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";
import { Link } from "react-router-dom";

export function AlbumOverview() {
    const albums = useAlbums();

    return (
        <Grid container spacing={3}>
            {albums.map(album => (
                <Grid item key={album.id}>
                    <AlbumCard id={album.id} title={album.title} artist={album.artist} name={album.name} imageurl={album.imageurl}/>
                </Grid>
            ))}
            <Grid item key={"new"}>
                <Button component={Link} to="/new" size="large" variant={"contained"} color="primary">
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}