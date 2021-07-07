import logo from '../logo.svg'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const AlbumCard = (props) => {
    return (
        <Card>
            <CardActionArea component={Link} to={`/${props.id}`}>
                <CardHeader title={props.title} subheader={props.artist}/>
                <CardMedia image={logo} title={props.title}/>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                        This is a test description of the album
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}