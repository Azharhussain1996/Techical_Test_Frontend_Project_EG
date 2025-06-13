import React, { useState, useEffect, useRef } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import MuiTextField from "components/form/TextField";
// import InputMask from 'react-input-mask';
import InputMaskField from "components/form/InputMaskField";
import SelectField from "components/form/SelectField";
import Disclaimer from "components/form/Disclaimer";
import authService from "services/authService";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ClearIcon from "@mui/icons-material/Clear";
import { useErrorHandler } from "global/Error-Handler";
import userService from "services/userService";
import ComboBox from "components/form/ComboBox";
import ProfileUploadRound from "components/profile/UploadProfileRound";
import { useMediaQuery } from "@mui/material";
import GLOBAL from "global/Global-Variables";
import { ScrollToFieldError } from "hooks/FocusError";
import { allowedFileTypes } from "global/Document-Ext";
import { IMaskInput } from "react-imask";
import { TextField } from "@mui/material";

const formSignInSchema = Yup.object().shape({
  UserName: Yup.string()
    .matches(
      /^[0-9A-Za-z _.\-]{3,16}$/,
      "Username must be 3-16 characters, letters, and numbers, '_', '.' or '-' only"
    )
    .required("Please Enter Your Username"),
  CrmRegistrationNo: Yup.string()
    .matches(
      /^[0-9A-Za-z\-]{1,20}$/,
      "Registeration Number must be less than 20 characters '_', '.' or '-' only"
    )
    .required("Please Enter Registration No"),
  FullName: Yup.string()
    .matches(
      /^[0-9A-Za-z _.\-]{3,100}$/,
      "Full Name must be between 3 to 100 characters '_', '.' or '-' only"
    )
    .required("Please Enter Full Name"),
  Gender: Yup.string().required("Please Select Gender"),
  CnicNo: Yup.string()
    .matches(/^\d{5}-\d{7}-\d$/, "Invalid CNIC format. Must be XXXXX-XXXXXXX-X")
    .required("Please Enter Cnic No"),
  Email: Yup.string().email().required("Please Enter Email"),
  // MobileNo: Yup.string().matches(/^03\d{2}-\d{7}$/, "Invalid phone number format must be 11 digits.").required("Please Enter Mobile Number"),
  MobileNo: Yup.string()
    .matches(/^03\d{2}-\d{7}$/, "Invalid mobile number format")
    .required("Mobile number is required"),
  PhoneNo: Yup.string()
    .matches(
      /^0\d{2,4}\d{6,8}$/,
      "Phone number must follow Pakistani format (e.g., 03XXXXXXXXX or 0XXXXXXXXX)"
    )
    .required("Please Enter Phone Number"),
  CountryId: Yup.string().required("Please Select Country"),
  CityId: Yup.number()
    .typeError("Please Select city.")
    .required("Please Select city."),
  TemporaryAddress: Yup.string()
    .matches(
      /^[0-9A-Za-z _.,#\-]{3,200}$/,
      "Temporary Address must be between 3 to 200 characters '_', '.' , '#' , ',' or '-' only"
    )
    .required("Please Enter Temporary Address"),
  PermanentAddress: Yup.string()
    .matches(
      /^[0-9A-Za-z _.,#\-]{3,200}$/,
      "Permanent Address must be between 3 to 200 characters '_', '.' , '#' , ',' or '-' only"
    )
    .required("Please Enter Permanent Address"),
  Password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(/^\S*$/, "Password cannot contain spaces"),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("Password"), null], "Password does not match")
    .matches(/^\S*$/, "Password cannot contain spaces"),
  SwdName: Yup.string()
    .matches(
      /^[0-9A-Za-z _.\-]{3,100}$/,
      "S/o W/o D/o wdName must be between 3 to 100 characters '_', '.' or '-' only"
    )
    .required("Please Enter Son of S/o,Wife of W/o,Father of F/o Name"),
  ProfileImage: Yup.mixed()
    .required("Profile Image is required")
    .test(
      "fileType",
      "Only image files are allowed.",
      (value) => !value || value.type.startsWith("image/")
    )
    .test(
      "fileSize",
      "Profile image must be less than 5MB",
      (value) => !value || value.size <= 5 * 1024 * 1024
    ),
  
});

