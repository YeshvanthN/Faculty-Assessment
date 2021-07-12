import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "../services/Test.css"

      
      
function CustomProgress(props) {
  const data =  {
    labels: ["Teaching", "Services","Total"],
    datasets: [{
        data: [props.teaching, props.services, props.unfinished],
        backgroundColor: [
          "#445E93","#00d25b","red"
        ]
      }
    ]
  };
  const Options = {
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
  };
  return (
    <div>
      <Doughnut options={Options} data={data} />
    </div>
  )
}

// staff details
let datas;
const name = 'Raj';
const designation = 'Associate Professor'
const department = 'ECE'

// staff progress
const score = "500"
const total = "1000";
const score_percentage = (score / total) * 100

// dropdown values and label for subject
const subjectSelect = [
    {
      label:'0',
      value:0,
    },
    {
        label:'1',
        value:50,
    },
    {
        label:'2',
        value:100,
    },
    {
        label:'3',
        value:150,
    },
    {
        label:'4',
        value:200,
    },
    {
        label:'5',
        value:250,
    },
    {
        label:'6',
        value:300,
    },
]
const LaboratorySelect = [
    {
      label:'0',
      value:0,
    },
    {
        label:'1',
        value:25,
    },
    {
        label:'2',
        value:50,
    },
    {
        label:'3',
        value:75,
    },
    {
        label:'4',
        value:100,
    },
]

