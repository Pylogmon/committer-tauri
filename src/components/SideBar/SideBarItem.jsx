import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

export default function SideBarItem(props) {
    return (
        <Button sx={{ marginBottom: "8px" }} fullWidth component={NavLink} {...props} />
    )
}
