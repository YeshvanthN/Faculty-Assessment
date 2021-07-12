import LabCommon from './LabCommon';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Save from '../shared/Save'
import { FloatingButton, Item } from "react-floating-button";
import one from '../../assets/images/one.svg'
import two from '../../assets/images/two.svg'
import three from '../../assets/images/three.svg'
import four from '../../assets/images/four.svg'

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
      top: "5vh",
    },
  
    fav: {
      paddingTop: 22,
      color: 'primary',
      paddingBottom: 20,
    }
  });

  class Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'lab1Save',
            lab:{
                labCheck1: false,
                labCheck2: false,            
                labValue1: 0,
                labValue2: 0,
                labLabel1: 0,
                labLabel2: 0,
                labTotalOf12: 0,
                
                labCheck3: false,
                labCheck4: false,
                labValue3: 0,
                labValue4: 0,
                labLabel3: 0,
                labLabel4: 0,
                labTotalOf34: 0,
                
                labCheck5: false,
                labCheck6: false,
                labValue5: 0,
                labValue6: 0,
                labLabel5: 0,
                labLabel6: 0,
                labTotalOf56: 0,
            },
            lab1:{
                labCheck1: false,
                labCheck2: false,            
                labValue1: 0,
                labValue2: 0,
                labLabel1: 0,
                labLabel2: 0,
                labTotalOf12: 0,
                
                labCheck3: false,
                labCheck4: false,
                labValue3: 0,
                labValue4: 0,
                labLabel3: 0,
                labLabel4: 0,
                labTotalOf34: 0,
                
                labCheck5: false,
                labCheck6: false,
                labValue5: 0,
                labValue6: 0,
                labLabel5: 0,
                labLabel6: 0,
                labTotalOf56: 0,
            },
            lab2:{
                labCheck1: false,
                labCheck2: false,            
                labValue1: 0,
                labValue2: 0,
                labLabel1: 0,
                labLabel2: 0,
                labTotalOf12: 0,
                
                labCheck3: false,
                labCheck4: false,
                labValue3: 0,
                labValue4: 0,
                labLabel3: 0,
                labLabel4: 0,
                labTotalOf34: 0,
                
                labCheck5: false,
                labCheck6: false,
                labValue5: 0,
                labValue6: 0,
                labLabel5: 0,
                labLabel6: 0,
                labTotalOf56: 0,
            },
            lab3:{
                labCheck1: false,
                labCheck2: false,            
                labValue1: 0,
                labValue2: 0,
                labLabel1: 0,
                labLabel2: 0,
                labTotalOf12: 0,
                
                labCheck3: false,
                labCheck4: false,
                labValue3: 0,
                labValue4: 0,
                labLabel3: 0,
                labLabel4: 0,
                labTotalOf34: 0,
                
                labCheck5: false,
                labCheck6: false,
                labValue5: 0,
                labValue6: 0,
                labLabel5: 0,
                labLabel6: 0,
                labTotalOf56: 0,
            },
            lab4:{
                labCheck1: false,
                labCheck2: false,            
                labValue1: 0,
                labValue2: 0,
                labLabel1: 0,
                labLabel2: 0,
                labTotalOf12: 0,
                
                labCheck3: false,
                labCheck4: false,
                labValue3: 0,
                labValue4: 0,
                labLabel3: 0,
                labLabel4: 0,
                labTotalOf34: 0,
                
                labCheck5: false,
                labCheck6: false,
                labValue5: 0,
                labValue6: 0,
                labLabel5: 0,
                labLabel6: 0,
                labTotalOf56: 0,
            },
        }
        this.updateChange = this.updateChange.bind(this);
    }
    updateChange = (nextLab,nextUrl) => {
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
        //   console.log(nextLab,nextUrl);
        // fetch data here 
        // set data to LabCommon
        this.setState({url:nextUrl , lab:nextLab},console.log(this.state.lab))
    }
    render() {
        const { classes } = this.props;

        return (
          <div>
            <div  className={classes.root} >
                <FloatingButton tooltip="Lab" top={true} size="40" backgroundColor="rgb(13, 71, 161)" className={classes.root}>
                {/* <div tooltip="Lab"></div> */}
                    <Item
                    imgSrc={four}
                    backgroundColor="skyblue"
                    tooltip="Lab 4"
                    onClick={()=>this.updateChange(this.state.lab4,'lab4Save')}
                    />
                    <Item
                    imgSrc={three}
                    backgroundColor="skyblue"
                    tooltip="Lab 3"
                    onClick={()=>this.updateChange(this.state.lab3,'lab3Save')}
                    />
                    <Item
                    imgSrc={two}
                    backgroundColor="skyblue"
                    tooltip="Lab 2"
                    onClick={()=>this.updateChange(this.state.lab2,'lab2Save')}
                    />
                    <Item
                    imgSrc={one}
                    backgroundColor="skyblue"
                    tooltip="Lab 1"
                    onClick={()=>this.updateChange(this.state.lab1,'lab1Save')}
                    />
                </FloatingButton>
                <Save url={this.state.url} state={this.state.lab}/>
            </div>
            <div>
                <LabCommon key={this.state.url} url={this.state.url} lab={this.state.lab}/>
            </div>
          </div>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(Lab);

