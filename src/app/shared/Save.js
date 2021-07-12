import React from 'react';
// import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import SaveIcon from '@material-ui/icons/Save';
import { Button , darkColors , lightColors } from 'react-floating-action-button';
import state from '../services/Student'


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 2,
    color: '#fff',
  },
  root: {
    zIndex:99,
    height: 0,
    weidth: 0,
    flexGrow: 1,
    position: 'fixed',
    // bottom: theme.spacing(2),
    // left: theme.spacing(2),
    right: "24px",
    bottom: "15vh",
  },

  fav: {
    paddingTop: 22,
    color: 'primary',
    paddingBottom: 20,
  }
}));




const FloatingActionButtons = ({url,state}) => {

  const classes = useStyles();
  // const {url,state} = props;
  const submit = () => {
    console.log({state})
            // axios({
            //     url: {url},
            //     method: 'POST',
            //     data: {state}
            // }).then(() => {
            //     console.log('data send success');
            // }).catch(() => {
            //     console.log('data send fail');
            // })
    }

  return (
    <div className={classes.root}>
      <Button tooltip="Save" icon="mdi mdi-content-save"
      onClick={() => {console.log(url,state)}}
      styles={{backgroundColor: darkColors.blue, color: lightColors.white}}>
        {/* <h6 className="text-smokewhite">Save</h6> */}
      </Button>
        {/* <Fab color="primary" className={classes.fav} onClick={() => {
    console.log(url,state)
            // axios({
            //     url: url,
            //     method: 'POST',
            //     data: state
            // }).then(() => {
            //   alert('updated')
            //     console.log('data send success');
            // }).catch(() => {
            //     console.log('data send fail');
            // })
          }} aria-label="save" >
        </Fab> */}
        
        
    </div>
  );
}

export default FloatingActionButtons;