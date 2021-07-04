import React, { Component, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
import './Test.css';

const Group = ({props}) => {
    // total , head , target , check
    const [total , setTotal] = useState(props.total);
    const [ , setTotal] = useState(props.total);

    return (
        <div><div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">{ props.head }</h3>
                        <h6 className="card-title text-right">{ props.total }</h6>
                        <ProgressBar variant="success" max={props.max} now={ props.total } />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="10%"> Choose </th>
                                    {/* <th> Aspect </th> */}
                                    <th width="70%"> Target / Achievement </th>
                                    {/* <th> Progress </th> */}
                                    <th padding="10%"> Count </th>
                                    {/* <th>  </th> */}
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
                                        {props.target}
                                    </td>
                                    {/* <td>
                                        <ProgressBar variant="success" now={10} />
                                    </td> */}
                                    <td className='text-center'>
                                        
                                        {/* {this.state.studCheck1 && */}
                                            <select name="stud1" disabled={!this.state.studCheck1} className="text-center-select" value={this.state.studLabel1} onChange={this.handleChange} onClick={this.studTotalOf1}>
                                                {props.optSet.map((option) => (
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
                </div>
            </div>
    )
}

export default Group;
