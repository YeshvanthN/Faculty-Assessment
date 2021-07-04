import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import './Test.css';

import { OptionSet1,OptionSet7,OptionSet8,OptionSet9,OptionSet10,OptionSet11,OptionSet12,OptionSet13,OptionSet14,OptionSet15,OptionSet17,OptionSet18,OptionSet19 } from './optionsList'
export class PersonalServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perCheck1: false,
            perValue1: 0,
            perLabel1: 0,
            perTotalOf1: 0,

            perCheck2: false,            
            perValue2: 0,
            perLabel2: 0,
            perTotalOf2: 0,

            perCheck3: false,
            perCheck4: false,
            perCheck5: false,
            perCheck6: false,
            perCheck7: false,
            perValue3: 0,
            perValue4: 0,
            perValue5: 0,
            perValue6: 0,
            perValue7: 0,
            perLabel3: 0,
            perLabel4: 0,
            perLabel5: 0,
            perLabel6: 0,
            perLabel7: 0,
            perTotalOf34567: 0,

            perCheck8: false,
            perCheck9: false,
            perCheck10: false,
            perValue8: 0,
            perValue9: 0,
            perValue10: 0,
            perLabel8: 0,
            perLabel9: 0,
            perLabel10: 0,
            perTotalOf8910: 0,           

            perCheck11: false,
            perValue11: 0,
            perLabel11: 0,
            perTotalOf11: 0,
            
            perCheck12: false,
            perCheck13: false,
            perCheck14: false,
            perCheck15: false,
            perValue12: 0,
            perValue13: 0,
            perValue14: 0,
            perValue15: 0,
            perLabel12: 0,
            perLabel13: 0,
            perLabel14: 0,
            perLabel15: 0,
            perTotalOf12_13_14_15: 0,

            perCheck16: false,
            perCheck17: false,
            perCheck18: false,
            perCheck19: false,
            perValue16: 0,
            perValue17: 0,
            perValue18: 0,
            perValue19: 0,
            perLabel16: 0,
            perLabel17: 0,
            perLabel18: 0,
            perLabel19: 0,
            perTotalOf16_17_18_19: 0,

            perCheck20: false,
            perValue20: 0,
            perLabel20: 0,
            perTotalOf20: 0,

            perCheck21: false,
            perCheck22: false,
            perCheck23: false,
            perValue21: 0,
            perValue22: 0,
            perValue23: 0,
            perLabel21: 0,
            perLabel22: 0,
            perLabel23: 0,
            perTotalOf21_22_23: 0,

        };
        this.handleChange = this.handleChange.bind(this);
      }

      perTotalOf1 = () => {
        let cal = parseInt(this.state.perValue1)
        this.setState({perTotalOf1: (cal > 20)? 20 : cal})
      }
      perTotalOf2 = () => {
        let cal = parseInt(this.state.perValue2)
        this.setState({perTotalOf2: (cal > 20)? 20 : cal})
      }
      perTotalOf34567 = () => {
        let cal = parseInt(this.state.perValue3) + parseInt(this.state.perValue4) + parseInt(this.state.perValue5) + parseInt(this.state.perValue6) + parseInt(this.state.perValue7)
        this.setState({perTotalOf34567 : (cal > 50)? 50 : cal})
      }
      perTotalOf8910 = () => {
        let cal = parseInt(this.state.perValue8) + parseInt(this.state.perValue9) + parseInt(this.state.perValue10)
        this.setState({perTotalOf8910 : (cal > 100)? 100 : cal})
      }
      perTotalOf11 = () => {
        let cal = parseInt(this.state.perValue11)
        this.setState({perTotalOf11 : (cal > 20)? 20 : cal})
      }
      perTotalOf12_13_14_15 = () => {
        let cal = parseInt(this.state.perValue12) + parseInt(this.state.perValue13) + parseInt(this.state.perValue14) + parseInt(this.state.perValue15)
        this.setState({perTotalOf12_13_14_15 : (cal > 40)? 40 : cal})
      }
      perTotalOf16_17_18_19 = () => {
        let cal = parseInt(this.state.perValue16) + parseInt(this.state.perValue17) + parseInt(this.state.perValue18) + parseInt(this.state.perValue19)
        this.setState({perTotalOf16_17_18_19 : (cal > 20)? 20 : cal})
      }
      perTotalOf20 = () => {
        let cal = parseInt(this.state.perValue20)
        this.setState({perTotalOf20 : (cal > 20)? 20 : cal})
      }
      perTotalOf21_22_23 = () => {
        let cal = parseInt(this.state.perValue21) + parseInt(this.state.perValue22) + parseInt(this.state.perValue23)
        this.setState({perTotalOf21_22_23 : (cal > 70)? 70 : cal})
      }

      handleChange(e) {
        // console.log("Fruit Selected!!");
        const cl=e.target.name;
        const val=e.target.value;
        const label=e.target.label;
        if(cl==="check1"){
            this.setState({ perCheck1 : !this.state.perCheck1, perLabel1: 0 , perValue1:0},this.perTotalOf1 )
        }
        if(cl==="check2"){
            this.setState({ perCheck2 : !this.state.perCheck2, perLabel2: 0 , perValue2:0},this.perTotalOf2 )
        }
        if(cl==="check3"){
            this.setState({ perCheck3 : !this.state.perCheck3, perValue3:(this.state.perValue3===0)? 50 : 0},this.perTotalOf34567 )
        } 
        if(cl==="check4"){
            this.setState({ perCheck4 : !this.state.perCheck4, perLabel4: 0 , perValue4:0},this.perTotalOf34567 )
        }
        if(cl==="check5"){
            this.setState({ perCheck5 : !this.state.perCheck5, perLabel5: 0 , perValue5:0},this.perTotalOf34567 )
        }
        if(cl==="check6"){
            this.setState({ perCheck6 : !this.state.perCheck6, perLabel6: 0 , perValue6:0},this.perTotalOf34567 )
        }
        if(cl==="check7"){
            this.setState({ perCheck7 : !this.state.perCheck7, perLabel7: 0 , perValue7:0},this.perTotalOf34567 )
        }
        if(cl==="check8"){
            this.setState({ perCheck8 : !this.state.perCheck8, perLabel8: 0 , perValue8:0},this.perTotalOf8910 )
        }
        if(cl==="check9"){
            this.setState({ perCheck9 : !this.state.perCheck9, perLabel9: 0 , perValue9:0},this.perTotalOf8910 )
        }
        if(cl==="check10"){
            this.setState({ perCheck10 : !this.state.perCheck10, perLabel10: 0 , perValue10:0},this.perTotalOf8910 )
        }
        if(cl==="check11"){
            this.setState({ perCheck11 : !this.state.perCheck11, perLabel11: 0 , perValue11:0},this.perTotalOf11 )
        }
        if(cl==="check12"){
            this.setState({ perCheck12 : !this.state.perCheck12, perLabel12: 0 , perValue12:0},this.perTotalOf12_13_14_15 )
        }
        if(cl==="check13"){
            this.setState({ perCheck13 : !this.state.perCheck13, perLabel13: 0 , perValue13:0},this.perTotalOf12_13_14_15 )
        }
        if(cl==="check14"){
            this.setState({ perCheck14 : !this.state.perCheck14, perLabel14: 0 , perValue14:0},this.perTotalOf12_13_14_15 )
        }
        if(cl==="check15"){
            this.setState({ perCheck15 : !this.state.perCheck15, perLabel15: 0 , perValue15:0},this.perTotalOf12_13_14_15 )
        }
        if(cl==="check16"){
            this.setState({ perCheck16 : !this.state.perCheck16, perLabel16: 0 , perValue16:0},this.perTotalOf16_17_18_19 )
        }
        if(cl==="check17"){
            this.setState({ perCheck17 : !this.state.perCheck17, perLabel17: 0 , perValue17:0},this.perTotalOf16_17_18_19 )
        }
        if(cl==="check18"){
            this.setState({ perCheck18 : !this.state.perCheck18, perLabel18: 0 , perValue18:0},this.perTotalOf16_17_18_19 )
        }
        if(cl==="check19"){
            this.setState({ perCheck19 : !this.state.perCheck19, perLabel19: 0 , perValue19:0},this.perTotalOf16_17_18_19 )
        }
        if(cl==="check20"){
            this.setState({ perCheck20 : !this.state.perCheck20, perLabel20: 0 , perValue20:0},this.perTotalOf20 )
        }
        if(cl==="check21"){
            this.setState({ perCheck21 : !this.state.perCheck21, perLabel21: 0 , perValue21:0},this.perTotalOf21_22_23 )
        }
        if(cl==="check22"){
            this.setState({ perCheck22 : !this.state.perCheck22, perLabel22: 0 , perValue22:0},this.perTotalOf21_22_23 )
        }
        if(cl==="check23"){
            this.setState({ perCheck23 : !this.state.perCheck23, perLabel23: 0 , perValue23:0},this.perTotalOf21_22_23 )
        }
        if(cl==="per1"){
            this.setState({ perValue1 : val });
            this.setState({ perLabel1: label},this.perTotalOf1);
        }
        if(cl==="per2"){
            this.setState({ perValue2 : val });
            this.setState({ perLabel2: label},this.perTotalOf2);
        }
        // if(cl==="per3"){
        //     this.setState({ perValue3: val});
        //     this.setState({ perLabel3: label});
        // }
        if(cl==="per4"){
            this.setState({ perValue4: val});
            this.setState({ perLabel4: label},this.perTotalOf34567);
        }
        if(cl==="per5"){
            this.setState({ perValue5: val});
            this.setState({ perLabel5: label},this.perTotalOf34567);
        }
        if(cl==="per6"){
            this.setState({ perValue6: val});
            this.setState({ perLabel6: label},this.perTotalOf34567);
        }
        if(cl==="per7"){
            this.setState({ perValue7: val});
            this.setState({ perLabel7: label},this.perTotalOf34567);
        }
        if(cl==="per8"){
            this.setState({ perValue8: val});
            this.setState({ perLabel8: label},this.perTotalOf8910);
        }
        if(cl==="per9"){
            this.setState({ perValue9: val});
            this.setState({ perLabel9: label},this.perTotalOf8910);
        }
        if(cl==="per10"){
            this.setState({ perValue10: val});
            this.setState({ perLabel10: label},this.perTotalOf8910);
        }
        if(cl==="per11"){
            this.setState({ perValue11 : val });
            this.setState({ perLabel11: label},this.perTotalOf11);
        }
        if(cl==="per12"){
            this.setState({ perValue12 : val });
            this.setState({ perLabel12: label},this.perTotalOf12_13_14_15);
        }
        if(cl==="per13"){
            this.setState({ perValue13: val});
            this.setState({ perLabel13: label},this.perTotalOf12_13_14_15);
        }
        if(cl==="per14"){
            this.setState({ perValue14: val});
            this.setState({ perLabel14: label},this.perTotalOf12_13_14_15);
        }
        if(cl==="per15"){
            this.setState({ perValue15: val});
            this.setState({ perLabel15: label},this.perTotalOf12_13_14_15);
        }
        if(cl==="per16"){
            this.setState({ perValue16: val});
            this.setState({ perLabel16: label},this.perTotalOf16_17_18_19);
        }
        if(cl==="per17"){
            this.setState({ perValue17: val});
            this.setState({ perLabel17: label},this.perTotalOf16_17_18_19);
        }
        if(cl==="per18"){
            this.setState({ perValue18: val});
            this.setState({ perLabel18: label},this.perTotalOf16_17_18_19);
        }
        if(cl==="per19"){
            this.setState({ perValue19: val});
            this.setState({ perLabel19: label},this.perTotalOf16_17_18_19);
        }
        if(cl==="per20"){
            this.setState({ perValue20: val});
            this.setState({ perLabel20: label},this.perTotalOf20);
        }
        if(cl==="per21"){
            this.setState({ perValue21 : val });
            this.setState({ perLabel21: label},this.perTotalOf21_22_23);
        }
        if(cl==="per22"){
            this.setState({ perValue22 : val });
            this.setState({ perLabel22: label},this.perTotalOf21_22_23);
        }
        if(cl==="per23"){
            this.setState({ perValue23: val});
            this.setState({ perLabel23: label},this.perTotalOf21_22_23);
        }
      }
   
    
    render() {
        return (
            <div>
                {/* View Port */}
                <div className="col-lg-12 grid-margin justify-contents-center align-items-around text-center my-1 ">
                    
                    {/* First Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Awards</h3><h6 className="card-title text-right">{this.state.perTotalOf1}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="20" now={parseInt(this.state.perTotalOf1)} />
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
                                            {!this.state.perCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange}/>}
                                            {this.state.perCheck1 && <input type="checkbox" className="form-check-input" name="check1" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Earn awards/recognition, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per1" disabled={!this.state.perCheck1} className="text-center-select" value={this.state.perLabel1} onChange={this.handleChange}>
                                            {OptionSet8.map((option) => (
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

                    {/* Second Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Teaching Improvements</h3><h6 className="card-title text-right">{this.state.perTotalOf2}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="20" now={parseInt(this.state.perTotalOf2)} />
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
                                            {!this.state.perCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange}/>}
                                            {this.state.perCheck2 && <input type="checkbox" className="form-check-input" name="check2" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend courses/workshops on TLP, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per2" disabled={!this.state.perCheck2} className="text-center-select" value={this.state.perLabel2} onChange={this.handleChange}>
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

                    {/* Third Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Qualification and certifications</h3><h6 className="card-title text-right">{this.state.perTotalOf34567}</h6>
                        <ProgressBar variant="success" id="per-Value-bar" max="50" now={parseInt(this.state.perTotalOf34567)} />
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
                                            {!this.state.perCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange}/>}
                                            {this.state.perCheck3 && <input type="checkbox" className="form-check-input" name="check3" onChange={this.handleChange} checked/>}
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        Get PhD degree
                                    </td>
                                    {/* <td className='text-center'>
                                        <select name="per3" className="text-center-select" disabled={!this.state.perCheck3} value={this.state.perLabel3} onChange={this.handleChange} onClick={this.perTotalOf3}>
                                            {OptionSet3.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.perCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange}/>}
                                            {this.state.perCheck4 && <input type="checkbox" className="form-check-input" name="check4" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Get diploma, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per4" disabled={!this.state.perCheck4} className="text-center-select" value={this.state.perLabel4} onChange={this.handleChange}>
                                            {OptionSet1.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.perCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange}/>}
                                            {this.state.perCheck5 && <input type="checkbox" className="form-check-input" name="check5" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend 4-week MOOC,nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per5" disabled={!this.state.perCheck5} className="text-center-select" value={this.state.perLabel5} onChange={this.handleChange}>
                                            {OptionSet9.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.perCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange}/>}
                                            {this.state.perCheck6 && <input type="checkbox" className="form-check-input" name="check6" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend 8-week MOOC/1-week FDP, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per6" disabled={!this.state.perCheck6} className="text-center-select" value={this.state.perLabel6} onChange={this.handleChange}>
                                            {OptionSet10.map((option) => (
                                            <option key={option.label} label={option.label} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        {/* <button type="button"  padding="0" margin="0" className="btn btn-primary btn-rounded btn-md">✖</button>✔ */}
                                        <div className="form-check ml-4">
                                            <label className="form-check-label">
                                            {!this.state.perCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange}/>}
                                            {this.state.perCheck7 && <input type="checkbox" className="form-check-input" name="check7" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend 12-week MOOC/2-week FDP, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per7" disabled={!this.state.perCheck7} className="text-center-select" value={this.state.perLabel7} onChange={this.handleChange}>
                                            {OptionSet11.map((option) => (
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

                    {/* Fourth Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Technical publications</h3><h6 className="card-title text-right">{this.state.perTotalOf8910}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="100" now={parseInt(this.state.perTotalOf8910)} />
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
                                            {!this.state.perCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange}/>}
                                            {this.state.perCheck8 && <input type="checkbox" className="form-check-input" name="check8" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Publish SCI/WoS/Indexed journal paper, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per8" disabled={!this.state.perCheck8} className="text-center-select" value={this.state.perLabel8} onChange={this.handleChange}>
                                            {OptionSet12.map((option) => (
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
                                            {!this.state.perCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange}/>}
                                            {this.state.perCheck9 && <input type="checkbox" className="form-check-input" name="check9" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Present conference paper, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per9" disabled={!this.state.perCheck9} className="text-center-select" value={this.state.perLabel9} onChange={this.handleChange}>
                                            {OptionSet13.map((option) => (
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
                                            {!this.state.perCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange}/>}
                                            {this.state.perCheck10 && <input type="checkbox" className="form-check-input" name="check10" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Review journal/conference paper, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per10" disabled={!this.state.perCheck10} className="text-center-select" value={this.state.perLabel10} onChange={this.handleChange}>
                                            {OptionSet13.map((option) => (
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

                    {/* Fifth Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Patents</h3><h6 className="card-title text-right">{this.state.perTotalOf11}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="20" now={parseInt(this.state.perTotalOf11)} />
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
                                            {!this.state.perCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange}/>}
                                            {this.state.perCheck11 && <input type="checkbox" className="form-check-input" name="check11" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Publish patent, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per11" disabled={!this.state.perCheck11} className="text-center-select" value={this.state.perLabel11} onChange={this.handleChange}>
                                            {OptionSet8.map((option) => (
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

                    {/* Sixth Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Authoring books</h3><h6 className="card-title text-right">{this.state.perTotalOf12_13_14_15}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="40" now={parseInt(this.state.perTotalOf12_13_14_15)} />
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
                                            {!this.state.perCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange}/>}
                                            {this.state.perCheck12 && <input type="checkbox" className="form-check-input" name="check12" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Author book, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per12" disabled={!this.state.perCheck12} className="text-center-select" value={this.state.perLabel12} onChange={this.handleChange}>
                                            {OptionSet14.map((option) => (
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
                                            {!this.state.perCheck13 && <input type="checkbox" className="form-check-input" name="check13" onChange={this.handleChange}/>}
                                            {this.state.perCheck13 && <input type="checkbox" className="form-check-input" name="check13" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Translate book/course material, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per13" disabled={!this.state.perCheck13} className="text-center-select" value={this.state.perLabel13} onChange={this.handleChange}>
                                            {OptionSet14.map((option) => (
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
                                            {!this.state.perCheck14 && <input type="checkbox" className="form-check-input" name="check14" onChange={this.handleChange}/>}
                                            {this.state.perCheck14 && <input type="checkbox" className="form-check-input" name="check14" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Review book, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per14" disabled={!this.state.perCheck14} className="text-center-select" value={this.state.perLabel14} onChange={this.handleChange}>
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
                                            {!this.state.perCheck15 && <input type="checkbox" className="form-check-input" name="check15" onChange={this.handleChange}/>}
                                            {this.state.perCheck15 && <input type="checkbox" className="form-check-input" name="check15" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Author book chapter, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per15" disabled={!this.state.perCheck15} className="text-center-select" value={this.state.perLabel15} onChange={this.handleChange} >
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

                    {/* SValueh Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Attending QIPs</h3><h6 className="card-title text-right">{this.state.perTotalOf16_17_18_19}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="20" now={parseInt(this.state.perTotalOf16_17_18_19)} />
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
                                            {!this.state.perCheck16 && <input type="checkbox" className="form-check-input" name="check16" onChange={this.handleChange}/>}
                                            {this.state.perCheck16 && <input type="checkbox" className="form-check-input" name="check16" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend 1-week workshop, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per16" disabled={!this.state.perCheck16} className="text-center-select" value={this.state.perLabel16} onChange={this.handleChange}>
                                            {OptionSet17.map((option) => (
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
                                            {!this.state.perCheck17 && <input type="checkbox" className="form-check-input" name="check17" onChange={this.handleChange}/>}
                                            {this.state.perCheck17 && <input type="checkbox" className="form-check-input" name="check17" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend 2-week workshop, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per17" disabled={!this.state.perCheck17} className="text-center-select" value={this.state.perLabel17} onChange={this.handleChange}>
                                            {OptionSet18.map((option) => (
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
                                            {!this.state.perCheck18 && <input type="checkbox" className="form-check-input" name="check18" onChange={this.handleChange}/>}
                                            {this.state.perCheck18 && <input type="checkbox" className="form-check-input" name="check18" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend conference as delegate, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per18" disabled={!this.state.perCheck18} className="text-center-select" value={this.state.perLabel18} onChange={this.handleChange}>
                                            {OptionSet17.map((option) => (
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
                                            {!this.state.perCheck19 && <input type="checkbox" className="form-check-input" name="check19" onChange={this.handleChange}/>}
                                            {this.state.perCheck19 && <input type="checkbox" className="form-check-input" name="check19" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Attend refresher course
                                    </td>
                                    <td className='text-center'>
                                        <select name="per19" disabled={!this.state.perCheck19} className="text-center-select" value={this.state.perLabel19} onChange={this.handleChange}>
                                            {OptionSet18.map((option) => (
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

                    {/* Eighth Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Guest lectures</h3><h6 className="card-title text-right">{this.state.perTotalOf20}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="20" now={parseInt(this.state.perTotalOf20)} />
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
                                            {!this.state.perCheck20 && <input type="checkbox" className="form-check-input" name="check20" onChange={this.handleChange}/>}
                                            {this.state.perCheck20 && <input type="checkbox" className="form-check-input" name="check20" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Deliver guest lectures, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per20" disabled={!this.state.perCheck20} className="text-center-select" value={this.state.perLabel20} onChange={this.handleChange}>
                                            {OptionSet18.map((option) => (
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
                    
                    {/* Nine-th Container Card */}
                    <div className="card stretch-card mt-2 my-2">
                    <div className="card-body">
                        <h3 className="card-title text-left">Thesis guidance</h3><h6 className="card-title text-right">{this.state.perTotalOf21_22_23}</h6>
                        <ProgressBar variant="success"id="per-Value-bar" max="70" now={parseInt(this.state.perTotalOf21_22_23)} />
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
                                            {!this.state.perCheck21 && <input type="checkbox" className="form-check-input" name="check21" onChange={this.handleChange}/>}
                                            {this.state.perCheck21 && <input type="checkbox" className="form-check-input" name="check21" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Guide PhD student
                                    </td>
                                    <td className='text-center'>
                                        <select name="per21" disabled={!this.state.perCheck21} className="text-center-select" value={this.state.perLabel21} onChange={this.handleChange}>
                                            {OptionSet19.map((option) => (
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
                                            {!this.state.perCheck22 && <input type="checkbox" className="form-check-input" name="check22" onChange={this.handleChange}/>}
                                            {this.state.perCheck22 && <input type="checkbox" className="form-check-input" name="check22" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Guide PG thesis, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per22" disabled={!this.state.perCheck22} className="text-center-select" value={this.state.perLabel22} onChange={this.handleChange}>
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
                                            {!this.state.perCheck23 && <input type="checkbox" className="form-check-input" name="check23" onChange={this.handleChange}/>}
                                            {this.state.perCheck23 && <input type="checkbox" className="form-check-input" name="check23" onChange={this.handleChange} checked/>}
                                            <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        Guide UG thesis, nos
                                    </td>
                                    <td className='text-center'>
                                        <select name="per23" disabled={!this.state.perCheck23} className="text-center-select" value={this.state.perLabel23} onChange={this.handleChange}>
                                            {OptionSet17.map((option) => (
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

export default PersonalServices;
