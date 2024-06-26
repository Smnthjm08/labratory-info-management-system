import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Groups2Icon from "@mui/icons-material/Groups2";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const CustomSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div>
            <Box
                sx={{
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[900]} !important`,
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
                                    color="aliceblue"
                                >
                                    <Typography variant="h3" color={colors.grey[100]} fontSize={"30px"}>
                                        ADMIN
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                            <Item
                                title="Dashboard"
                                to="/admin"
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                External
                            </Typography>
                            <Item
                                title="New Patient"
                                to="/admin/new-patient"
                                icon={<PersonOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Item
                                title="Appointment"
                                to="/admin/appointments"
                                icon={<CalendarTodayIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Visits"
                                to="/admin/visits"
                                icon={<VisibilityIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Item
                                title="Records"
                                to="/Records"
                                icon={<SummarizeIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />



                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Lab
                            </Typography>

                            <Item
                                title="New User"
                                to="/admin/new-user"
                                icon={<PersonAddIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Manage Team"
                                to="/admin/manage-team"
                                icon={<Groups2Icon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Digital Signatures"
                                to="/admin/digital-sign"
                                icon={<ContactsOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />


                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                More
                            </Typography>

                            <Item
                                title="My Profile"
                                to="/myprofile"
                                icon={<AccountCircleIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Item
                                title="Contact"
                                to="/Contact"
                                icon={<BusinessIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                            <Item
                                title="FAQ Page"
                                to="/admin/faq"
                                icon={<HelpOutlineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />


                        </Box>
                    </Menu>
                </ProSidebar>
            </Box >
        </div>


    );
};

export default CustomSidebar;
