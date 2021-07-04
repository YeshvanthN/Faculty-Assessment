import React, { Component, useState } from 'react'
import { ProgressBar, Form } from 'react-bootstrap';
import '../services/Test.css';
import { Button } from 'react-bootstrap';
import { OptionSet20, OptionSet21, OptionSet31, OptionSet32, OptionSet33 } from '../services/optionsList'

class Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labCheck1: false,
            labCheck2: false,            
            labValue2: 0,
            labValue1: 0,
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

        };
        this.handleChange = this.handleChange.bind(this);
      }

      labTotalOf12 = () => {
        let cal = parseInt(this.state.labValue1) + parseInt(this.state.labValue2)
        this.setState({labTotalOf12: (cal > 10)? 10 : cal})
      }
      labTotalOf34 = () => {
        let cal = parseInt(this.state.labValue3) + parseInt(this.state.labValue4)
        this.setState({labTotalOf34: (cal > 5)? 5 : cal})
      }
      labTotalOf56 = () => {
        let cal = parseInt(this.state.labValue5) + parseInt(this.state.labValue6)
        this.setState({labTotalOf56: (cal > 10)? 10 : cal})
      }
      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        if(cl==="check1"){
            this.setState({ labCheck1 : !this.state.labCheck1, labValue1:(this.state.labValue1===0)? 5 : 0},this.labTotalOf12 )
        }
        if(cl==="check2"){
            this.setState({ labCheck2 : !this.state.labCheck2, labValue2:(this.state.labValue2===0)? 5 : 0},this.labTotalOf12 )
        }
        if(cl==="check3"){
            this.setState({ labCheck3 : !this.state.labCheck3, labValue3:(this.state.labValue3===0)? 1 : 0},this.labTotalOf34 )
        }
        if(cl==="check4"){
            this.setState({ labCheck4 : !this.state.labCheck4, labLabel4: 0 , labValue4:0},this.labTotalOf34 )
        }
        if(cl==="check5"){
            this.setState({ labCheck5 : !this.state.labCheck5, labValue5:(this.state.labValue5===0)? 5 : 0},this.labTotalOf56 )
        }
        if(cl==="check6"){
            this.setState({ labCheck6 : !this.state.labCheck6, labLabel6: 0 , labValue6:0},this.labTotalOf56 )
        }
        // if(cl==="lab1"){
        //     this.setState({ labValue1 : val });
        //     this.setState({ labLabel1: label});
        // }
        // if(cl==="lab2"){
        //     this.setState({ labValue2 : val });
        //     this.setState({ labLabel2: label});
        // }
        // if(cl==="lab3"){
        //     this.setState({ labValue3: val});
        //     this.setState({ labLabel3: label});
        // }
        if(cl==="lab4"){
            this.setState({ labValue4: val});
            this.setState({ labLabel4: label});
        }
        // if(cl==="lab5"){
        //     this.setState({ labValue5: val});
        //     this.setState({ labLabel5: label});
        // }
        if(cl==="lab6"){
            this.setState({ labValue6: val});
            this.setState({ labLabel6: label});
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
                                            <th className="text-left">Lab Subjects</th>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Branch</td>
                                            <td>
                                                <select className="text-center-select tech">
                                                    {OptionSet31.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="text-left">Semester</td>
                                            <td>
                                                <select className="text-center-select tech">
                                                        {OptionSet33.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Section</td>
                                            <td>
                                                <select className="text-center-select tech">
                                                    {OptionSet32.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="text-left">Subject code</td>
                                            <td>
                                                <Form.Control type="text" placeholder="Enter the subject code here" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Subject tittle</td>
                                            <td>
                                                <Form.Control type="text" placeholder="Enter the subject tittle here" />

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
                        <h6 className="card-title text-right">{this.state.labTotalOf12}</h6>
                        <ProgressBar variant="success"id="lab-event-bar" max="10" now={parseInt(this.state.labTotalOf12)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="8%"> Choose </th>
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
                                            {!this.state.labCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.labCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Conduct experiments as per syllabus
                                    </td>
                                    <td className='text-center'>
        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.labCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                            {this.state.labCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Use rubrics for assessment
                                    </td>
                                    <td className='text-center'>
                                        
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Learning material</h3>
                        <h6 className="card-title text-right">{this.state.labTotalOf34}</h6>
                        <ProgressBar variant="success" id="lab-event-bar" max="5" now={parseInt(this.state.labTotalOf34)} />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th width="8%"> Choose </th>
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
                                            {!this.state.labCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
                                            {this.state.labCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Use previous material only
                                    </td>
                                    <td className='text-center'>
                                        {/* <select name="per2" disabled={!this.state.labCheck2} className="text-center-select" value={this.state.labLabel2} onChange={this.handleChange} onClick={this.labTotalOf2}>
                                            {OptionSet7.map((option) => (
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
                                            {!this.state.labCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange}/>}
                                            {this.state.labCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Revise learning material, %
                                    </td>
                                    <td className='text-center'>
                                        <select name="lab4" disabled={!this.state.labCheck4} className="text-center-select" value={this.state.labLabel4} onChange={this.handleChange} onClick={this.labTotalOf34}>
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
                        <h3 className="card-title text-left">Innovative Pratices</h3>
                        <h6 className="card-title text-right">{this.state.labTotalOf56}</h6>
                        <ProgressBar variant="success" max={10} now={parseInt(this.state.labTotalOf56)}/>
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
                                            {!this.state.labCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange}/>}
                                            {this.state.labCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Implement innovative practice
                                    </td>
                                    <td className='text-center'>
                                        {/* <select name="per2" disabled={!this.state.labCheck2} className="text-center-select" value={this.state.labLabel2} onChange={this.handleChange} onClick={this.labTotalOf2}>
                                            {OptionSet7.map((option) => (
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
                                            {!this.state.labCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange}/>}
                                            {this.state.labCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Conduct experiments beyond syllabus, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="lab6" disabled={!this.state.labCheck6} className="text-center-select" value={this.state.labLabel6} onChange={this.handleChange} onClick={this.labTotalOf56}>
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
      values.splice(i, 1);
      setFields(values);
      if (count > 0){
          setCount(count - 1)
      }
      else {
          setCount(1)
      }
    }

  
    return (
    <div>
    <Button type="button" onClick={() => handleAdd()}>
    Add one Laboratory
    </Button>

    {fields.map((field, idx) => {
        return (
        <div key={`${field}-${idx}`}>
            <Lab />

            <Button type="button" onClick={() => handleRemove(idx)}>
            Remove this subject
            </Button>
        </div>
        );
    })}
    </div>
   
   );
}

export default CollegeServices;
