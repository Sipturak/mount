import * as React from "react"
import { IconButton, Drawer,  List, ListItem, ListItemText } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import './NavComponent.css'
import { Link, useLocation } from "react-router-dom"

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    alignment: {
      textAlign: 'center',
    },
    linkText: {
      fontFamily: 'Roboto',
      fontSize: 28,
      color: 'rgb(34, 139, 34)',
      '&:hover':{
          color: 'rgb(80, 255, 80)',
      },
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase'
    },
  })
const SideDrawer = ({navLinks}) => {
    const classes = useStyles();
    const [state, setState] = useState({ 
      left: false 
  })

  const toggleDrawer = (anchor, open) => event => {
    setState({ 
        [anchor]: open 
    })
  }
  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText className={classes.alignment} primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return(
    <React.Fragment>
        <IconButton edge="start" aria-label="menu" color="secondary" onClick={toggleDrawer("left", true)}>
            <Menu />
        </IconButton>
        <Drawer anchor="left" open={state.left} onOpen={toggleDrawer("left", true)} onClose={toggleDrawer("left", false)}>
            {sideDrawerList("left")}
        </Drawer>
  </React.Fragment>
  )
}
export default SideDrawer