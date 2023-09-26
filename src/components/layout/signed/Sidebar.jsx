import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar as SidebarPS, Menu, SubMenu, MenuItem, sidebarClasses, menuClasses } from "react-pro-sidebar";

import { tokens } from "../../../common/hooks/Theme";
import appSlice from "../../../slices/app";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";

import avatar from "../../../assets/images/photo/team1.jpg";

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
  const [broken, setBroken] = useState(false);

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
        onBreakPoint={setBroken}
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
                  <Typography variant="h3" fontWeight={700} color={colors.grey[100]}>
                    OTM
                  </Typography>
                  <IconButton sx={{ color: colors.grey[100] }} onClick={setIsCollapsed}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!sidebar.isCollapsed && (
              <Box mb="25px">
                {/* <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    src={avatar}
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box> */}
                <Box textAlign="center">
                  <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                    Satria Nusa
                  </Typography>
                  <Typography variant="body2" color={colors.greenAccent[500]} fontWeight={600} letterSpacing="0.5px">
                    System Administrator
                  </Typography>
                </Box>
              </Box>
            )}

            {/* MENU ITEMS */}
            <Box paddingLeft={sidebar.isCollapsed ? undefined : "0%"}>
              <Item
                title="Dashboard"
                to="/wb"
                icon={<HomeOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />
              <Item
                title="Transaksi WB"
                to="#"
                icon={<ReceiptOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />
              <Item
                title="Approval Request"
                to="#"
                icon={<ContactsOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />
              <Item
                title="Laporan"
                to="#"
                icon={<BarChartOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />

              <SubMenu label="Master Data" icon={<HomeOutlinedIcon />}>
                <Item
                  title="Provices"
                  to="md/provinces"
                  icon={<ArrowRightOutlinedIcon />}
                  selected={sidebar.selected}
                  setSelected={setSelected}
                />
                <Item
                  title="City"
                  to="md/cities"
                  icon={<ArrowRightOutlinedIcon />}
                  selected={sidebar.selected}
                  setSelected={setSelected}
                />
              </SubMenu>

              <Item
                title="User Management"
                to="#"
                icon={<PeopleOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />
              <Item
                title="Administrasi"
                to="#"
                icon={<DisplaySettingsOutlinedIcon />}
                selected={sidebar.selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </div>
      </SidebarPS>
    </Box>
  );
};

export default Sidebar;
