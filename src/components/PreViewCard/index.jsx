import React from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';

export default function PreViewCard(props) {
    const { title, username, asigned, body } = props
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    username
                </Typography>
                <Typography variant="h5" component="div">
                    提单标题 。。。。。。。。。
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    asigned
                </Typography>
                <Typography variant="body2">
                    内容摘要
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='outlined'>详细内容</Button>
            </CardActions>
        </Card>
    )
}
