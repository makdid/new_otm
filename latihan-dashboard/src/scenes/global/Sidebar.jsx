import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100],}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
              <Box display="flex" justifyContent="center" alignItems="center">
                <div className="profile.box">
                  <img
                    className="profile-picture"
                    src="../../assets/otmlogo.png"
                    alt="Profile"
                    width="80px"
                    height="100%"
                  />
                </div>
              </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <SubMenu
              title="Dashboard"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
            <Item
              title="Work Order"
              to="/"
              icon={<ListAltOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Preventive Maintenance(PM)"
              to="/date-time"
              icon={<ConstructionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             </SubMenu>
            <SubMenu
              title="Work Orders"
              to=""
              icon={<BallotOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            >
            <Item
              title="All Work Orders"
              to="/province"
              icon={<AssignmentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Not Started Work Orders"
              to="/invoices"
              icon={<ContentPasteSearchOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Started Work Orders"
              to="/line"
              icon={<ContentPasteGoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Completed / Need Feedback"
              to="/faq"
              icon={<AssignmentLateOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Finished Work Orders"
              to="/bar"
              icon={<AssignmentTurnedInOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              title="Preventive Maintenance(PM)"
              to=""
              icon={<ConstructionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              <Item
              title="All PM(list)"
              to="/pie"
              icon={<ReceiptLongOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PM Scheddules"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <Item
              title="Project"
              to="/form"
              icon={<WorkHistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Daily Report"
              to="/geography"
              icon={<FactCheckOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu
              title="Assets"
              to=""
              icon={<DiamondOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
            <Item
              title="List Of Asset"
              to=""
              icon={<HomeWorkOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="List Of Certificate"
              to=""
              icon={<WorkspacePremiumOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
              title="Spareparts"
              to=""
              icon={<PlumbingOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
            <Item
              title="List Of Spareparts (Inventory)"
              to=""
              icon={<PlaylistAddCheckCircleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
