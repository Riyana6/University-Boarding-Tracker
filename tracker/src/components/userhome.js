import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Boarding Name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
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
                            <option value="1">Only for males</option>
                            <option value="2">Only for females</option>
                        </select>
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Additional Details
                        </label>
                        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                            <MDBBtn color="unique" type="submit">
                                Register
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;