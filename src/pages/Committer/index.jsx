import React from 'react'
import { Box } from '@mui/material'
import Editor from '../../components/Editor'

export default function Committer() {
    return (
        <Box sx={{ padding: '8px', overflow: 'auto' }} maxHeight='100vh'>
            <Editor />
        </Box>
    )
}
