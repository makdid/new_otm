import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import TodayDate from "./button/TodayDate";
// import { useTheme } from "styled-components";
import { blue } from "@mui/material/colors";
import Yesterday from "./button/Yesterday";
import LastSeven from "./button/LastSeven";
import Last30 from "./button/Last30";
import ThisMonth from "./button/ThisMonth";
import LastMonth from "./button/LastMonth";
import CustomRange from "./button/CustomRange";


const buttons = [
  <TodayDate key="one"/>,
  <Yesterday key="two"/>,
  <LastSeven key="three"/>,
  <Last30 key="four"/>,
  <ThisMonth key="five"/>,
  <LastMonth key="6"/>,
  <CustomRange key="7"/>
]

export default function ButtonDrop() {
  // const theme = useTheme()
  // const colors
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${buttons[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment sx={{
        
      }}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"


      >
        <Button
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          sx={{
            backgroundColor: blue[700],
            color: "white",
          }}
          onClick={() => {
            handleClick();
            handleToggle();
          }}
        >
          {buttons[selectedIndex]}
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              background: "blue",
              color: 'red',
              transformOrigin:
                placement === "bottom" ? "right top" : "right bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {buttons.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}