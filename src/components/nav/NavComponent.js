import React, { useEffect, useState } from 'react'

import './NavComponent.css'
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
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    fontAwesomeS: {
        marginRight: theme.spacing(8)
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
        padding: theme.spacing(10, 22, 10, 5),
        fontFamily: 'Tjofsons', 
        fontSize: 32,

    },
    appBarTransparent: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255 ,0.95)',
        '&:hover':{
            backgroundColor: 'rgb(255, 255, 255)',
        },
        height: 100,
    },
    appBarSolid: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 100,
    },
    pimpec: {
        color: 'rgb(255, 255, 255)',
    },
    pimpek: {
        color: 'secondary',
    }
}));




function NavComponent() {
    
    const classes = useStyles();

    const [navColor ,setNavColor] = useState('pimpec')
    const [navBackground, setNavBackground] = useState('appBarSolid')
    const navRef = React.useRef()
    const colorRef = React.useRef()
    navRef.current = navBackground
    colorRef.current = navColor
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (show) {
                setNavBackground('appBarTransparent')
                setNavColor('pimpec')
            } else {
                setNavBackground('appBarSolid')
                setNavColor('pimpek')
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
                    <Typography className={classes.navigationlinksTitle} color='secondary'>Mountain Climbing Society</Typography>
                    <Link className={classes.navigationlinks} href='/' color='secondary' >Home</Link>
                    <FontAwesomeIcon className={classes.fontAwesomeS} style={{fontSize: 30, color: 'green'}} icon="grip-lines-vertical"></FontAwesomeIcon>
                    <Link className={classes.navigationlinks} href='/about' color='secondary'>About</Link>
                    <FontAwesomeIcon className={classes.fontAwesomeS} style={{fontSize: 30, color: 'green'}} icon="grip-lines-vertical"></FontAwesomeIcon>
                    <Link className={classes.navigationlinks} href='/albums' color='secondary'>Albums</Link>
                </MaterialToolbar>
            </AppBar>
        </>
    )
}

export default NavComponent
