import React from 'react'
import { Grid, Box } from "@mui/material";
import PreViewCard from '../../components/PreViewCard';

export default function MyCommits() {
    return (
        <Box sx={{ padding: '8px', overflow: 'auto' }} maxHeight='100vh'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PreViewCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PreViewCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PreViewCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PreViewCard />
                </Grid>
            </Grid>
        </Box>
    )
}