const ServiceSelect = [
    {
        label:'0'
    },
    {
        label:'25'
    },
    {
        label:'50'
    },
    {
        label:'100'
    },
]


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Raja",
            department: "CSE",
            designation: "HOD",
            
            adjIsVisible: true,

            //aspects
            thry:0,
            lab:0,
            stud:100,
            dep:200,
            clg:100,
            per:100,
            tot:0,
            aspect:0,

            // adjustment
            adjustments:0,
            astud:0,
            aclg:0,
            adept:0,
            aper:0,
            aTot: 0,
            maxStud:100,
            maxClg:150,
            maxDept:200,
            maxPer:200,

            //sum of states
            teaching: 0,
            service:100+200+100+100,
            total: 1000,
            remTotal: 0,
            data: [100,100,100]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    aspect = () => {
      this.setState({aspect: parseInt(this.state.teaching) + parseInt(this.state.service)})
    }
    tot = () => {
      if(this.state.teaching > 350){
        this.setState({adjIsVisible: false,lab:50,astud:0,aclg:0,adep:0,aper:0,adjustments:0,teaching: parseInt(this.state.thry) + 50 },this.aspect)
      }else if(this.state.teaching == 350){
        this.setState({adjIsVisible: false,astud:0,aclg:0,adep:0,aper:0,adjustments:0 },this.aspect)
      }else{
        this.setState({adjIsVisible: true,teaching: parseInt(this.state.thry) + parseInt(this.state.lab)},this.aspect)
      }
    }
    teaching = () => {
        this.setState({teaching: parseInt(this.state.thry) + parseInt(this.state.lab)},this.tot)
    }
    service = () => {
        this.setState({service: parseInt(this.state.stud) + parseInt(this.state.dept) + parseInt(this.state.clg) + parseInt(this.state.per)},this.tot)
    }
    adjustments = () => {
        this.setState({adjustments: parseInt(this.state.astud) + parseInt(this.state.adept) + parseInt(this.state.aclg) + parseInt(this.state.aper)},this.tot)
    }
    remTotal = () => {
        this.setState({remTotal: parseInt(this.state.remTotal) - (parseInt(this.state.teaching) + parseInt(this.state.adjustments))})
    }
    handleChange(e) {
        const cl=e.target.name;
        const val=e.target.value;
        if(cl==="subCount"){
            this.setState({thry:val},this.teaching)
            // subject count value
            console.log("subject-count:",e.target.value)
        }
        if(cl==="labCount"){
            this.setState({lab:val},this.teaching)
            // lab count value
            console.log("lab-count:",e.target.value)
        }
        if(cl==="studSer"){
            this.setState({astud:val , maxStud: parseInt(this.state.stud) + parseInt(val)},this.adjustments)
            console.log("student service:",e.target.value)
        }
        if(cl==="deptSer"){
            this.setState({adept:val , maxDept: parseInt(this.state.dept) + parseInt(val)},this.adjustments)
            console.log("department service:",e.target.value)
        }
        if(cl==="colSer"){
            this.setState({aclg:val , maxClg: parseInt(this.state.clg) + parseInt(val)},this.adjustments)
            console.log("college service:",e.target.value)
        }
        if(cl==="perSer"){
            this.setState({aper:val , maxPer: parseInt(this.state.per) + parseInt(val)},this.adjustments)
            console.log("student service:",e.target.value)
        }
        // changing adjustments value
 
    }
    // datas= [100,200,400];
    // // datas= [this.state.data];
    // staffProgressData =  {
    //     labels: ["Teaching", "Services","Total"],
    //     datasets: [{
    //         data: this.datas,
    //         backgroundColor: [
    //           "#445E93","#00d25b","#D6C9C9"
    //         ]
    //       }
    //     ]
    //   };
    //   staffProgressOptions = {
    //     responsive: true,
    //     maintainAspectRatio: true,
    //     segmentShowStroke: false,
    //     cutoutPercentage: 70,
    //     elements: {
    //       arc: {
    //           borderWidth: 0
    //       }
    //     },      
    //     legend: {
    //       display: false
    //     },
    //     tooltips: {
    //       enabled: true
    //     }
    //   };
    render() {
    return(
      <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">        
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
                            <p className="text-muted">{this.state.name}</p>
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
                            <p className="text-muted">{this.state.designation}</p>
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
                            <p className="text-muted">{this.state.department}</p>
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
                  <CustomProgress teaching={this.state.teaching} services={this.state.service} unfinished={parseInt(this.state.total - this.state.aspect)} />
                  {/* <Doughnut data={this.staffProgressData} options={this.staffProgressOptions} />s */}
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center text-dark">1000</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded">
                  <div className="text-md-center text-primary text-xl-left">
                    <h6 className="mb-1">Teaching</h6>
                    {/* <p className="text-muted mb-0">{parseInt(this.state.subCount) + parseInt(this.state.labCount)}</p> */}
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold text-dark mb-0">{parseInt(this.state.teaching)}</h6>
                  </div>
                </div>
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded">
                  <div className="text-md-center text-primary text-xl-left">
                    <h6 className="mb-1">Services</h6>
                    {/* <p className="text-muted mb-0">{this.state.adjustments}</p> */}
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold text-dark mb-0">{this.state.service}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card stretch-card mt-2 my-2">
        <div className="card-body">
            <h3 className="card-title text-left">  </h3>
            <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th width="23%"> Aspect </th>
                        <th width="50%"> Category </th>
                        <th width="23%"> Claim </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Teaching</td>
                        <td className="tab-2">Theory subjects
                          <span className="ml-5">
                            <select name='subCount' value={this.state.thry} className="text-center-select mt-1" onChange={this.handleChange}>
                                {subjectSelect.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                          </span>
                        </td>
                        <td >{this.state.thry}</td>
                    </tr>
                    <tr>
                        <td >Teaching</td>
                        <td className="tab-2">
                            Laboratory subjects
                            <span className="ml-4">
                              <select name='labCount' value={this.state.lab} className="text-center-select mt-1" onChange={this.handleChange}>
                              {LaboratorySelect.map((option) => (
                                  <option value={option.value}>{option.label}</option>
                              ))}
                              </select>
                            </span>
                        </td>
                        
                        <td >{this.state.lab}</td>
                    </tr>
                    <tr>
                        <td >Services</td>
                        <td >Student services</td>
                        <td >{this.state.stud}</td>
                    </tr>
                    <tr>
                        <td >Services</td>
                        <td >Department level services</td>
                        <td >{this.state.dep}</td>
                    </tr>
                    <tr>
                        <td >Services</td>
                        <td >College level services</td>
                        <td >{this.state.clg}</td>
                    </tr>
                    <tr>
                        <td >Services</td>
                        <td >Personal career development</td>
                        <td >{this.state.per}</td>  
                    </tr>
                    <tr className='table-success text-primary'>
                        <td className="">Total</td>
                        <td className='text-right'>1000</td>
                        <td className='text-center'>{parseInt(this.state.aspect)}</td>
                    </tr>                            
                </tbody>
            </table>
            </div>
        </div>
        </div>
        {this.state.adjIsVisible && <div className="card stretch-card mt-2 my-2">
        <div className="card-body">
            <h3 className="card-title text-center text-primary"> Adjustments </h3>
            <div className="table-responsive">
            <table className="table text-center table-hover">
                <tbody>
                    <tr>
                      <td>Student Level Services</td>
                      <td className='text-left'>
                        <select name='studSer' className="text-center-select" value={this.state.studSer} onChange={this.handleChange}>
                        {ServiceSelect.map((option) => (
                          <option value={option.label}>{option.label}</option>
                        ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Department Level Services</td>
                      <td className='text-left'>
                        <select name='deptSer' className="text-center-select" value={this.state.deptSer} onChange={this.handleChange}>
                        {ServiceSelect.map((option) => (
                          <option value={option.label}>{option.label}</option>
                        ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>College Level Services</td>
                      <td className='text-left'>
                        <select name='colSer' className="text-center-select" value={this.state.colSer} onChange={this.handleChange}>
                        {ServiceSelect.map((option) => (
                          <option value={option.label}>{option.label}</option>
                        ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Personal Career Development</td>
                      <td className='text-left'>
                        <select name='perSer' className="text-center-select" value={this.state.perSer} onChange={this.handleChange}>
                        {ServiceSelect.map((option) => (
                          <option value={option.label}>{option.label}</option>
                        ))}
                        </select>
                      </td>
                    </tr>
                    <tr className="white">
                      <td className="text-success">Total Adjustment</td>
                      
                      <td className='text-left'><span className="ml-4">{this.state.adjustments}</span></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>}
        
      </div>
    )
}  
} 

export default Dashboard;