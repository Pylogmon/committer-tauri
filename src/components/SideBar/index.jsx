import React, { useState, useEffect } from 'react'
import { Box, Button, Badge } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { NavLink, useLocation } from 'react-router-dom';
import PubSub from 'pubsub-js'
import axios from 'axios';
import Login from '../Login';

function SideBarItem(props) {
    return <Button sx={{ marginBottom: "8px" }} fullWidth component={NavLink} {...props} />
}

export default function SideBar() {
    const [userId, setUserId] = useState(-1)
    const [myCommit, setMyCommit] = useState(0)
    const [assigned, setAssigned] = useState(0)
    const location = useLocation()

    var token = PubSub.subscribe('user_id', (_, d) => { setUserId(d) });

    useEffect(() => {
        axios.get('https://committer-test-api.vercel.app/api/get_commit_list', {
            params: {
                creator: userId
            }
        }).then(
            response => { setMyCommit(response.data.length) },
            err => { }
        )
        axios.get('https://committer-test-api.vercel.app/api/get_commit_list', {
            params: {
                assigned: userId
            }
        }).then(
            response => { setAssigned(response.data.length) },
            err => { }
        )
    }, [userId])

    function setStyle(pathname) {
        return location.pathname.includes(pathname) ? "contained" : "text"
    }

    return (
        <Box sx={{ padding: "8px", overflow: 'auto', width: '150px' }} maxHeight='90vh'>
            <Login />

            <SideBarItem to="/committer" variant={setStyle("/committer")} startIcon={<IosShareOutlinedIcon />}>创建提单</SideBarItem>

            <SideBarItem to={`/assigned/${userId}`} variant={setStyle("/assigned")} startIcon={<MarkEmailUnreadOutlinedIcon />}><Badge badgeContent={assigned} color="warning">提到我的</Badge></SideBarItem>

            <SideBarItem to={`/my-commits/${userId}`} variant={setStyle("/my-commits")} startIcon={<Inventory2OutlinedIcon />}><Badge badgeContent={myCommit} color="secondary">我的提交</Badge></SideBarItem>
        </Box >
    )
}
