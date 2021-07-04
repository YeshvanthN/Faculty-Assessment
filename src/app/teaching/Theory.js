import React, { Component, useState } from 'react'
import { ProgressBar, Button, Form } from 'react-bootstrap';
import '../services/Test.css';
import Save from '../shared/Save';
import { OptionSet20, OptionSet21,OptionSet27,OptionSet28, OptionSet29,OptionSet30, OptionSet31, OptionSet32, OptionSet33 } from '../services/optionsList'

class Theory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thryCheck1: false,
            thryCheck2: false,            
            thryCheck3: false,
            thryValue1: 0,
            thryValue2: 0,
            thryValue3: 0,
            thryLabel1: 0,
            thryLabel2: 0,
            thryLabel3: 0,
            thryTotalOf123: 0,
            
            thryCheck4: false,
            thryCheck5: false,
            thryValue4: 0,
            thryValue5: 0,
            thryLabel4: 0,
            thryLabel5: 0,
            thryTotalOf45: 0,
            
            thryCheck6: false,
            thryValue6: 0,
            thryLabel6: 0,
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
            thryLabel9: 0,
            thryTotalOf9: 0,

            thryCheck10: false,
            thryValue10: 0,
            thryLabel10: 0,
            thryTotalOf10: 0,

            thryCheck11: false,
            thryValue11: 0,
            thryLabel11: 0,
            thryTotalOf11: 0,

            thryCheck12: false,
            thryValue12: 0,
            thryLabel12: 0,
            thryTotalOf12: 0,

        };
        this.handleChange = this.handleChange.bind(this);
      }

      thryTotalOf123 = () => {
        let cal = parseInt(this.state.thryValue1) + parseInt(this.state.thryValue2) + parseInt(this.state.thryValue3)
        this.setState({thryTotalOf123: (cal > 5)? 5 : cal})
      }
      thryTotalOf45 = () => {
        let cal = parseInt(this.state.thryValue4) + parseInt(this.state.thryValue5)
        this.setState({thryTotalOf45: (cal > 5)? 5 : cal})
      }
      thryTotalOf6 = () => {
        let cal = parseInt(this.state.thryValue6)
        this.setState({thryTotalOf6: (cal > 5)? 5 : cal})
      }
      thryTotalOf7 = () => {
        let cal = parseInt(this.state.thryValue7)
        this.setState({thryTotalOf7: (cal > 5)? 5 : cal})
      }
      thryTotalOf8 = () => {
        let cal = parseInt(this.state.thryValue8)
        this.setState({thryTotalOf8: (cal > 5)? 5 : cal})
      }
      thryTotalOf9 = () => {
        let cal = parseInt(this.state.thryValue9)
        this.setState({thryTotalOf9: (cal > 10)? 10 : cal})
      }
      thryTotalOf10 = () => {
        let cal = parseInt(this.state.thryValue10)
        this.setState({thryTotalOf10: (cal > 5)? 5 : cal})
      }
      thryTotalOf11 = () => {
        let cal = parseInt(this.state.thryValue11)
        this.setState({thryTotalOf11: (cal > 5)? 5 : cal})
      }
      thryTotalOf12 = () => {
        let cal = parseInt(this.state.thryValue12)
        this.setState({thryTotalOf12: (cal > 5)? 5 : cal})
      }
      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        if(cl==="check1"){
            this.setState({ thryCheck1 : !this.state.thryCheck1, thryValue1:(this.state.thryValue1===0)? 3 : 0},this.thryTotalOf123 )
        }
        if(cl==="check2"){
            this.setState({ thryCheck2 : !this.state.thryCheck2, thryValue2:(this.state.thryValue2===0)? 1 : 0},this.thryTotalOf123 )
        }
        if(cl==="check3"){
            this.setState({ thryCheck3 : !this.state.thryCheck3, thryValue3:(this.state.thryValue3===0)? 1 : 0},this.thryTotalOf123 )
        }
        if(cl==="check4"){
            this.setState({ thryCheck4 : !this.state.thryCheck4, thryValue4:(this.state.thryValue4===0)? 1 : 0},this.thryTotalOf45 )
        }
        if(cl==="check5"){
            this.setState({ thryCheck5 : !this.state.thryCheck5, thrylabel5: 0 , thryValue5: 0},this.thryTotalOf45 )
        }
        if(cl==="check6"){
            this.setState({ thryCheck6 : !this.state.thryCheck6, thryLabel6: 0 , thryValue6:0},this.thryTotalOf6 )
        }
        if(cl==="check7"){
            this.setState({ thryCheck7 : !this.state.thryCheck7, thryLabel7: 0 , thryValue7:0},this.thryTotalOf7 )
        }
        if(cl==="check8"){
            this.setState({ thryCheck8 : !this.state.thryCheck8, thryValue8:(this.state.thryValue8===0)? 5 : 0},this.thryTotalOf8 )
        }
        if(cl==="check9"){
            this.setState({ thryCheck9 : !this.state.thryCheck9, thryLabel9: 0 , thryValue9: 0},this.thryTotalOf9 )
        }
        if(cl==="check10"){
            this.setState({ thryCheck10 : !this.state.thryCheck10, thryLabel10: 0 , thryValue10:0},this.thryTotalOf10 )
        }
        if(cl==="check11"){
            this.setState({ thryCheck11 : !this.state.thryCheck11, thryLabel11: 0 , thryValue11:0},this.thryTotalOf11 )
        }
        if(cl==="check12"){
            this.setState({ thryCheck12 : !this.state.thryCheck12, thryLabel12: 0 , thryValue12:0},this.thryTotalOf12 )
        }
        // if(cl==="thry1"){
        //     this.setState({ thryValue1 : val });
        //     this.setState({ thryLabel1: label});
        // }
        // if(cl==="thry2"){
        //     this.setState({ thryValue2 : val });
        //     this.setState({ thryLabel2: label});
        // }
        // if(cl==="thry3"){
        //     this.setState({ thryValue3: val});
        //     this.setState({ thryLabel3: label});
        // }
        // if(cl==="thry4"){
        //     this.setState({ thryValue4: val});
        //     this.setState({ thryLabel4: label});
        // }
        if(cl==="thry5"){
            this.setState({ thryValue5: val});
            this.setState({ thryLabel5: label},this.thryTotalOf45);
        }
        if(cl==="thry6"){
            this.setState({ thryValue6: val});
            this.setState({ thryLabel6: label},this.thryTotalOf6);
        }
        if(cl==="thry7"){
            this.setState({ thryValue7: val});
            this.setState({ thryLabel7: label},this.thryTotalOf7);
        }
        // if(cl==="thry8"){
        //     this.setState({ thryValue8: val});
        //     this.setState({ thryLabel8: label});
        // }
        if(cl==="thry9"){
            this.setState({ thryValue9: val});
            this.setState({ thryLabel9: label},this.thryTotalOf9);
        }
        if(cl==="thry10"){
            this.setState({ thryValue10: val});
            this.setState({ thryLabel10: label},this.thryTotalOf10);
        }
        if(cl==="thry11"){
            this.setState({ thryValue11: val});
            this.setState({ thryLabel11: label},this.thryTotalOf11);
        }
        if(cl==="thry12"){
            this.setState({ thryValue12: val});
            this.setState({ thryLabel12: label},this.thryTotalOf12);
        }
      }
    render() {
        return (
            <div> 
                <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">        
                    
                    <div className="card stretch-card mt-2 my-2">
                        <div className="card-body">
                            <h3 className="card-title text-left">Teaching Aspects</h3>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Theory Subjects</th>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Branch</td>
                                            <td>
                                                <select className="text-center-select">
                                                    {OptionSet31.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="text-left">Semester</td>
                                            <td>
                                                <select className="text-center-select">
                                                        {OptionSet33.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Section</td>
                                            <td>
                                                <select className="text-center-select">
                                                    {OptionSet32.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="text-left">Subject code</td>
                                            <td>
                                                <Form.Control type="text" className="text-dark" placeholder="Enter the subject code here" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Subject tittle</td>
                                            <td>
                                                <Form.Control type="text" className="text-dark" placeholder="Enter the subject tittle here" />

                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Syllabus</h3>
                        <h6 className="card-title text-right">{this.state.thryTotalOf123}</h6>
                        <ProgressBar variant="success"id="lab-event-bar" max="5" now={parseInt(this.state.thryTotalOf123)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th  width="7%"> Choose </th>
                                    <th width="70%"> Target / Achievement </th>
                                    <th width="23%"> Count </th>
                                    {/* <th>  </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.thryCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.thryCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Teach syllabus only
                                    </td>
                                    <td className='text-center'>
        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.thryCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                            {this.state.thryCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Review prerequisites
                                    </td>
                                    <td className='text-center'>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.thryCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
                                            {this.state.thryCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Teach topics beyond syllabus
                                    </td>
                                    <td className='text-center'>
                                        {/* <select name="per2" disabled={!this.state.thryCheck2} className="text-center-select" value={this.state.thryLabel2} onChange={this.handleChange} onClick={this.thryTotalOf2}>
                                            {OptionSet7.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select> */}
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Learning material</h3><h6 className="card-title text-right">{this.state.thryTotalOf45}</h6>
                        <ProgressBar variant="success" id="lab-event-bar" max="5" now={parseInt(this.state.thryTotalOf45)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="7%"> Choose </th>
                                    {/* <th> Aspect </th> */}
                                    <th width="70%"> Target / Achievement </th>
                                    {/* <th> Progress </th> */}
                                    <th width="23%"> Count </th>
                                    {/* <th>  </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.thryCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange}/>}
                                            {this.state.thryCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Use previous material only
                                    </td>
                                    <td className='text-center'>
                                        {/* <select name="thry4" disabled={!this.state.thryCheck4} className="text-center-select" value={this.state.thryLabel4} onChange={this.handleChange} onClick={this.thryTotalOf45}>
                                            {OptionSet20.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.thryCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange}/>}
                                            {this.state.thryCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Revise learning material, %
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry5" disabled={!this.state.thryCheck5} className="text-center-select" value={this.state.thryLabel5} onChange={this.handleChange} onClick={this.thryTotalOf45}>
                                            {OptionSet20.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        </div>
                    </div>
                    </div>
                    

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Tests and quizzes</h3><h6 className="card-title text-right">{this.state.thryTotalOf6}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf6)}/>
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
                                            {!this.state.thryCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange}/>}
                                            {this.state.thryCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Conduct slip tests and quizzes, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry6" disabled={!this.state.thryCheck6} className="text-center-select" value={this.state.thryLabel6} onChange={this.handleChange}>
                                            {OptionSet27.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Assignments</h3><h6 className="card-title text-right">{this.state.thryTotalOf7}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf7)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange}/>}
                                            {this.state.thryCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Conduct assignments, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry7" disabled={!this.state.thryCheck7} className="text-center-select" value={this.state.thryLabel7} onChange={this.handleChange}>
                                            {OptionSet21.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Off-campus learning</h3><h6 className="card-title text-right">{this.state.thryTotalOf8}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf8)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange}/>}
                                            {this.state.thryCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Use LMS as additional learning tool
                                    </td>
                                    <td className='text-center'>
                                        {/* <select name="thry8" disabled={!this.state.thryCheck8} className="text-center-select" value={this.state.thryLabel8} onChange={this.handleChange} onClick={this.thryTotalOf8}>
                                            {OptionSet21.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Contact hours</h3><h6 className="card-title text-right">{this.state.thryTotalOf9}</h6>
                        <ProgressBar variant="success" max={10} now={parseInt(this.state.thryTotalOf9)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange}/>}
                                            {this.state.thryCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Conduct classes, % of scheduled
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry9" disabled={!this.state.thryCheck9} className="text-center-select" value={this.state.thryLabel9} onChange={this.handleChange}>
                                            {OptionSet28.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Student feedback</h3><h6 className="card-title text-right">{this.state.thryTotalOf10}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf10)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange}/>}
                                            {this.state.thryCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Expect student feedback
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry10" disabled={!this.state.thryCheck10} className="text-center-select" value={this.state.thrythryel10} onChange={this.handleChange}>
                                            {OptionSet27.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Pass percentage</h3><h6 className="card-title text-right">{this.state.thryTotalOf11}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf11)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange}/>}
                                            {this.state.thryCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Expect pass percentage
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry11" disabled={!this.state.thryCheck11} className="text-center-select" value={this.state.thryLabel11} onChange={this.handleChange}>
                                            {OptionSet29.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Academic excellence</h3><h6 className="card-title text-right">{this.state.thryTotalOf12}</h6>
                        <ProgressBar variant="success" max={5} now={parseInt(this.state.thryTotalOf12)}/>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="20px"> Choose </th>
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
                                            {!this.state.thryCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange}/>}
                                            {this.state.thryCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Expect % of students getting 60% and above
                                    </td>
                                    <td className='text-center'>
                                        <select name="thry12" disabled={!this.state.thryCheck12} className="text-center-select" value={this.state.thryLabe12} onChange={this.handleChange}>
                                            {OptionSet30.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
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

export function CollegeServices() {
    const [fields, setFields] = useState([{ value: null }]);
    const [count, setCount] = useState(1);

    function handleChange(i, event) {
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
      if (count !== 6) {
        setCount(count + 1);
      }
      
    }
  
    function handleRemove(i) {
      const values = [...fields];
      if(count> 1){
          values.splice(i, 1);
          setFields(values);
          if (count > 0){
              setCount(count - 1)
          }
          else {
              setCount(1)
          }
      }
    }

  
    return (
    <div>
    <Button onClick={() => handleAdd()}>
    Add one Subject
    </Button>

    {fields.map((field, idx) => {
        return (
        <div key={`${field}-${idx}`}>
            <Theory />

            <Button onClick={() => handleRemove(idx)}>
            Remove this subject
            </Button>
        </div>
        );
    })}
    <Save/>
    </div>
   
   );
}

export default CollegeServices;
