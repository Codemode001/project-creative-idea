import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfilePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Container>
        <Stack style={{ alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/1200px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
            style={{ width: "150px", height: "150px" }}
          />
          <h1 style={{ fontFamily: " Neue Helvetica" }}>Robert Downey Jr.</h1>
          <span style={{ color: "gray" }}>@ironman</span>
          <div>
            <Button
              variant="contained"
              component="span"
              style={{ marginRight: "1rem", marginTop: "1rem" }}
            >
              Share
            </Button>
            <Button
              variant="contained"
              component="span"
              style={{ marginTop: "1rem" }}
            >
              Edit Profile
            </Button>
          </div>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div style={{ marginTop: "2rem", marginLeft: "30rem" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Created" {...a11yProps(0)} />
                <Tab label="Saved" {...a11yProps(1)} />
              </Tabs>
            </div>
          </Box>
          <div id="add-sorting-container">
            <IconButton style={{ marginRight: "67rem", color: "black" }}>
              <SortIcon />
            </IconButton>
            <IconButton style={{ color: "black" }}>
              <AddIcon />
            </IconButton>
          </div>
          <div
            style={{
              marginLeft: "25rem",
            }}
          >
            <TabPanel value={value} index={0}>
              <h1>No created Pins yet</h1>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1>No created Pins yet</h1>
            </TabPanel>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
