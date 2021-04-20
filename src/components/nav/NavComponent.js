import React, { useEffect, useState } from 'react'

import './NavComponent.css'
import SideDrawer from './SideDrawer'
import { makeStyles } from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import { AppBar, IconButton, Toolbar as MaterialToolbar, Typography, Box, Button, Link, List, ListItem, ListItemText, Fade  } from '@material-ui/core';
import { faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    toolbarAlignment: {
        textAlign: 'center'
    },

    navigationlinks: {
        marginRight: theme.spacing(8),
        fontFamily: 'Tjofsons',
        fontSize: 28,
        '&:hover':{
            color: 'rgb(80, 255, 80)',
        },
    },
    navigationlinksTitle: {
        fontFamily: 'Tjofsons', 
        fontSize: 32
    },
    appBarSolid: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255 ,0.95)',
        '&:hover':{
            backgroundColor: 'rgb(255, 255, 255)',
        },
    },
    appBarTransparent: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
}));
const navLinks = [
    { title: `Home`, path: `/` },
    { title: `About Me`, path: `/about` },
    { title: `Miskolina`, path: `/about` },
    { title: `Nemanjica`, path: `/about` },
    { title: `Tjofson`, path: `/about` },
]



function NavComponent() {
    
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarSolid')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (show) {
                setNavBackground('appBarTransparent')
            } else {
                setNavBackground('appBarSolid')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (   
        <>
            <AppBar className={classes[navRef.current]} position='fixed'>
                <MaterialToolbar className={classes.toolbarAlignment}>
                    <IconButton edge="start" color="secondary"  />
                    <SideDrawer navLinks={navLinks}/>
                </MaterialToolbar>
            </AppBar>
        </>
    )
}

export default NavComponent
