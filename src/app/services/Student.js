import React, { Component } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { ProgressBar } from 'react-bootstrap';
import './Test.css';
import {OptionSet16, OptionSet7, OptionSet4} from './optionsList';
import Save from '../shared/Save'

export class StudentServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studCheck1: false,
            studCheck2: false,            
            studCheck3: false,
            studValue1: 0,
            studValue2: 0,
            studLabel1: 0,
            studLabel2: 0,
            studValue3: 0,
            studLabel3: 0,
            studTotalOf1: 0,
            studTotalOf2: 0,
            studTotalOf3: 0,
            
        };
        this.handleChange = this.handleChange.bind(this);
      }
      studTotalOf1 = () => {
        let cal = parseInt(this.state.studValue1)
        this.setState({studTotalOf1: (cal > 30)? 30 : cal})
      }
      studTotalOf2 = () => {
        let cal = parseInt(this.state.studValue2)
        this.setState({studTotalOf2: (cal > 20)? 20 : cal})
      }
      studTotalOf3 = () => {
        let cal = parseInt(this.state.studValue3)
        this.setState({studTotalOf3: (cal > 100)? 100 : cal})
      }
      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        if(cl==="check1"){
            this.setState({ studCheck1 : !this.state.studCheck1, studLabel1: 0 , studValue1:0},this.studTotalOf1)
            
        }
        if(cl==="check2"){
            this.setState({ studCheck2 : !this.state.studCheck2, studLabel2: 0 , studValue2:0},this.studTotalOf2)
            
        }
        if(cl==="check3"){
            this.setState({ studCheck3 : !this.state.studCheck3, studLabel3: 0 , studValue3:0},this.studTotalOf3)
            
        }
        
        if(cl==="stud1"){
            this.setState({ studValue1 : val });
            this.setState({ studLabel1: label},this.studTotalOf1);
        }
        if(cl==="stud2"){
            this.setState({ studValue2 : val });
            this.setState({ studLabel2: label},this.studTotalOf2);
        }
        if(cl==="stud3"){
            this.setState({ studValue3: val});
            this.setState({ studLabel3: label},this.studTotalOf3);
        }
      }
   
    
    render() {
        return (
            <div>
                <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Student Mentoring </h3>
                        <h6 className="card-title text-right">{this.state.studTotalOf1}</h6>
                        <ProgressBar variant="success"id="stud-Value-bar" max="30" now={parseInt(this.state.studTotalOf1)} />
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
                                            {!this.state.studCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.studCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}

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
                                        Engage students in all round development, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        
                                        {/* {this.state.studCheck1 && */}
                                            <select name="stud1" disabled={!this.state.studCheck1} className="text-center-select" value={this.state.studLabel1} onChange={this.handleChange}>
                                                {OptionSet16.map((option) => (
                                                <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        {/* } */}
                                        
                                        {/* <DropdownButton id="dropdown-basic-button" value="0" title={titleE}>
                                            <Dropdown.Item className="stud-Value" onChange={()=>{titleE='0'}}>0</Dropdown.Item>
                                            <Dropdown.Item className="stud-Value" onChange={()=>{titleE='25'}}>1</Dropdown.Item>
                                            <Dropdown.Item className="stud-Value" onChange={()=>{titleE='50'}}>2</Dropdown.Item>
                                        </DropdownButton> */}
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
                        <h3 className="card-title text-left">Makeup classes </h3>
                        <h6 className="card-title text-right">{this.state.studTotalOf2}</h6>
                        <ProgressBar variant="success" id="stud-Value-bar" max="20" now={parseInt(this.state.studTotal2)} />
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
                                            {!this.state.studCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                            {this.state.studCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
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
                                        Conduct makeup / remedial classes, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="stud2" className="text-center-select" disabled={!this.state.studCheck2} value={this.state.studLabel2} onChange={this.handleChange}>
                                            {OptionSet7.map((option) => (
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
                        <h3 className="card-title text-left">Student projects </h3>
                        <h6 className="card-title text-right">{this.state.studTotalOf3}</h6>
                        <ProgressBar variant="success" max="100" now={parseInt(this.state.studTotal3)}/>
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
                                            {this.state.studCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                            {!this.state.studCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
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
                                        Guide Intern / Research / Industry projects, nos
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        <select name="stud3" className="text-center-select" disabled={!this.state.studCheck3} value={this.state.studLabel3} onChange={this.handleChange}>
                                            {OptionSet4.map((option) => (
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
                    <Save url={'/studentsave'} state={this.state}/>
                </div>
            </div>
        )
    }
}

export default StudentServices;