const initialValues = {
  CrmRegistrationNo: "",
  UserName: "",
  FullName: "",
  Gender: "",
  CnicNo: "",
  Email: "",
  MobileNo: "",
  PhoneNo: "",
  CountryId: "",
  CityId: "",
  CityName: "",
  TemporaryAddress: "",
  PermanentAddress: "",
  Password: "",
  ConfirmPassword: "",
  SwdName: "",
  Terms: "",
  ProfileImage: null,
  AttachedDocument: [],
};

function Signup() {
  const navigate = useNavigate();
  const formikRef = useRef(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { handleError } = useErrorHandler();
  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [profile, setProfile] = useState({});
  const [buttonText, setButtonText] = useState("Upload");
  const [currentDocumentType, setCurrentDocumentType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const documentInputRef = useRef(null);
  const [documentOptions, setDocumentOptions] = useState([]);
  const [loading, setLoading] = useState({
    country: false,
    city: false,
  });

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setSelectedCountry(selectedCountryId);
  };

  const handleDocumentTypeChange = (event) => {
    setCurrentDocumentType(event.target.value);
    setIsUploading(false);
  };

  const getDocmentType = () => {
    userService
      .GetDocmentType({ docFor: `${GLOBAL.DOCUMENT}` })
      .then((res) => {
        if (res.data) {
          setDocumentOptions(
            res.data.Data.filter(
              (doc) => doc.Value !== `${GLOBAL.DOCUMENTTYPE.PROFILE}`
            )
          );
        } else {
          enqueueSnackbar(
            res.data.Message
              ? res.data.Message
              : `${GLOBAL.SOMETHING_WENT_WRONG}`,
            {
              variant: res.data.Type,
              autoHideDuration: 3000,
            }
          );
        }
      })
      .catch((err) => {
        handleError(err);
      });
  };

  const handleFileChange = (event) => {
    const maxSize = 10 * 1024 * 1024;
    const file = event.target.files[0];
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(
      (item) =>
        allowedFileTypes.some((type) => type == item.type) &&
        item.size <= maxSize
    );
    if (!file) return;
    if (validFiles.length !== selectedFiles.length) {
      enqueueSnackbar(`${GLOBAL.FILELIMIT}`, {
        variant: `${GLOBAL.MESSAGE.ERROR}`,
        autoHideDuration: 3000,
      });
      return;
    }
    setUploadedFiles((prevFiles) => {
      const filesWithType = validFiles.map((file) => ({
        file,
        documentType: currentDocumentType,
      }));
      const updatedFiles = [...prevFiles, ...filesWithType];
      // formikRef.current.setFieldValue("AttachedDocument", updatedFiles);
      // formikRef.current.setFieldTouched("AttachedDocument", true, false);
      setTimeout(() => {
        formikRef.current.setFieldValue("AttachedDocument", updatedFiles);
        formikRef.current.setFieldTouched("AttachedDocument", true, false);
      }, 0);

      setCurrentDocumentType("");
      setIsUploading(true);

      return updatedFiles;
    });
    event.target.value = "";
  };

  const handleCopyAddress = (values, setFieldValue) => {
    setFieldValue("PermanentAddress", values.TemporaryAddress);
  };

  const handleDelete = (docType) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (file, index) => file.documentType != docType
      );
      return updatedFiles;
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2((prev) => !prev);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    if (values.Terms == `${GLOBAL.TERMS}`) {
      const uploadedDocumentTypes = uploadedFiles.map(
        (file) => file.documentType
      );
      const missingDocuments = documentOptions.filter(
        (doc) => !uploadedDocumentTypes.includes(doc.Value)
      );
      if (missingDocuments.length > 0) {
        setSubmitting(false);
        formikRef.current.setFieldError(
          "AttachedDocument",
          <>
            Please attach:
            <ul>
              {missingDocuments.map((doc) => (
                <li key={doc.Value}>{doc.Text}</li>
              ))}
            </ul>
          </>
        );
      } else {
        const attach = [
          ...uploadedFiles,
          { file: profile, documentType: `${GLOBAL.DOCUMENTTYPE.PROFILE}` },
        ];
        formData.append("CrmRegistrationNo", values.CrmRegistrationNo.trim());
        formData.append("CityId", values.CityId);
        formData.append("CityName", values.CityName.trim());
        formData.append("CnicNo", values.CnicNo);
        formData.append("CountryId", selectedCountry);
        formData.append("Email", values.Email.trim());
        formData.append("FullName", values.FullName.trim());
        formData.append("Gender", values.Gender);
        formData.append("MobileNo", values.MobileNo);
        formData.append("Password", values.Password);
        formData.append("PermanentAddress", values.PermanentAddress.trim());
        formData.append("PhoneNo", values.PhoneNo);
        formData.append("SwdName", values.SwdName.trim());
        formData.append("TemporaryAddress", values.TemporaryAddress.trim());
        formData.append("UserName", values.UserName.trim());
        formData.append("Terms", values.Terms);
        formData.append(
          `AttachedDocument.vKey`,
          values.CrmRegistrationNo.trim()
        );
        Array.from(attach).forEach((file, index) => {
          formData.append(
            `AttachedDocument.UploadedFile[${index}].File`,
            file.file
          );
          formData.append(
            `AttachedDocument.UploadedFile[${index}].DocKey`,
            file.documentType
          );
        });
        setSubmitting(true);
        authService
          .SignUp(formData)
          .then((res) => {
            setSubmitting(false);
            if (res.data.HttpStatusCode === 200) {
              enqueueSnackbar(
                res.data.Message || `${GLOBAL.SOMETHING_WENT_WRONG}`,
                {
                  variant: res.data.Type,
                  autoHideDuration: 2000,
                }
              );
              navigate("/");
              resetForm(true);
            } else {
              enqueueSnackbar(
                res.data.Message || `${GLOBAL.SOMETHING_WENT_WRONG}`,
                {
                  variant: res.data.Type,
                  autoHideDuration: 2000,
                }
              );
            }
          })
          .catch((err) => {
            setSubmitting(false);
            enqueueSnackbar(err.Message || `${GLOBAL.SOMETHING_WENT_WRONG}`, {
              variant: `${GLOBAL.MESSAGE.ERROR}`,
              autoHideDuration: 2000,
            });
          });
      }
    } else {
      enqueueSnackbar(`${GLOBAL.TERMANDCONDITION}`, {
        variant: `${GLOBAL.MESSAGE.ERROR}`,
        autoHideDuration: 2000,
      });
    }
  };

  const getCountryData = () => {
    setLoading((prev) => ({ ...prev, country: true }));
    userService
      .GetCountryData()
      .then((res) => {
        setLoading((prev) => ({ ...prev, country: false }));
        if (res.data) {
          setCountryData(JSON.parse(res.data.Data));
        } else {
          enqueueSnackbar(
            res.data.Message
              ? res.data.Message
              : `${GLOBAL.SOMETHING_WENT_WRONG}`,
            {
              variant: res.data.Type,
              autoHideDuration: 3000,
            }
          );
        }
      })
      .catch((err) => {
        setLoading((prev) => ({ ...prev, country: false }));
        handleError(err);
      });
  };

  const GetCityData = () => {
    setLoading((prev) => ({ ...prev, city: true }));
    userService
      .GetCityData({ countryId: selectedCountry })
      .then((res) => {
        setLoading((prev) => ({ ...prev, city: false }));
        if (res.data) {
          setCityData(JSON.parse(res.data.Data));
        } else {
          enqueueSnackbar(
            res.data.Message
              ? res.data.Message
              : `${GLOBAL.SOMETHING_WENT_WRONG}`,
            {
              variant: res.data.Type,
              autoHideDuration: 3000,
            }
          );
        }
      })
      .catch((err) => {
        setLoading((prev) => ({ ...prev, city: false }));

        handleError(err);
      });
  };

  const handleFileUpload = (file) => {
    setProfile(file);
  };

  useEffect(() => {
    getDocmentType(`${GLOBAL.DOCUMENT}`);
    setIsConfirmOpen(true);
    getCountryData();

    if (selectedCountry) {
      setIsConfirmOpen(false);
      GetCityData();
    }
  }, [selectedCountry]);

  return (
    <>
      <div className="col-xl-8">
        <div className="card auth-card">
          <div className="card-body px-1 py-2">
            <div className="px-4 mt-2">
              <h2 className="fw-bold text-uppercase text-center fs-18 mb-0">
                Sign Up
              </h2>
              <Formik
                innerRef={formikRef}
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={formSignInSchema}
                onSubmit={handleSubmit}
                className="authentication-form"
              >
                {(formik) => {
                  const {
                    values,
                    errors,
                    touched,
                    setFieldValue,
                    setFieldTouched,
                    isSubmitting,
                  } = formik;
                  return (
                    <Form>
                      <ScrollToFieldError />
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                          <ProfileUploadRound
                            onFileUpload={handleFileUpload}
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                            error={errors.ProfileImage}
                            touched={touched.ProfileImage}
                          />
                        </Grid>
                        <Grid item xs={12} md={12} className="pt-0">
                          <MuiTextField
                            label="Registration No"
                            id="CrmRegistrationNo"
                            formik={formik}
                            inputProps={{
                              maxLength: 20,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginTop: "1px" }}>
                          <MuiTextField
                            label="User Name"
                            id="UserName"
                            formik={formik}
                            inputProps={{
                              maxLength: 16,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="Password"
                            id="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                  >
                                    {!showPassword ? (
                                      <VisibilityOff fontSize="small" />
                                    ) : (
                                      <Visibility fontSize="small" />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            formik={formik}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="Confirm Password"
                            id="ConfirmPassword"
                            type={showPassword2 ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={handleClickShowPassword2}
                                    edge="end"
                                  >
                                    {!showPassword2 ? (
                                      <VisibilityOff fontSize="small" />
                                    ) : (
                                      <Visibility fontSize="small" />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            formik={formik}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginTop: "1px" }}>
                          <MuiTextField
                            label="Full Name"
                            id="FullName"
                            formik={formik}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginTop: "1px" }}>
                          <MuiTextField
                            label="S/o, W/o, F/o"
                            id="SwdName"
                            formik={formik}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="CNIC"
                            id="CnicNo"
                            formik={formik}
                            mask="00000-0000000-0"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="Mobile No"
                            id="MobileNo"
                            formik={formik}
                            mask="0000-0000000"
                            placeholder="03__-_______"
                            unmask={false}
                            prefix="03"
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="Phone Number"
                            id="PhoneNo"
                            formik={formik}
                            caption="Format: 03XXXXXXXXX or 0XXXXXXXXXX "
                            InputProps={{
                              onChange: (e) => {
                                const numericValue = e.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                formik.setFieldValue("PhoneNo", numericValue);
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MuiTextField
                            label="Email"
                            id="Email"
                            type="email"
                            formik={formik}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <label htmlFor="Gender" className="form-label">
                            Gender
                          </label>
                          <SelectField
                            name="Gender"
                            data={[
                              { value: "1", text: "Male" },
                              { value: "2", text: "Female" },
                              { value: "3", text: "Others" },
                            ]}
                          />
                          {/* {formik.touched.Gender && formik.errors.Gender && (
                            <div className="alert-gender">
                              {formik.errors.Gender}
                            </div>
                          )} */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <label htmlFor="CountryId" className="form-label">
                            Country
                          </label>
                          <SelectField
                            name="CountryId"
                            data={countryData}
                            isLoading={loading.country}
                            onChange={(event) => {
                              handleCountryChange(event);
                            }}
                          />
                          {/* {formik.touched.CountryId &&
                            formik.errors.CountryId && (
                              <div className="danger">
                                {formik.errors.CountryId}
                              </div>
                            )} */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <label htmlFor="CityId" className="form-label">
                            City
                          </label>

                          <ComboBox
                            options={cityData}
                            value={{
                              cityId: formik.values.CityId,
                              cityName: formik.values.CityName,
                            }}
                            loading={loading.city}
                            onChange={(value) => {
                              formik.setFieldValue(
                                "CityId",
                                Number(value.cityId)
                              );
                              formik.setFieldValue("CityName", value.cityName);
                            }}
                          />

                          {formik.touched.CityId && formik.errors.CityId && (
                            <div className="danger">{formik.errors.CityId}</div>
                          )}
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <div className="address-row d-flex">
                            <div className="flex-1">
                              <MuiTextField
                                label="Temporary Address"
                                id="TemporaryAddress"
                                formik={formik}
                                multiline
                                rows={3}
                                sx={{
                                  "& .MuiInputBase-root": {
                                    padding: "0px !important",
                                    "&.MuiOutlinedInput-root": {
                                      padding: "0px !important",
                                    },
                                  },
                                }}
                              />
                            </div>
                            <div className="d-flex align-items-center">
                              <button
                                type="button"
                                className="btn p-0 mt-0 mt-md-1 border-0 arrow-btn"
                                onClick={() =>
                                  handleCopyAddress(
                                    formik.values,
                                    formik.setFieldValue
                                  )
                                }
                              >
                                {isSmallScreen ? (
                                  <ArrowDownwardIcon fontSize="small" />
                                ) : (
                                  <ArrowForwardIcon fontSize="small" />
                                )}
                              </button>
                            </div>

                            <div className="flex-1">
                              <MuiTextField
                                label="Permanent Address"
                                id="PermanentAddress"
                                multiline
                                rows={3}
                                value={formik.values.PermanentAddress}
                                onChange={(e) =>
                                  formik.setFieldValue(
                                    "PermanentAddress",
                                    e.target.value
                                  )
                                }
                                formik={formik}
                                sx={{
                                  "& .MuiInputBase-root": {
                                    padding: "0px !important",
                                    "&.MuiOutlinedInput-root": {
                                      padding: "0px !important",
                                    },
                                  },
                                  "& .MuiFormHelperText-root": {
                                    minHeight: "20px",
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <div className="form-group mb-0 col-12  ">
                            <label className="form-label">
                              Attach Document
                              <span className="fs-6 text-danger ">
                                {" "}
                                ( CNIC and NOC is mandatory during sign up. )
                              </span>
                            </label>
                            <div className="d-flex">
                              <Field
                                as="select"
                                name="documentType"
                                className="form-control rounded-0"
                                onChange={handleDocumentTypeChange}
                                value={currentDocumentType}
                              >
                                <option value="" disabled>
                                  Select Document
                                </option>
                                {documentOptions.map((option, index) => {
                                  const isDisabled = uploadedFiles.some(
                                    (file) => file.documentType == option.Value
                                  );
                                  return (
                                    <option
                                      key={index}
                                      value={option.Value}
                                      disabled={isDisabled}
                                      className={`${isDisabled ? "text-muted" : "text-dark"
                                        }`}
                                    >
                                      {option.Text}
                                    </option>
                                  );
                                })}
                              </Field>
                              <button
                                type="button"
                                className="btn btn-md bg-success text-white border-0 rounded-0"
                                onClick={() => documentInputRef.current.click()}
                                disabled={!currentDocumentType || isUploading}
                              >
                                <input
                                  type="file"
                                  className="d-none"
                                  multiple
                                  ref={documentInputRef}
                                  accept="*/*"
                                  onChange={(e) => {
                                    handleFileChange(e, currentDocumentType);
                                  }}
                                />
                                {buttonText}
                              </button>
                            </div>
                            {errors?.AttachedDocument &&
                              touched?.AttachedDocument && (
                                <Typography
                                  color="error"
                                  variant="caption"
                                  className="mt-1"
                                >
                                  {errors?.AttachedDocument}
                                </Typography>
                              )}
                            {uploadedFiles.length > 0 && (
                              <Grid item xs={12} md={12}>
                                <ul className="p-0 mt-2">
                                  {uploadedFiles.map((file, index) => {
                                    const filter = documentOptions.find(
                                      (type) => type.Value == file.documentType
                                    );
                                    return (
                                      <li
                                        key={index}
                                        className="d-flex align-items-center justify-content-between bg-white ps-1 border-bottom"
                                      >
                                        <div className="col-5">
                                          <Typography
                                            variant="body2"
                                            color="primary"
                                          >
                                            {file.file.name}
                                          </Typography>
                                        </div>

                                        <div className="col-5">
                                          <Typography variant="body2">
                                            {filter.Text}
                                          </Typography>
                                        </div>
                                        <div
                                          className="btn p-1 col-2 d-flex justify-content-end"
                                          onClick={() =>
                                            handleDelete(filter.Value)
                                          }
                                        >
                                          <ClearIcon className="fs-5" />
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </Grid>
                            )}
                          </div>
                        </Grid>
                      </Grid>

                      <div className="d-flex justify-content-center mt-1 ">
                        <button
                          type="submit"
                          className="btn btn-primary py-2 fw-medium w-100"
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting ? (
                            <CircularProgress
                              size={24}
                              className="text-white"
                            />
                          ) : (
                            "Sign Up"
                          )}
                        </button>
                      </div>
                      <span className="d-flex justify-content-center text-center mb-4">
                        Already have account?
                        <Link
                          to={"/"}
                          className="ms-1 text-dark text-underline"
                        >
                          Sign in
                        </Link>
                      </span>

                      <Disclaimer
                        open={isConfirmOpen}
                        handleClose={() => {
                          setIsConfirmOpen(false);
                          setFieldValue("Terms", 1);
                        }}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
