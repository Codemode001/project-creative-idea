import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./app.css";
import Button from "@mui/material/Button";

export default function Navbar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <div>
        <div id="buttonContainer" style={{ height: "48px", minWidth: "60px" }}>
          <Button
            variant="contained"
            aria-disabled="false"
            role="button"
            tabindex="0"
            height="48px"
          >
            Home
          </Button>
        </div>
        <div id="paper">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 800,
              height: 50,
              marginLeft: "10rem",
              borderRadius: "100px",
            }}
          >
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 2 }} orientation="vertical" />

            <div>
              <FormControl
                id="control"
                sx={{
                  m: 1,
                  minWidth: 120,
                }}
              >
                <InputLabel>Your pins</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="Age"
                >
                  <MenuItem value="">
                    <h3>All Pins</h3>
                  </MenuItem>
                  <MenuItem value={10}>Videos</MenuItem>
                  <MenuItem value={21}>People</MenuItem>
                  <MenuItem value={22}>Boards</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}
