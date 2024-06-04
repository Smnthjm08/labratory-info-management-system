// AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomSidebar from '../global/SideBar'; // Adjust the import path as necessary
import { Box } from '@mui/material';

const AdminLayout = () => {
    return (
        <Box display="flex">
            <CustomSidebar />
            <Box component="main" flexGrow={1} p={3}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;
