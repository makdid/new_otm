import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, useTheme } from "@mui/material";
import { Sidebar as SidebarPS, Menu, SubMenu, MenuItem, menuClasses } from "react-pro-sidebar";

import { tokens } from "../../../common/hooks/Theme";
import appSlice from "../../../slices/app";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
// pakai rgba agar bisa set transparansi
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const { setSidebarStatus } = appSlice.actions;

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon} component={<Link to={to} />}>
      {title}
    </MenuItem>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { sidebar } = useSelector((state) => state.app);

  const [toggled, setToggled] = useState(false);
  // const [broken, setBroken] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
      // color: colors.grey[100],
      // padding: "5px 35px 5px 20px",
    },
    icon: {
      color: themes[theme.palette.mode].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme.palette.mode].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? hexToRgba(themes[theme.palette.mode].menu.menuContent, 1) : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme.palette.mode].menu.disabled.color,
      },
      [`&.${menuClasses.active}`]: {
        color: colors.grey[100],
        fontWeight: 600,
      },
      "&:hover": {
        backgroundColor: hexToRgba(themes[theme.palette.mode].menu.hover.backgroundColor, 1),
        color: themes[theme.palette.mode].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  const setIsCollapsed = () => {
    dispatch(setSidebarStatus({ isCollapsed: !sidebar.isCollapsed }));
  };

  const setSelected = (title) => {
    dispatch(setSidebarStatus({ selected: title }));
  };

  return (
    <Box display="flex" height="100%">
      <SidebarPS
        collapsed={sidebar.isCollapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        // onBreakPoint={setBroken}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme.palette.mode].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme.palette.mode].sidebar.color,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Menu iconShape="square" menuItemStyles={menuItemStyles}>
            {/* LOGO AND MENU ICON */}
            <MenuItem icon={sidebar.isCollapsed ? <MenuOutlinedIcon /> : undefined} onClick={setIsCollapsed}>
              {!sidebar.isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                  <div className="profile.box">
                  <img
                    className="profile-picture"
                    src="../../assets/otmlogo.png"
                    alt="Profile"
                    width="80px"
                    height="100%"
                  />
                </div>
                  <IconButton sx={{ color: colors.grey[100] }} onClick={setIsCollapsed}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {/* MENU ITEMS */}
            <Box paddingLeft={sidebar.isCollapsed ? undefined : "0%"}>
             <SubMenu
              label="Dashboard"
              icon={<HomeOutlinedIcon />}
            >
            <Item
              title="Dashboard Work Order"
              to="/otm/dashboard-wo"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard Preventive Maintenance(PM)"
              to="/otm/dashboard-pm"
              icon={<ChevronRightOutlinedIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
             </SubMenu>
            <SubMenu
              label="Work Orders"
              icon={<BallotOutlinedIcon/>}
            >
            <Item
              title="All Work Orders"
              to="/otm/all-wo"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Not Started Work Orders"
              to="otm/not-started-wo"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Started Work Orders"
              to="/otm/started-wo"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Completed / Need Feedback"
              to="/otm/completed"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Finished Work Orders"
              to="/otm/finished-wo"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              label="Preventive Maintenance(PM)"
              icon={<ConstructionOutlinedIcon />}
            >
              <Item
              title="All PM(list)"
              to="/otm/all-pm"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="PM Scheddules"
              to="/otm/pm-schedules"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <Item
              title="Project"
              to="/otm/projects"
              icon={<WorkHistoryOutlinedIcon />}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Daily Report"
              to="/otm/reports"
              icon={<FactCheckOutlinedIcon />}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <SubMenu
              label="Assets"
              icon={<DiamondOutlinedIcon />}
            >
            <Item
              title="List Of Asset"
              to="/otm/list-asset"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="List Of Certificate"
              to="/otm/list-certificate"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              label="Spareparts"
              icon={<PlumbingOutlinedIcon />}
            >
            <Item
              title="List Of Spareparts (Inventory)"
              to="/otm/list-spareparts"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              label="Contacts"
              icon={<PersonOutlineOutlinedIcon />}
            >
            <Item
              title="Vendor/Suppliers"
              to="/otm/vendor"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Person"
              to="/otm/contact-person"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              label="Setting"
              icon={<SettingsOutlinedIcon />}
            >
            <Item
              title="Year Doc"
              to="/otm/year"
              icon={<ArrowRightIcon/>}
              selected={sidebar.selected}
              setSelected={setSelected}
            />
            </SubMenu>
            </Box>
          </Menu>
        </div>
      </SidebarPS>
    </Box>
  );
};

export default Sidebar;
