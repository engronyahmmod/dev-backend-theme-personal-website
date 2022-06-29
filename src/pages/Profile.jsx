import React from "react";
import {Box, Typography} from '@mui/material'
import { Outlet } from "react-router-dom";

const Profile = () => {
    const viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    return(
        <Box sx={{display: 'flex', mt: 4}}>
            <Box sx={{flexBasis: '20%', backgroundColor: 'primary.main', minHeight: viewportHeight - 120, opacity: .2}}>
                {/* LEFT SIDE SIDEBAR */}
            </Box>
            <Box sx={{flexBasis: '80%'}}>
                {/* Right side main page */}
                <Typography>Profile Page</Typography>
                <Box>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default Profile;