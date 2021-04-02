import React, { useEffect, useState } from 'react'

import './NavComponent.css'
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, IconButton, Toolbar as MaterialToolbar, Typography, Box, Button, Link, List, ListItem, ListItemText, Fade  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarSolid: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255 ,0.3)',
    },
    appBarTransparent: {
        transition: 'all 0.3s ease',
        backgroundColor: '#2c3e50'
    }
}));




function NavComponent() {
    
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
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
                <MaterialToolbar>
                    <Link href='/' color='secondary'>Home</Link>
                    <Link href='/about' color='secondary'>About</Link>
                </MaterialToolbar>
            </AppBar>
        </>
    )
}

export default NavComponent
