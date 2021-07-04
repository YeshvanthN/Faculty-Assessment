import React, { Component } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { ProgressBar } from 'react-bootstrap';
import './Test.css';
import { OptionSet7,OptionSet9,OptionSet22,OptionSet23,OptionSet15,OptionSet24,OptionSet25,OptionSet26 } from './optionsList'


export class DepartmentServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depCheck1: false,
            depValue1: 0,
            depLabel1: 0,
            depTotalOf1: 0,
            
            depCheck2: false,            
            depCheck3: false,
            depCheck4: false,
            depValue2: 0,
            depValue3: 0,
            depValue4: 0,
            depLabel4: 0,
            depLabel2: 0,
            depLabel3: 0,
            depTotalOf234: 0,
            
            depCheck5: false,
            depCheck6: false,
            depCheck7: false,
            depValue5: 0,
            depValue6: 0,
            depValue7: 0,
            depLabel5: 0,
            depLabel6: 0,
            depLabel7: 0,
            depTotalOf567: 0,

            depCheck8: false,
            depCheck9: false,
            depValue8: 0,
            depValue9: 0,
            depLabel8: 0,
            depLabel9: 0,
            depTotalOf89: 0,

            depCheck10: false,
            depValue10: 0,
            depLabel10: 0,
            depTotalOf10: 0,

            depCheck11: false,
            depValue11: 0,
            depLabel11: 0,
            depTotalOf11: 0,

            depCheck12: false,
            depValue12: 0,
            depLabel12: 0,
            depTotalOf12: 0,

            depCheck13: false,
            depValue13: 0,
            depLabel13: 0,
            depTotalOf13: 0,
            
        };
        this.handleChange = this.handleChange.bind(this);
      }

      depTotalOf1 = () => {
        let cal = parseInt(this.state.depValue1)
        this.setState({depTotalOf1: (cal > 20)? 20 : cal})
      }
      depTotalOf234 = () => {
        let cal = parseInt(this.state.depValue2) + parseInt(this.state.depValue3) + parseInt(this.state.depValue4)
        this.setState({depTotalOf234: (cal > 40)? 40 : cal})
      }
      depTotalOf567 = () => {
        let cal = parseInt(this.state.depValue5) + parseInt(this.state.depValue6) + parseInt(this.state.depValue7)
        this.setState({depTotalOf567: (cal > 40)? 40 : cal})
      }
      depTotalOf89 = () => {
        let cal = parseInt(this.state.depValue8) + parseInt(this.state.depValue9)
        this.setState({depTotalOf89: (cal > 40)? 40 : cal})
      }
      depTotalOf10 = () => {
        let cal = parseInt(this.state.depValue10)
        this.setState({depTotalOf10: (cal > 30)? 30 : cal})
      }
      depTotalOf11 = () => {
        let cal = parseInt(this.state.depValue11)
        this.setState({depTotalOf11: (cal > 20)? 20 : cal})
      }
      depTotalOf12 = () => {
        let cal = parseInt(this.state.depValue12)
        this.setState({depTotalOf12: (cal > 40)? 40 : cal})
      }
      depTotalOf13 = () => {
        let cal = parseInt(this.state.depValue13)
        this.setState({depTotalOf13: (cal > 20)? 20 : cal})
      }
      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        if(cl==="check1"){
            this.setState({ depCheck1 : !this.state.depCheck1, depLabel1: 0 , depValue1:0},this.depTotalOf1 )
        }
        if(cl==="check2"){
            this.setState({ depCheck2 : !this.state.depCheck2, depLabel2: 0 , depValue2:0},this.depTotalOf234 )
        }
        if(cl==="check3"){
            this.setState({ depCheck3 : !this.state.depCheck3, depLabel3: 0 , depValue3:0},this.depTotalOf234 )
        }
        if(cl==="check4"){
            this.setState({ depCheck4 : !this.state.depCheck4, depLabel4: 0 , depValue4:0},this.depTotalOf234 )
        }
        if(cl==="check5"){
            this.setState({ depCheck5 : !this.state.depCheck5, depLabel5: 0 , depValue5:0},this.depTotalOf567 )
        }
        if(cl==="check6"){
            this.setState({ depCheck6 : !this.state.depCheck6, depLabel6: 0 , depValue6:0},this.depTotalOf567 )
        }
        if(cl==="check7"){
            this.setState({ depCheck7 : !this.state.depCheck7, depLabel7: 0 , depValue7:0},this.depTotalOf567 )
        }
        if(cl==="check8"){
            this.setState({ depCheck8 : !this.state.depCheck8, depLabel8: 0 , depValue8:0},this.depTotalOf89 )
        }
        if(cl==="check9"){
            this.setState({ depCheck9 : !this.state.depCheck9, depLabel9: 0 , depValue9:0},this.depTotalOf89 )
        }
        if(cl==="check10"){
            this.setState({ depCheck10 : !this.state.depCheck10, depLabel10: 0 , depValue10:0},this.depTotalOf10 )
        }
        if(cl==="check11"){
            this.setState({ depCheck11 : !this.state.depCheck11, depLabel11: 0 , depValue11:0},this.depTotalOf11 )
        }
        if(cl==="check12"){
            this.setState({ depCheck12 : !this.state.depCheck12, depLabel12: 0 , depValue12:0},this.depTotalOf12 )
        }
        if(cl==="check13"){
            this.setState({ depCheck13 : !this.state.depCheck13, depLabel13: 0 , depValue13:0},this.depTotalOf13 )
        }
        if(cl==="dep1"){
            this.setState({ depValue1 : val });
            this.setState({ depLabel1: label},this.depTotalOf1);
        }
        if(cl==="dep2"){
            this.setState({ depValue2 : val });
            this.setState({ depLabel2: label},this.depTotalOf234);
        }
        if(cl==="dep3"){
            this.setState({ depValue3: val});
            this.setState({ depLabel3: label},this.depTotalOf234);
        }
        if(cl==="dep4"){
            this.setState({ depValue4: val});
            this.setState({ depLabel4: label},this.depTotalOf234);
        }
        if(cl==="dep5"){
            this.setState({ depValue5: val});
            this.setState({ depLabel5: label},this.depTotalOf567);
        }
        if(cl==="dep6"){
            this.setState({ depValue6: val});
            this.setState({ depLabel6: label},this.depTotalOf567);
        }
        if(cl==="dep7"){
            this.setState({ depValue7: val});
            this.setState({ depLabel7: label},this.depTotalOf567);
        }
        if(cl==="dep8"){
            this.setState({ depValue8 : val });
            this.setState({ depLabel8: label},this.depTotalOf89);
        }
        if(cl==="dep9"){
            this.setState({ depValue9 : val });
            this.setState({ depLabel9: label},this.depTotalOf89);
        }
        if(cl==="dep10"){
            this.setState({ depValue10 : val });
            this.setState({ depLabel10: label},this.depTotalOf10);
        }
        if(cl==="dep11"){
            this.setState({ depValue11 : val });
            this.setState({ depLabel11: label},this.depTotalOf11);
        }
        if(cl==="dep12"){
            this.setState({ depValue12 : val });
            this.setState({ depLabel12: label},this.depTotalOf12);
        }
        if(cl==="dep13"){
            this.setState({ depValue13 : val });
            this.setState({ depLabel13: label},this.depTotalOf13);
        }
      }
   
    
    render() {
        return (
            <div>
                <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Curriculum Development</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf1}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="20" now={parseInt(this.state.depTotalOf1)} />
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
                                            {!this.state.depCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.depCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Author/revise syllabus, nos
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep1" disabled={!this.state.depCheck1} className="text-center-select" value={this.state.depLabel1} onChange={this.handleChange}>
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
                        <h3 className="card-title text-left">Student workshops</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf234}</h6>
                        <ProgressBar variant="success" id="dep-Value-bar" max="40" now={parseInt(this.state.depTotalOf234)} />
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
                                            {!this.state.depCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                            {this.state.depCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Coordinate student workshop/seminars, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep2" className="text-center-select" disabled={!this.state.depCheck2} value={this.state.depLabel2} onChange={this.handleChange}>
                                            {OptionSet9.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.depCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
                                            {this.state.depCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Act as resource person for student events, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep3" className="text-center-select" disabled={!this.state.depCheck3} value={this.state.depLabel3} onChange={this.handleChange}>
                                            {OptionSet9.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.depCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange}/>}
                                            {this.state.depCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Act as student event committee member, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep4" className="text-center-select" disabled={!this.state.depCheck4} value={this.state.depLabel4} onChange={this.handleChange}>
                                            {OptionSet22.map((option) => (
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
                        <h3 className="card-title text-left">Faculty workshops</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf567}</h6>
                        <ProgressBar variant="success" max="100" now={parseInt(this.state.depTotalOf567)}/>
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
                                            {this.state.depCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} checked/>}
                                            {!this.state.depCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange}/>}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Coordinate faculty workshop/seminars, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep5" className="text-center-select" disabled={!this.state.depCheck5} value={this.state.depLabel5} onChange={this.handleChange}>
                                            {OptionSet23.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.depCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange}/>}
                                            {this.state.depCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Act as resource person for faculty events, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep6" className="text-center-select" disabled={!this.state.depCheck6} value={this.state.depLabel6} onChange={this.handleChange}>
                                            {OptionSet23.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.depCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange}/>}
                                            {this.state.depCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange} checked/>}
                                                {/* <input type="checkbox" className="form-check-input"/> */}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Act as faculty event committee member, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="dep7" className="text-center-select" disabled={!this.state.depCheck7} value={this.state.depLabel7} onChange={this.handleChange}>
                                            {OptionSet22.map((option) => (
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
                        <h3 className="card-title text-left">Conferences organized</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf89}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="20" now={parseInt(this.state.depTotalOf89)} />
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
                                            {!this.state.depCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange}/>}
                                            {this.state.depCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Coordinate national/international conference, nos
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep8" disabled={!this.state.depCheck8} className="text-center-select" value={this.state.depLabel8} onChange={this.handleChange}>
                                                {OptionSet15.map((option) => (
                                                <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.depCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange}/>}
                                            {this.state.depCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Act as conference committee member, nos
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep9" disabled={!this.state.depCheck9} className="text-center-select" value={this.state.depLabel9} onChange={this.handleChange}>
                                                {OptionSet9.map((option) => (
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
                        <h3 className="card-title text-left">Department admin works</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf10}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="30" now={parseInt(this.state.depTotalOf10)} />
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
                                            {!this.state.depCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange}/>}
                                            {this.state.depCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Undertake department works, hours
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep10" disabled={!this.state.depCheck10} className="text-center-select" value={this.state.depLabel10} onChange={this.handleChange}>
                                                {OptionSet24.map((option) => (
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
                        <h3 className="card-title text-left">Consultancy</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf11}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="20" now={parseInt(this.state.depTotalOf11)} />
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
                                            {!this.state.depCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange}/>}
                                            {this.state.depCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Offer consultancy, INR
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep11" disabled={!this.state.depCheck11} className="text-center-select" value={this.state.depLabel11} onChange={this.handleChange}>
                                                {OptionSet25.map((option) => (
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
                        <h3 className="card-title text-left">Department events</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf12}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="40" now={parseInt(this.state.depTotalOf12)} />
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
                                            {!this.state.depCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange}/>}
                                            {this.state.depCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Conduct department level events, nos
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep12" disabled={!this.state.depCheck12} className="text-center-select" value={this.state.depLabel12} onChange={this.handleChange}>
                                                {OptionSet9.map((option) => (
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
                        <h3 className="card-title text-left">Examinations duty</h3>
                        <h6 className="card-title text-right">{this.state.depTotalOf13}</h6>
                        <ProgressBar variant="success"id="dep-Value-bar" max="20" now={parseInt(this.state.depTotalOf13)} />
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
                                            {!this.state.depCheck13 && <input type="checkbox" className="form-check-input" name="check13" onChange={this.handleChange}/>}
                                            {this.state.depCheck13 && <input type="checkbox" className="form-check-input" name="check13" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Serve as invigilator for exams, nos
                                    </td>
                                    <td className='text-center'>
                                            <select name="dep13" disabled={!this.state.depCheck13} className="text-center-select" value={this.state.depLabel13} onChange={this.handleChange}>
                                                {OptionSet26.map((option) => (
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

export default DepartmentServices;
