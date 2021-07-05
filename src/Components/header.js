import React from 'react'
import { AppBar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "../styles.scss"
export default function Header(){
    return(
    <AppBar className="header" position="relative">
        
        <Link to="/main">Main Page</Link>
        
        
        <Link to="/user">User Page</Link>
        
        <Link to="/admin">Admin Page</Link>
        
    </AppBar>
    )
}