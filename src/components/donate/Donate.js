import React from 'react'

import './Donate.css'
import donImg from '../../images/DonateSectionPicture01.jpg'
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    imageBG: {
        backgroundImage: `url(${donImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '800px'

    },
    textF: {
      color: 'white',
      padding: '20px'
    }
  }));

function DonateComponent() {
  const classes = useStyles();

    return (
        <div class="container" className={classes.imageBG}>
            <form>
            <div className={classes.textF}>
              <TextField  id="standard-basic" label="Standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Standard" />
            </div>
            
            </form>
        </div>
    )
}

export default DonateComponent
