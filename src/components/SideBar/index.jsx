import React, { useState } from 'react'
import { Box, List } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SideBarItem from './SideBarItem'

export default function SideBar() {
    const [key, setKey] = useState('committer')

    function setStyle(name) {
        return key === name ? "contained" : "outlined"
    }

    return (
        <Box sx={{ padding: "0 8px", overflow: 'auto' }} maxHeight='90vh'>
            <List>
                <SideBarItem to="/committer" variant={setStyle('committer')} onClick={() => setKey("committer")} startIcon={<IosShareOutlinedIcon />}>创建提单</SideBarItem>

                <SideBarItem to="/assigned" variant={setStyle('assigned')} onClick={() => setKey("assigned")} startIcon={<MarkEmailUnreadOutlinedIcon />}>提到我的</SideBarItem>

                <SideBarItem to="/my-commits" variant={setStyle('my-commits')} onClick={() => setKey("my-commits")} startIcon={<Inventory2OutlinedIcon />}>我的提交</SideBarItem>
            </List>
        </Box >

    )
}
