import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./app.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChatIcon from "@mui/icons-material/Chat";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Navbar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div id="container-main">
        <div>
          <Avatar
            alt="Creative Idea"
            src="https://media.istockphoto.com/vectors/letter-logo-at-colorful-watercolor-flower-vector-id1251394911?k=20&m=1251394911&s=612x612&w=0&h=Pv2O0cPVV0bq8cxi8vkq1TGTH3UFhLHwFBz61VF0ZQU="
            sx={{ width: 46, height: 45, marginTop: "4px", marginRight: "5px" }}
          />
        </div>
        <div style={{ height: "55px", minWidth: "60px" }}>
          <Button
            id="button"
            aria-disabled="false"
            role="button"
            tabindex="0"
            height="55px"
          >
            Home
          </Button>
        </div>
        <div className="searchbar-content">
          <Paper
            component="form"
            id="searchbar"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              height: 50,
              width: "100%",
              marginLeft: "30px",
              borderRadius: "100px",
              backgroundColor: "#ECECEC",
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

        <div id="rightnav-content">
          <div id="notification" className="rightnav">
            <IconButton aria-label={notificationsLabel(100)}>
              <Badge badgeContent={100} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
          </div>
          <div id="inbox" className="rightnav">
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ChatIcon />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="No messages" />
                </ListItemButton>
              </List>
            </Collapse>
          </div>
          <div id="profile-button" className="rightnav">
            <IconButton>
              <Avatar
                alt="profile"
                src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UY1200_CR83,0,630,1200_AL_.jpg"
                sx={{
                  width: 26,
                  height: 25,
                  marginRight: "5px",
                }}
              />
            </IconButton>
          </div>
          <div>
            <Button
              id="settings"
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClicks}
              endIcon={<KeyboardArrowDownIcon />}
            ></Button>
            <StyledMenu
              id="settings-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose}
            >
              <span style={{ marginLeft: "15px" }}> currently in</span>
              <div id="settings-avatar-container">
                <div id="settings-avatar">
                  <Avatar
                    alt="Robert downey jr"
                    src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UY1200_CR83,0,630,1200_AL_.jpg"
                    sx={{
                      width: 46,
                      height: 45,
                      marginTop: "4px",
                    }}
                  />
                </div>
                <div>
                  <h3 className="settings-content">Robert downey jr.</h3>
                  <p className="settings-content">personal</p>
                  <p className="settings-content">robert@gmail.com</p>
                </div>
              </div>
              <div id="settings-your-accounts-container">
                <span style={{ marginLeft: "15px" }}>Your accounts</span>
                <MenuItem onClick={handleClose} disableRipple>
                  Add account
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Convert to business
                </MenuItem>
                \
              </div>
              <div id="settings-more-options-container">
                <span style={{ marginLeft: "15px" }}>More options</span>
                <MenuItem onClick={handleClose} disableRipple>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Turn your hime feed
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Install the windows app
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Get help
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  See terms and privacy
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Log out
                </MenuItem>
              </div>
            </StyledMenu>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
