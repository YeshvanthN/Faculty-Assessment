import TheoryCommon from './TheoryCommon';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Button, darkColors , lightColors } from 'react-floating-action-button';
// import Fab from '@material-ui/core/Fab';
import Save from '../shared/Save'
import { FloatingButton, Item } from "react-floating-button";
import one from '../../assets/images/one.svg'
import two from '../../assets/images/two.svg'
import three from '../../assets/images/three.svg'
import four from '../../assets/images/four.svg'
import five from '../../assets/images/five.svg'
import six from '../../assets/images/six.svg'
// import { render } from 'node-sass';
 

const useStyles = theme => ({
  backdrop: {
    zIndex: 2,
    color: '#fff',
  },
  root: {
    zIndex:99,
    flexGrow: 1,
    position: 'fixed',
    // bottom: theme.spacing(2),
    right: theme.spacing(1),
    right: "0vw",
    top: "5.2vh",
  },

  fav: {
    paddingTop: 22,
    color: 'primary',
    paddingBottom: 20,
  }
});

class Theory extends Component {
  constructor(props) {
    super(props);
    this.state= {
      url:'theory1Save',
      theory:{
        thryCheck1: true,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 3,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 3,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,
    
        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,
    
        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,
    
        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,
    
        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,
    
        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,
    
        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,
    
      },
      theory1:{
        thryCheck1: true,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 3,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 3,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,
    
        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,
    
        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,
    
        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,
    
        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,
    
        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,
    
        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,
    
      },
      theory2:{
        thryCheck1: true,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 3,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 3,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,

        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,

        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,

        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,

        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,

        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,

        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,
      },
      theory3:{
        thryCheck1: true,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 3,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 3,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,

        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,

        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,

        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,

        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,

        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,

        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,

      },
      theory4:{
        thryCheck1: true,
        thryCheck2: true,            
        thryCheck3: true,
        thryValue1: 3,
        thryValue2: 1,
        thryValue3: 1,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 5,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,

        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,

        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,

        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,

        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,

        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,

        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,

      },
      theory5:{
        thryCheck1: true,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 3,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 3,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,

        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,

        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,

        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,

        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,

        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,

        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,

      },
      theory6:{
        thryCheck1: false,
        thryCheck2: false,            
        thryCheck3: false,
        thryValue1: 0,
        thryValue2: 0,
        thryValue3: 0,
        thryLabel1: "0",
        thryLabel2: "0",
        thryLabel3: "0",
        thryTotalOf123: 0,
        
        thryCheck4: false,
        thryCheck5: false,
        thryValue4: 0,
        thryValue5: 0,
        thryLabel4: "0",
        thryLabel5: "0",
        thryTotalOf45: 0,
        
        thryCheck6: false,
        thryValue6: 0,
        thryLabel6: "0",
        thryTotalOf6: 0,

        thryCheck7: false,
        thryValue7: 0,
        thryLabel7: 0,
        thryTotalOf7: 0,

        thryCheck8: false,
        thryValue8: 0,
        thryLabel8: 0,
        thryTotalOf8: 0,

        thryCheck9: false,
        thryValue9: 0,
        thryLabel9: "0",
        thryTotalOf9: 0,

        thryCheck10: false,
        thryValue10: 0,
        thryLabel10: "0",
        thryTotalOf10: 0,

        thryCheck11: false,
        thryValue11: 0,
        thryLabel11: '0',
        thryTotalOf11: 0,

        thryCheck12: false,
        thryValue12: 0,
        thryLabel12: "0",
        thryTotalOf12: 0,

      },
    }
      this.updateChange = this.updateChange.bind(this);
  }
  
    updateChange = (nextTheory,nextUrl) => {
      // const nextUrl='sample';
      // save current data with previous url 
          // axios({
          //     url: {url},
          //     method: 'POST',
          //     data: {state}
          // }).then(() => {
          //     console.log('data send success');
          // }).catch(() => {
          //     console.log('data send fail');
          // })
        console.log(nextTheory,nextUrl);
        // fetch data here 
        // set data to TheoryCommon
        this.setState({url:nextUrl , theory:nextTheory},console.log(this.state.theory))
    }

  render() {
    const {classes} = this.props;

  return (
    <div>
      <div  className={classes.root} >
        <FloatingButton tooltip="Theory" top={true} size="40" backgroundColor="rgb(13, 71, 161)" className={classes.root}>
        {/* <div tooltip="Theory"></div> */}
          <Item
            imgSrc={six}
            backgroundColor="skyblue"
            tooltip="Theory 6"
            onClick={()=>this.updateChange(this.state.theory6,'theory6Save')}
          />
          <Item
            imgSrc={five}
            backgroundColor="skyblue"
            tooltip="Theory 5"
            onClick={()=>this.updateChange(this.state.theory5,'theory5Save')}
          />
          <Item
            imgSrc={four}
            backgroundColor="skyblue"
            tooltip="Theory 4"
            onClick={()=>this.updateChange(this.state.theory4,'theory4Save')}
          />
          <Item
            imgSrc={three}
            backgroundColor="skyblue"
            tooltip="Theory 3"
            onClick={()=>this.updateChange(this.state.theory3,'theory3Save')}
          />
          <Item
            imgSrc={two}
            backgroundColor="skyblue"
            tooltip="Theory 2"
            onClick={()=>this.updateChange(this.state.theory2,'theory2Save')}
          />
          <Item
            imgSrc={one}
            backgroundColor="skyblue"
            tooltip="Theory 1"
            onClick={()=>this.updateChange(this.state.theory1,'theory1Save')}
          />
        </FloatingButton>
      <Save url={this.state.url} state={this.state.theory}/>
      </div>
      <div>
        <TheoryCommon key={this.state.url} url={this.state.url} theory={this.state.theory}/>
      </div>
    </div>
  )
}
}

export default withStyles(useStyles, { withTheme: true })(Theory);