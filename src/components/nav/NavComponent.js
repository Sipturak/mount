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
        fontSize: 32
    },
    appBarSolid: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255 ,0.95)',
        '&:hover':{
            backgroundColor: 'rgb(255, 255, 255)',
        },
        height: 100,
    },
    appBarTransparent: {
        transition: 'all 0.3s ease',
        backgroundColor: 'rgb(255, 255, 255)',
        height: 100,  
    }
}));



export default NavComponent
