
import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
import {useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, Alert } from '@mui/material';
import CustomizedSnackbarProvider from "./components/alerts/SnackbarProvider";


function CustomAlertSnackbar({ message, variant }) {
  return (
    <Alert severity={variant} sx={{ width: '100%' }}>
      {message}
    </Alert>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
const onClickDismiss = (key) => {
  notistackRef.current.closeSnackbar(key);
};
const notistackRef = createRef();

root.render(
  <Provider store={store}>
    <CustomizedSnackbarProvider>
      <App />
    </CustomizedSnackbarProvider>
  </Provider>
);
reportWebVitals();
