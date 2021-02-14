import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default class UserHome extends Component {
    state = {
        files: []
      }
    
      fileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.files, ...e.target.files] })
      }
    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Enter your Boarding Details</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Boarding Name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Select the nearest university
                        </label>
                        <select id = "dropdown">
                                        <option value="N/A">Select your univeristy</option>
                                        <option value="1">University of Colombo</option>
                                        <option value="2">University of Moratuwa</option>
                                        <option value="3">University of Sri Jayewardenepura</option>
                                        <option value="4">University of Kelaniya</option>
                                        <option value="5">University of Peradeniya</option>
                                        <option value="6">University of Ruhuna</option>
                                        <option value="7">University of Jaffna</option>
                                        <option value="8">South Eastern University of Sri Lanka</option>
                                        <option value="9">Rajarata University of Sri Lanka</option>
                                        <option value="10">Wayamba University of Sri Lanka</option>
                                        <option value="11">Uva Wellassa University</option>
                                        <option value="12">Sabaragamuwa University of Sri Lanka</option>
                                        <option value="13">Eastern University of Sri Lanka</option>
                                        <option value="14">University of the Visual and Performing Arts</option>
                                        <option value="15">Buddhist and Pali University</option>
                                        <option value="16">Bhiksu University of Sri Lanka</option>
                                    </select>
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Address
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Contact No.
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Gender
                        </label>
                        <select id = "dropdown">
                            <option value="N/A">Select gender</option>
                            <option value="male">Only for males</option>
                            <option value="female">Only for females</option>
                        </select>
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Add Images
                        </label>
                        <input type="file" multiple onChange={this.fileSelectedHandler} />
                        <br/>
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Additional Details
                        </label>
                        <textarea rows="4" cols="100" name="skills"></textarea>
                        <div className="text-center mt-4">
                            
                            <MDBBtn color="primary" type="submit">
                                Add
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
            
        );
    }
}
