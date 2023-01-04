import React from 'react'
import { Box, List } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material'


function SideBarItem(props) {
    return <Button sx={{ marginBottom: "8px" }} fullWidth component={NavLink} {...props} />
}

export default function SideBar() {
    const location = useLocation()

    function setStyle(pathname) {
        return location.pathname === pathname ? "contained" : "outlined"
    }

    return (
        <Box sx={{ padding: "8px", overflow: 'auto' }} maxHeight='90vh'>
            <SideBarItem to="/committer" variant={setStyle("/committer")} startIcon={<IosShareOutlinedIcon />}>创建提单</SideBarItem>

            <SideBarItem to="/assigned" variant={setStyle("/assigned")} startIcon={<MarkEmailUnreadOutlinedIcon />}>提到我的</SideBarItem>

            <SideBarItem to="/my-commits" variant={setStyle("/my-commits")} startIcon={<Inventory2OutlinedIcon />}>我的提交</SideBarItem>
        </Box >
    )
}
