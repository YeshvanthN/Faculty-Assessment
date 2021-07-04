import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1,
    color: '#fff',
  },
  root: {
    height: 0,
    weidth: 0,
    flexGrow: 1,
    position: 'fixed',
    // bottom: theme.spacing(2),
    // left: theme.spacing(2),
    right: "2vw",
    bottom: "13vh",
  },

  fav: {
    paddingTop: 22,
    color: 'primary',
    paddingBottom: 20,
  }
}));

const FloatingActionButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Fab color="primary" className={classes.fav} aria-label="save">
      <span>
          <SaveIcon/>
        <h6 className="text-smokewhite">Save</h6>
      </span>
        </Fab>
    </div>
  );
}

export default FloatingActionButtons;