import React from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';

export default function PreViewCard(props) {
    const { commit } = props
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    # {commit.commit_id}
                </Typography>
                <Typography variant="h5" component="div">
                    {commit.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {commit.assigned}
                </Typography>
                <Typography variant="body2">
                    {commit.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='outlined'>详细内容</Button>
            </CardActions>
        </Card>
    )
}
