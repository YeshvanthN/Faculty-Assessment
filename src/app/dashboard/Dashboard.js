import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import Slider from "react-slick";
// import { TodoListComponent } from '../apps/TodoList'
// import { VectorMap } from "react-jvectormap"


// importing bootstrap classes
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import ProgressBar from 'react-bootstrap/ProgressBar'

// import { extend } from 'chartist';
// import { handleInputChange } from 'react-select/src/utils';

// staff details
const name = 'Raj';
const designation = 'Associate Professor'
const department = 'ECE'

// staff progress
const score = "500"
const total = "1000";
const score_percentage = (score / total) * 100


// const mapData = {
//   "BZ": 75.00,
//   "US": 56.25,
//   "AU": 15.45,
//   "GB": 25.00,
//   "RO": 10.25,
//   "GE": 33.25
// }

// dropdown values and label for subject
const subjectSelect = [
    {
        value:'1',
    },
    {
        value:'2',
    },
    {
        value:'3',
    },
    {
        value:'4',
    },
    {
        value:'5',
    },
    {
        value:'6',
    },
]
const LaboratorySelect = [
    {
        value:'1',
    },
    {
        value:'2',
    },
    {
        value:'3',
    },
    {
        value:'4',
    },
]

const ServiceSelect = [
    {
        value:'0'
    },
    {
        value:'25'
    },
    {
        value:'50'
    },
    {
        value:'100'
    },
]


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subCount: 50,
            labCount: 50,
            studSer: 0,
            deptSer: 0,
            colSer: 0,
            perSer: 0,
            adjustments: 200,
            teaching: 100,
            total: 1000,
            remTotal: 700, 
        };
        this.handleChange = this.handleChange.bind(this);
    }
    teaching = () => {
        this.setState({teaching: parseInt(this.state.subCount) + parseInt(this.state.labCount)})
    }
    adjustments = () => {
        this.setState({adjustments: parseInt(this.state.studSer) + parseInt(this.state.deptSer) + parseInt(this.state.colSer) + parseInt(this.state.perSer)})
    }
    remTotal = () => {
        this.setState({remTotal: parseInt(this.state.remTotal) - (parseInt(this.state.teaching) + parseInt(this.state.adjustments))})
    }
    handleChange(e) {
        const cl=e.target.name;
        const val=e.target.value;
        if(cl==="subCount"){
            this.setState({subCount:val})
            // subject count value
            console.log("subject-count:",e.target.value)
        }
        if(cl==="labCount"){
            this.setState({labCount:val})
            // lab count value
            console.log("lab-count:",e.target.value)
        }
        if(cl==="studSer"){
            this.setState({studSer:val})
            // student service points
            console.log("student service:",e.target.value)
        }
        if(cl==="deptSer"){
            this.setState({deptSer:val})
            // student service points
            console.log("department service:",e.target.value)
        }
        if(cl==="colSer"){
            this.setState({colSer:val})
            // student service points
            console.log("college service:",e.target.value)
        }
        if(cl==="perSer"){
            this.setState({perSer:val})
            // student service points
            console.log("student service:",e.target.value)
        }
        // changing adjustments value
 
    }
    staffProgressData =  {
        labels: ["Teaching", "Services","Total"],
        datasets: [{
            data: [100,200,700],
            backgroundColor: [
              "#445E93","#00d25b","#D6C9C9"
            ]
          }
        ]
      };
      staffProgressOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
          arc: {
              borderWidth: 0
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    
    
    render() {
    return(
      <div>
          <div className="row">
          
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body mt-2">
                <div className="d-flex flex-row justify-content-between mt-3">
                  <h3 className="card-title mb-1">Faculty Assessment</h3>
                  <h5 className="text-success mb-1"><i className="mdi mdi-account-card-details mr-1"></i>Profile</h5>
                </div>
                <div className="row align-contents-center">
                  <div className="col-12">
                    <div className="preview-list">
                      <div className="preview-item border-bottom align-items-center">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-account"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject text-primary">Name</h6>
                            {/* <p className="text-muted mb-0">{name}</p> */}
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">{name}</p>
                            {/* <p className="text-muted mb-0"></p> */}
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom align-items-center">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-account-key"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject text-primary">Designation</h6>
                            {/* <p className="text-muted mb-0">{designation}</p> */}
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">{designation}</p>
                            {/* <p className="text-muted mb-0"></p> */}
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom align-items-center">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-account-multiple"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject text-primary">Department</h6>
                            {/* <p className="text-muted mb-0">{department}</p> */}
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">{department}</p>
                            {/* <p className="text-muted mb-0"></p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"> Your Progress</h4>
                <div className="aligner-wrapper">
                  <Doughnut data={this.staffProgressData} options={this.staffProgressOptions} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-dark">1000</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-primary text-xl-left">
                    <h6 className="mb-1">Teaching</h6>
                    {/* <p className="text-muted mb-0">{parseInt(this.state.subCount) + parseInt(this.state.labCount)}</p> */}
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold text-dark mb-0">{parseInt(this.state.teaching)}</h6>
                  </div>
                </div>
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-primary text-xl-left">
                    <h6 className="mb-1">Services</h6>
                    {/* <p className="text-muted mb-0">{this.state.adjustments}</p> */}
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold text-dark mb-0">{this.state.adjustments}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <Card> 
                    <Form >
                        {/* <Card className="text-center justify-content-center align-items-center">
                            <span className="table-responsive">
                            <Table className='table table-hover table-bordered'>
                            
                            <h3><b>Faculty Assessment</b></h3><br />
                            <tr className='text-left'>
                                <td className="card-title">Name</td>
                                <td>{name}</td>
                            </tr>
                            <tr className='text-left'>
                                <td className="card-title">Designation</td>
                                <td>{designation}</td>
                            </tr>
                            <tr className='text-left'>
                                <td className="card-title">Department</td>
                                <td>{department}</td>
                            </tr>
                            </Table>
                            <Table>
                            <tr>
                                <td rowSpan="3">
                                <div className="flex justify-content-start card-title">
                                <p>your progress</p>
                                <ProgressBar>
                                    <ProgressBar striped variant="success" now={score_percentage} label={score} key={1} />
                                    <ProgressBar variant="danger" now={100 - score_percentage} label={total - score} key={2} />
                                </ProgressBar>
                                </div>
                                </td>
                            </tr>
                            
                            </Table>
                            </span>

                        </Card> */}
                        <Card>
                            <div className="table-responsive">
                            <Table className='table table-bordered'>
                                <thead>
                                    <tr className='table-primary'>
                                        <th>Aspect</th>
                                        <th>Category</th>
                                        <th>Claim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-left'>Teaching</td>
                                        <td className='d-flex justify-content-between'>Theory subjects
                                        <select name='subCount' value={this.state.subCount} onChange={this.handleChange}>
                                            {subjectSelect.map((option) => (
                                                <option value={option.value}>{option.value}</option>
                                            ))}
                                        </select>
                                        </td>
                                        <td className='text-right'>0</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Teaching</td>
                                        <td className='d-flex justify-content-between'>
                                            Laboratory subjects
                                        <select name='labCount' value={this.state.labCount} onChange={this.handleChange}>
                                        {LaboratorySelect.map((option) => (
                                            <option value={option.value}>{option.value}</option>
                                        ))}
                                        </select>
                                        {/* <DropdownButton id="dropdown-basic-button" title="0" onSelect={LaboratoryCount}>
                                        {LaboratorySelect.map((option) => (
                                            <Dropdown.Item eventKey={option.value}>{option.value}</Dropdown.Item>
                                        ))}
                                        </DropdownButton> */}
                                        </td>
                                        
                                        <td className='text-right'>0</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Services</td>
                                        <td className='text-left'>Student services</td>
                                        <td className='text-right'>0</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Services</td>
                                        <td className='text-left'>Department level services</td>
                                        <td className='text-right'>0</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Services</td>
                                        <td className='text-left'>College level services</td>
                                        <td className='text-right'>0</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Services</td>
                                        <td className='text-left'>Personal career development</td>
                                        <td className='text-right'>0</td>  
                                    </tr>
                                    <tr className='table-primary'>
                                        <td className='text-left'>Total</td>
                                        <td className='text-right'>1000</td>
                                        <td className='text-right'>0</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        </Card><br />
                        <Card>
                            <Table className='table table-bordered'>
                            <thead>
                                <tr className='table-primary'>
                                    <th>Adjustments</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td className='text-left'>Services</td>
                                    <td className='text-left'>Student services</td>
                                    <td className='text-center'>
                                    <select name='studSer' value={this.state.studSer} onClick={this.adjustments} onChange={this.handleChange}>
                                    {ServiceSelect.map((option) => (
                                      <option value={option.value}>{option.value}</option>
                                    ))}
                                    </select>
                                    {/* <DropdownButton id="dropdown-basic-button" title='0' onSelect={StudentServiceCount}>
                                        {ServiceSelect.map((option) => (
                                        <Dropdown.Item eventKey={option.value}>{option.value}</Dropdown.Item>
                                         ))}
                                    </DropdownButton> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>Services</td>
                                    <td className='text-left'>Department level services</td>
                                    <td className='text-center'>
                                    <select name='deptSer' value={this.state.deptSer} onClick={this.adjustments} onChange={this.handleChange}>
                                    {ServiceSelect.map((option) => (
                                      <option value={option.value}>{option.value}</option>
                                    ))}
                                    </select>
                                    {/* <DropdownButton id="dropdown-basic-button" title='0' onSelect={DepartmentalServiceCount}>
                                        {ServiceSelect.map((option) => (
                                        <Dropdown.Item eventKey={option.value}>{option.value}</Dropdown.Item>
                                         ))}
                                    </DropdownButton> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>Services</td>
                                    <td className='text-left'>College level services</td>
                                    <td className='text-center'>
                                    <select name='colSer' value={this.state.colSer} onClick={this.adjustments} onChange={this.handleChange}>
                                    {ServiceSelect.map((option) => (
                                      <option value={option.value}>{option.value}</option>
                                    ))}
                                    </select>
                                    {/* <DropdownButton id="dropdown-basic-button" title='0' onSelect={CollegeServiceCount}>
                                        {ServiceSelect.map((option) => (
                                        <Dropdown.Item eventKey={option.value}>{option.value}</Dropdown.Item>
                                         ))}
                                    </DropdownButton> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>Services</td>
                                    <td className='text-left'>Personal career development</td>
                                    <td className='text-center'>
                                    <select name='perSer' value={this.state.perSer} onClick={this.adjustments} onChange={this.handleChange}>
                                    {ServiceSelect.map((option) => (
                                      <option value={option.value}>{option.value}</option>
                                    ))}
                                    </select>
                                    {/* <DropdownButton id="dropdown-basic-button" title='0' onSelect={PersonalServiceCount}>
                                        {ServiceSelect.map((option) => (
                                        <Dropdown.Item eventKey={option.value}>{option.value}</Dropdown.Item>
                                         ))}
                                    </DropdownButton> */}
                                    </td>
                                </tr>
                                <tr className='table-primary'>
                                    <td colSpan='2'>Total</td>
                                    <td className='text-right'>{this.state.adjustments}</td>
                                </tr>
                             </thead>
                            </Table>
                        </Card>
                    </Form>
                </Card>
            </div>
    )
}  
} 

export default Dashboard;