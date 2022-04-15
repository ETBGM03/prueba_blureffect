import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { pages } from "../helpers/linksNav";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box
            component="img"
            sx={{
              height: 64,
              borderRadius: "50%",
            }}
            alt="Your logo."
            src="https://thumbs.dreamstime.com/b/icono-del-libro-de-la-receta-concepto-moda-logotipo-en-el-backg-blanco-131157627.jpg"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ path, id, name }) => (
              <Button key={id} sx={{ my: 2, color: "#fff", display: "block" }}>
                <Link style={{ textDecoration: "none" }} key={id} to={path}>
                  {name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;