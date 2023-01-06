import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import axios from 'axios';
import { nanoid } from 'nanoid';
import PreViewCard from '../../components/PreViewCard';

export default function Assigned() {
    const [commitList, setCommitList] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        axios.get('https://committer-test-api.vercel.app/api/get_commit_list', {
            params: {
                assigned: userId
            }
        }).then(
            response => { console.log(userId); setCommitList(response.data) },
            err => { }
        )
    }, [userId])
    return (
        <Box sx={{ padding: '8px', overflow: 'auto' }} maxHeight='100vh'>
            <Grid container spacing={2}>
                {
                    commitList.map(x => {
                        return (
                            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PreViewCard commit={x} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}
