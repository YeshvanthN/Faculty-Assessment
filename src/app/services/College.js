import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import './Test.css';
import { OptionSet1,OptionSet2,OptionSet3,OptionSet4,OptionSet5,OptionSet6 } from './optionsList'

export class CollegeServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clgCheck1: false,
            clgCheck2: false,            
            clgValue1: 0,
            clgValue2: 0,
            clgLabel1: 0,
            clgLabel2: 0,
            clgTotalOf12: 0,

            clgCheck3: false,
            clgValue3: 0,
            clgLabel3: 0,
            clgTotalOf3: 0,
            
            clgCheck4: false,
            clgCheck5: false,
            clgCheck6: false,
            clgValue4: 0,
            clgValue5: 0,
            clgValue6: 0,
            clgLabel4: 0,
            clgLabel5: 0,
            clgLabel6: 0,
            clgTotalOf456: 0,

            clgCheck7: false,
            clgValue7: 0,
            clgLabel7: 0,
            clgTotalOf7: 0,
        };
        this.handleChange = this.handleChange.bind(this);
      }

      clgTotalOf12 = () => {
          let cal = parseInt(this.state.clgValue1) + parseInt(this.state.clgValue2)
          this.setState({clgTotalOf12: (cal > 50)? 50 : cal})
      }
      clgTotalOf3 = () => {
          let cal = parseInt(this.state.clgValue3)
          this.setState({clgTotalOf3: (cal > 50)? 50 : cal})
      }
      clgTotalOf456 = () => {
          let cal = parseInt(this.state.clgValue4) + parseInt(this.state.clgValue5) + parseInt(this.state.clgValue6)
          this.setState({clgTotalOf456: (cal > 100)? 100 : cal})
      }
      clgTotalOf7 = () => {
          let cal = parseInt(this.state.clgValue1) + parseInt(this.state.clgValue2)
          this.setState({clgTotalOf12: (cal > 50)? 50 : cal})
      }

      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        

        if(cl==="check1"){
            this.setState({ clgLabel1: 0 , clgValue1:0, clgCheck1 : !this.state.clgCheck1},this.clgTotalOf12)
        }
        if(cl==="check2"){
            this.setState({ clgLabel2: 0 , clgValue2:0, clgCheck2 : !this.state.clgCheck2},this.clgTotalOf12)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="check3"){
            this.setState({ clgCheck3 : !this.state.clgCheck3, clgLabel3: 0 , clgValue3:0},this.clgTotalOf3)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="check4"){
            this.setState({ clgCheck4 : !this.state.clgCheck4, clgLabel4: 0 , clgValue4:0},this.clgTotalOf456)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="check5"){
            this.setState({ clgCheck5 : !this.state.clgCheck5, clgLabel5: 0 , clgValue5:0},this.clgTotalOf456)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="check6"){
            this.setState({ clgCheck6 : !this.state.clgCheck6, clgLabel6: 0 , clgValue6:0},this.clgTotalOf456)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="check7"){
            this.setState({ clgCheck7 : !this.state.clgCheck7, clgLabel7: 0 , clgValue7:0},this.clgTotalOf7)
            // console.log(this.state.clgCheck1)
        }
        if(cl==="clg1"){
            this.setState({ clgValue1 : val});
            // this.setState({ clgValue : Number((this.state.clgValue) + parseInt(val))})
            this.setState({ clgLabel1: label},this.clgTotalOf12);
        }
        if(cl==="clg2"){
            this.setState({ clgValue2 : val});
            // this.setState({ clgValue : Number((this.state.clgValue) + parseInt(val))})
            this.setState({ clgLabel2: label},this.clgTotalOf12);
        }
        if(cl==="clg3"){
            this.setState({ clgValue3: val});
            this.setState({ clgLabel3: label},this.clgTotalOf3);
        }
        if(cl==="clg4"){
            this.setState({ clgValue4: val});
            this.setState({ clgLabel4: label},this.clgTotalOf456);
        }
        if(cl==="clg5"){
            this.setState({ clgValue5: val});
            this.setState({ clgLabel5: label},this.clgTotalOf456);
        }
        if(cl==="clg6"){
            this.setState({ clgValue6: val});
            this.setState({ clgLabel6: label},this.clgTotalOf456);
        }
        if(cl==="clg7"){
            this.setState({ clgValue7: val});
            this.setState({ clgLabel7: label},this.clgTotalOf7);
        }
      }

   
    
    render() {
        return (
            <div>
                <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">College Values</h3>
                        <h6 className="card-title text-right">{this.state.clgTotalOf12}</h6>
                        <ProgressBar variant="success"id="clg-Value-bar" max="50" label={this.state.clgTotalOf12} now={this.state.clgTotalOf12} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="7%"> Choose </th>
                                    <th width="70%"> Target / Achievement </th>
                                    <th width="23%"> Count </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.clgCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.clgCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}

                                            {/* <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/> */}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        {/* <span >
                                            <input type="checkbox" className="form-check-input"/>
                                        </span> */}
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Coordinate college Values, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        
                                        {/* {this.state.clgCheck1 && */}
                                            <select name="clg1" disabled={!this.state.clgCheck1} className="text-center-select" value={this.state.clgLabel1} onChange={this.handleChange}>
                                                {OptionSet1.map((option) => (
                                                <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        {/* } */}
                                        
                                        {/* <DropdownButton id="dropdown-basic-button" value="0" title={titleE}>
                                            <Dropdown.Item className="clg-Value" onChange={()=>{titleE='0'}}>0</Dropdown.Item>
                                            <Dropdown.Item className="clg-Value" onChange={()=>{titleE='25'}}>1</Dropdown.Item>
                                            <Dropdown.Item className="clg-Value" onChange={()=>{titleE='50'}}>2</Dropdown.Item>
                                        </DropdownButton> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {this.state.clgCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
                                            {!this.state.clgCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Act as Value committee member, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg2" className="text-center-select" disabled={!this.state.clgCheck2} value={this.state.clgLabel2} onChange={this.handleChange}>
                                            {OptionSet2.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>

                                        
                                        {/* <select id="dropdown-basic-button clg-Values">
                                            <option className="clg-Value" onChange={() => this.setState({ clgValue2:50 })} onSelect={()=>this.changLabelue(this.state.clgValue2,0)} onChange={()=>this.changLabelue(this.state.clgValue2,0)} value="0">0</option>
                                            <option className="clg-Value" onSelect={() => this.setState({ clgValue2:50 })}onSelect={()=>this.changLabelue(this.state.clgValue2,15)} onChange={()=>this.changLabelue(this.state.clgValue2,15)} value="15">1</option>
                                            <option className="clg-Value" onChange={() => this.setState({ clgValue2:50 })}onSelect={()=>this.changLabelue(this.state.clgValue2,30)} onChange={()=>this.changLabelue(this.state.clgValue2,30)} value="30">2</option>
                                            <option className="clg-Value" onSelect={()=>this.changLabelue(this.state.clgValue2,45)} onChange={()=>this.changLabelue(this.state.clgValue2,45)} value="45">3</option>
                                            <option className="clg-Value" onSelect={()=>this.changLabelue(this.state.clgValue2,50)} onChange={()=>this.changLabelue(this.state.clgValue2,50)} value="50">4</option>
                                        </select> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">College Admin Work</h3>
                        <h6 className="card-title text-right">{this.state.clgTotalOf3}</h6>
                        <ProgressBar variant="success" id="clg-Value-bar" max="50" now={parseInt(this.state.clgTotalOf3)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="7%"> Choose </th>
                                    <th width="70%"> Target / Achievement </th>
                                    <th width="23%"> Count </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.clgCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
                                            {this.state.clgCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        {/* <span >
                                            <input type="checkbox" className="form-check-input"/>
                                        </span> */}
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Undertake college admin work, hours/week
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg3" className="text-center-select" disabled={!this.state.clgCheck3} value={this.state.clgLabel3} onChange={this.handleChange}>
                                            {OptionSet3.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">External Research</h3>
                        <h6 className="card-title text-right">{this.state.clgTotalOf456}</h6>
                        <ProgressBar variant="success" max="100" now={parseInt(this.state.clgTotalOf456)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="7%"> Choose </th>
                                    <th width="70%"> Target / Achievement </th>
                                    <th width="23%"> Count </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {this.state.clgCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange} checked/>}
                                            {!this.state.clgCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange}/>}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        {/* <span >
                                            <input type="checkbox" className="form-check-input"/>
                                        </span> */}
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Submit research proposal for funding, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg4" className="text-center-select" disabled={!this.state.clgCheck4} value={this.state.clgLabel4} onChange={this.handleChange}>
                                            {OptionSet4.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {this.state.clgCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} checked/>}
                                            {!this.state.clgCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} />}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Get research funding, INR
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg5" className="text-center-select" disabled={!this.state.clgCheck5} value={this.state.clgLabel5} onChange={this.handleChange}>
                                            {OptionSet5.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {this.state.clgCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} checked/>}
                                            {!this.state.clgCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} />}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Complete funded research project, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg6" className="text-center-select" disabled={!this.state.clgCheck6} value={this.state.clgLabel6} onChange={this.handleChange}>
                                            {OptionSet6.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Minor Grands</h3>
                        <h6 className="card-title text-right">{this.state.clgTotalOf7}</h6>
                        <ProgressBar variant="success" max="50" now={parseInt(this.state.clgTotalOf7)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="7%"> Choose </th>
                                    <th width="70%"> Target / Achievement </th>
                                    <th width="23%"> Count </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {this.state.clgCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange} checked/>}
                                            {!this.state.clgCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange} />}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        {/* <span >
                                            <input type="checkbox" className="form-check-input"/>
                                        </span> */}
                                    </td>
                                    {/* <td> 
                                        College Values 
                                    </td> */}
                                    <td>
                                        Get grant for seminar/workshop/conference, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="clg7" className="text-center-select" disabled={!this.state.clgCheck7} value={this.state.clgLabel7} onChange={this.handleChange}>
                                            {OptionSet1.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollegeServices;
