import Sidebar from "../../components/sidebar/sidebar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Product.scss";
import TableColumnPinning from "../../components/tab/tab";

export default function Product() {
  return (
    <div className="productWrapper">
      <div className="sideBar">
        <Sidebar />
      </div>

      <div className="productSide">
        <div className="navBarProduct">
          <Box style={{ flexGrow: 1 }} className="boxWraper">
            <AppBar position="static" style={{ backgroundColor: "#FAFAFB" }}>
              <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },
                    color: "black",
                  }}
                >
                  Products List
                </Typography>
                <div className="basicButtons" style={{ margin: "20px" }}>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained">+ Add New</Button>
                  </Stack>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div className="tableProducts">
          <TableColumnPinning />
        </div>
      </div>
    </div>
  );
}
