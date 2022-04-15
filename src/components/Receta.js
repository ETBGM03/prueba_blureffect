import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Receta = ({ id, shorName, urlImg }) => {
  return (
    <Card sx={{ maxWidth: 320, margin: 3 }} key={id}>
      <CardHeader title={shorName} />
      <CardMedia
        component="img"
        height="194"
        image={urlImg}
        alt={`url de la imagen de la receta ${shorName}`}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link style={{ textDecoration: "none" }} to={`/receta/${id}`}>
            <Button variant="contained">Ver Detalle Receta</Button>
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export { Receta };
