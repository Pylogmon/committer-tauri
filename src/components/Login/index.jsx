import React, { useState } from 'react'
import { Box, TextField, Alert, AlertTitle, Snackbar, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import PubSub from 'pubsub-js'

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState("success")
    const [alertTitle, setAlertTitle] = useState("")
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [logined, setLogined] = useState(false)

    function login() {
        setLoading(true)
        axios.post('https://committer-test-api.vercel.app/api/login', {}, {
            params: {
                user_name: userName,
                password
            }
        }).then(
            response => {
                setLoading(false);
                if (typeof (response.data.user_id) != 'undefined') {
                    setSeverity('success');
                    setAlertTitle('登录成功！');
                    setMessage(`用户ID: ${response.data.user_id} 用户名: ${response.data.user_name}`);
                    setLogined(true)
                    PubSub.publish('user_id', response.data.user_id)
                } else {
                    setSeverity('error');
                    setAlertTitle('登录失败！');
                    setMessage("用户名或密码错误");
                }
                setShowAlert(true)
            },
            err => { setLoading(false); setSeverity('error'); setAlertTitle('登录失败！'); setMessage(err.message); setShowAlert(true) }
        )
    }
    function logout() {
        setLogined(false)
        PubSub.publish('user_id', -1)
    }
    function handleClose(_, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };

    return logined ? (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={showAlert} autoHideDuration={1500} onClose={handleClose} >
                <Alert onClose={handleClose} severity={severity}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar >
            <Typography sx={{ textAlign: 'center', marginBottom: '8px' }} variant="h5" component="h5">
                {userName}
            </Typography>
            <LoadingButton fullWidth sx={{ marginBottom: '8px' }} onClick={logout} endIcon={<LogoutIcon />} variant="text">退出登录</LoadingButton>
        </>
    ) : (
        <Box>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={showAlert} autoHideDuration={1500} onClose={handleClose} >
                <Alert onClose={handleClose} severity={severity}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar >
            <TextField fullWidth sx={{ marginBottom: '8px' }} size='small' onChange={e => setUserName(e.target.value)} label='用户名' />
            <TextField fullWidth sx={{ marginBottom: '8px' }} size='small' type='password' onChange={e => setPassword(e.target.value)} label='密码' />
            <LoadingButton fullWidth sx={{ marginBottom: '8px' }} onClick={login} endIcon={<LoginIcon />} loading={loading} loadingPosition="end" variant="contained">登录</LoadingButton>
        </Box >
    )
}
