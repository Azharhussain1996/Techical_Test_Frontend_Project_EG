import React from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import PATH_ROUTE from "../../routes/routeConstants";
import { Formik, Form } from "formik";
import { useSnackbar } from "notistack";
import authService from "services/authService";
import * as Yup from "yup";
import MTextField from "components/uielement/MTextField";
import { useErrorHandler } from "global/Error-Handler";
import { jwtDecode } from "jwt-decode";
import GLOBAL from "global/Global-Variables";
import { useTheme } from "@mui/material/styles";

const formSignInSchema = Yup.object().shape({
  Username: Yup.string().required("Please Enter Your Username"),
  Password: Yup.string().required("Please Enter Password"),
});

const initialValues = {
  Username: "",
  Password: "",
};

function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { enqueueSnackbar } = useSnackbar();
  const { handleError } = useErrorHandler();

  const handleSubmit = (values, formikBag) => {
    const { setSubmitting, resetForm } = formikBag;
    var details = {
      Username: `${values.Username}`,
      Password: `${values.Password}`,
    };
    authService
      .SignIn(details)
      .then((res) => {
        setSubmitting(false);
        if (res.HttpStatusCode === 200) {
          enqueueSnackbar(res.Message, {
            variant: res.Type.toLowerCase(),
            autoHideDuration: 3000,
          });
          resetForm(true);
          navigate(`/${PATH_ROUTE.DASHBOARD}`);
        } else if (res.HttpStatusCode === 403) {
          // enqueueSnackbar(res.Message, {
          //   variant: res.Type.toLowerCase(),
          //   autoHideDuration: 3000,
          // });
          navigate(`/${PATH_ROUTE.COUNTDOWNTIMER}`, {
            state: { details },
          });
        } else {
          enqueueSnackbar(res.Message, {
            variant: res.Type.toLowerCase(),
            autoHideDuration: 3000,
          });
        }
      })
      .catch((err) => {
        setSubmitting(false);
        handleError(err);
      });
  };

  return (
    <>
      <div className="col-xl-5">
        <div className="card auth-card">
          <div className="card-body px-3 py-5">
            <h2 className="fw-bold text-uppercase text-center fs-18">
              Sign In
            </h2>
            <p className="text-muted text-center mt-1 mb-4">
              Enter your username and password to access Dashboard.
            </p>
            <div className="px-4">
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={formSignInSchema}
                onSubmit={handleSubmit}
                className="authentication-form"
              >
                {(formik) => (
                  <>
                    <Form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Username">
                          Username
                        </label>
                        <TextField
                          id="Username"
                          name="Username"
                          placeholder="Enter your username"
                          fullWidth
                          sx={MTextField}
                          className="form-control bg-light text-dark bg-opacity-50 border-light"
                          {...formik.getFieldProps("Username")}
                          error={formik.errors.Username ? true : false}
                        />
                        {formik.touched["Username"] &&
                          Boolean(formik.errors["Username"]) && (
                            <FormHelperText error>
                              {formik.errors["Username"]}
                            </FormHelperText>
                          )}
                      </div>
                      <div className="mb-3">
                        {/* <Link
                          // to={`/auth/${PATH_ROUTE.FORGETPASSWORD}`}
                          className="float-end text-muted text-unline-dashed ms-1"
                        >
                          Forgot Password ?
                        </Link> */}
                        <label htmlFor="Password" className="form-label">
                          Password
                        </label>
                        <TextField
                          id="Password"
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          {...formik.getFieldProps("Password")}
                          error={formik.errors.Password ? true : false}
                          // helperText={formik.errors.Password}
                          fullWidth
                          sx={MTextField}
                          className="form-control bg-light bg-opacity-50 border-light  w-100"
                          InputProps={{
                            // className: "form-control bg-light bg-opacity-50 border-light py-2 w-100",
                            // disableUnderline: true,
                            className: "border-none",
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility className="fs-15" />
                                  ) : (
                                    <VisibilityOff className="fs-15" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched["Password"] &&
                          Boolean(formik.errors["Password"]) && (
                            <FormHelperText error>
                              {formik.errors["Password"]}
                            </FormHelperText>
                          )}
                      </div>

                      {/* <div className="mb-3">
                        <div className="form-check form-checkbox-warning ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheckcolor4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckcolor4"
                          >
                            Remember me
                          </label>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="mb-1 text-center d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary py-2 fw-medium"
                            disabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting && (
                              <CircularProgress
                                className="text-white"
                                size={24}
                              />
                            )}
                            {!formik.isSubmitting && "Sign In"}
                          </button>
                        </div>
                        {/* <Typography
                          variant="span"
                          className="d-flex justify-content-center"
                        >
                          OR
                        </Typography>
                        <div className="mt-1 text-center d-grid">
                          <button
                            type="button"
                            className="btn btn-outline-primary py-2 fw-medium"
                            onClick={() =>
                              navigate(`/auth/${PATH_ROUTE.AUTHSIGNUP}`)
                            }
                          >
                            Sign Up
                          </button>
                        </div> */}
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
}

export default SignIn;
