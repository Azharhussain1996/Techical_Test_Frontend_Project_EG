import React from "react";
import {
  Box,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import PATH_ROUTE from "../../routes/routeConstants";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";


const formOTPSchema = Yup.object().shape({
  CellNo: Yup.string().required("Please enter a Phone Number.").matches(/^[0-9]{12}$/, "Contact number must be 12 digits"),
});

const initialValues = {
  CellNo: "",
};

const Login = () => {
  const navigate = useNavigate();
  const handleSubmitOTP = (values, formikBag) => {
    const { setSubmitting, resetForm } = formikBag;
    setSubmitting(false);
  }
  return (
    <>
      <div className="col-xl-5">
        <div className="card auth-card">
          <div className="card-body px-3 py-5">
            <h2 className="fw-bold text-uppercase text-center fs-18">Sign In</h2>
            <p className="text-muted text-center mt-1 mb-4">Enter the mobile number associated with your account.</p>
            <div className="px-4">
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={formOTPSchema}
                onSubmit={handleSubmitOTP}
                className="authentication-form"
              >
                {(formik) => (
                  <>
                    <Form>
                      <Box>
                        <label className="form-label" htmlFor="CellNo">Phone Number</label>
                        <PhoneInput
                          inputProps={{
                            name: "CellNo",
                            required: true,
                            autoFocus: true,
                            id: "CellNo",
                            className: "form-control bg-light bg-opacity-50 border-light py-2 w-100",
                          }}
                          onlyCountries={["pk"]}
                          countryCodeEditable={false}
                          country={"pk"}
                          onChange={(e) => {
                            formik.setFieldValue("CellNo", e, true);
                          }}
                        />

                      </Box>
                      <small className="text-muted text-left mt-1 ">
                        * OTP to converted SIM numbers is currently unavailable.
                      </small>
                      {formik.errors.CellNo && (
                        <FormHelperText error={true}>
                          {formik.errors.CellNo}
                        </FormHelperText>
                      )}
                      <div className="row mt-3">
                        <div className="mb-1 text-center d-grid">
                          <button
                            type="submit"
                            className="btn btn-warning py-2 fw-medium"
                            disabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting && (
                              <CircularProgress color="success" size={18} />
                            )}
                            {!formik.isSubmitting && "Request OTP"}
                          </button>
                        </div>
                        <p className="mt-1 fw-semibold no-span">OR</p>
                        <div className="mb-1 text-center d-grid">
                          <button className="btn btn-outline-warning py-2 fw-medium " onClick={() => navigate('/')}
                          >Sign In </button>
                        </div>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
