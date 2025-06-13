import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PATH_ROUTE from "routes/routeConstants";
import Cookies from "js-cookie";
import GLOBAL from "global/Global-Variables";
import { AESDecrypt } from "global/Crypto-Helper";
import { jwtDecode } from "jwt-decode";
import StringAvatar from "hooks/AvatarString";
import StyledBadge from "components/uielement/StyledBadge";
import {
  Avatar,
  DialogContent,
  DialogTitle,
  Typography,
  Dialog,
  IconButton,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useErrorHandler } from "global/Error-Handler";
import LoaderFade from "components/loaders/LoaderFade";

const AppNavbar = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { handleError } = useErrorHandler();
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(
    AESDecrypt(
      decodeURIComponent(Cookies.get(GLOBAL.APP_Access_Keys.ADMIN_ACCESS_TOKEN))
    )
  );
  const atoken = JSON.parse(
    AESDecrypt(
      decodeURIComponent(Cookies.get(GLOBAL.APP_Access_Keys.APP_ACCESS_TOKEN))
    )
  );
  const decodedToken = jwtDecode(token);
  console.log("token", token);
  console.log("decodedToken", decodedToken);
  const [image, setImage] = useState("");
  const avatarProps = StringAvatar({ name: decodedToken.sub });
  const ProfileImageURL = image
    ? `${import.meta.env.VITE_APP_API_DESIGN_BASE_URL}/images/${image}`
    : null;
  const [imageValid, setImageValid] = useState(null);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleLogout = () => {
    setLoading(true);

    sessionStorage.clear();
    localStorage.clear();
    localStorage.setItem("is_login", false);
    sessionStorage.setItem("is_login", false);

    // Object.keys(Cookies.get()).forEach((cookieName) => {
    //   Cookies.remove(cookieName, { path: "/" });
    // });
    Cookies.remove(GLOBAL.ACCESS_TOKEN, { path: "/" });
    Cookies.remove(GLOBAL.ADMIN_ACCESS_TOKEN, { path: "/" });
    setLoading(false);
    navigate(PATH_ROUTE.AUTHSIGNIN);

    // userService
    //   .Logout({ UserId: decodedToken.UserId })
    //   .then((res) => {
    //     const data = res?.data;
    //     setLoading(false);
    //     if (data.HttpStatusCode == 200) {
    //       setLoading(false);
    //       enqueueSnackbar(
    //         data?.Message ? data?.Message : GLOBAL.SOMETHING_WENT_WRONG,
    //         {
    //           variant: data?.Type.toLowerCase(),
    //           autoHideDuration: 3000,
    //         }
    //       );

    //       sessionStorage.clear();
    //       localStorage.clear();
    //       localStorage.setItem("is_login", false);
    //       sessionStorage.setItem("is_login", false);
    //       // Object.keys(Cookies.get()).forEach((cookieName) => {
    //       //   Cookies.remove(cookieName, { path: "/" });
    //       // });
    //       Cookies.remove(GLOBAL.ACCESS_TOKEN, { path: "/" });
    //       Cookies.remove(GLOBAL.ADMIN_ACCESS_TOKEN, { path: "/" });

    //       navigate(PATH_ROUTE.AUTHSIGNIN);
    //     }
    //   })
    //   .catch((err) => {
    //     handleError(err);
    //     setLoading(false);
    //   });
  };

  // useEffect(() => {
  //   userService
  //     .GetProfileImage({ registrationNo: decodedToken.RegistrationNo })
  //     .then((res) => {
  //       if (res.status == 200) {
  //         if (res.data && res.data.Data !== null) {
  //           setImage(res.data.Data);
  //         } else {
  //           setImage("");
  //         }
  //       } else {
  //         setImage("");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [decodedToken.RegistrationNo]);

  // useEffect(() => {
  //   if (ProfileImageURL) {
  //     userService
  //       .ProfileImage(ProfileImageURL)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setImageValid(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setImageValid(false);
  //       });
  //   } else {
  //     setImageValid(false);
  //   }
  // }, [ProfileImageURL]);
  return (
    <>
      <header className="topbar">
        <div className="container-fluid">
          {/* <div className="navbar-header d-flex align-items-center justify-content-end"> */}
          <div className="navbar-header ">
            <div className="d-flex align-items-center gap-2">
              <div className="topbar-item">
                <button
                  type="button"
                  className="button-toggle-menu topbar-button"
                >
                  <iconify-icon
                    icon="solar:hamburger-menu-broken"
                    class="fs-24 align-middle"
                  ></iconify-icon>
                </button>
              </div>
              {/* <AppSearch /> */}
            </div>

            <div className="d-flex align-items-center justify-content-end gap-1">
              <div className="topbar-item">
                <button
                  type="button"
                  className="topbar-button"
                  id="light-dark-mode"
                >
                  <iconify-icon
                    icon="solar:moon-bold-duotone"
                    class="fs-24 align-middle light-mode"
                  ></iconify-icon>
                  <iconify-icon
                    icon="solar:sun-2-bold-duotone"
                    class="fs-24 align-middle dark-mode"
                  ></iconify-icon>
                </button>
              </div>

              <div className="dropdown topbar-item d-none d-lg-flex">
                <button
                  type="button"
                  className="topbar-button"
                  data-toggle="fullscreen"
                >
                  <iconify-icon
                    icon="solar:full-screen-bold-duotone"
                    class="fs-24 align-middle fullscreen"
                  ></iconify-icon>
                  <iconify-icon
                    icon="solar:quit-full-screen-bold-duotone"
                    class="fs-24 align-middle quit-fullscreen"
                  ></iconify-icon>
                </button>
              </div>
              {/* <div className="dropdown topbar-item">
                <AppNotification />
              </div> */}
              <div className="dropdown topbar-item">
                <a
                  type="button"
                  className="topbar-button"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      {imageValid ? (
                        <Avatar src={ProfileImageURL} alt="Profile Image" />
                      ) : (
                        <Avatar {...avatarProps} />
                      )}
                    </StyledBadge>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <h6 className="dropdown-header">
                    Welcome {decodedToken.sub} !
                  </h6>
                  {/* <Link className="dropdown-item" to="#">
                    <iconify-icon icon="solar:help-bold-duotone" class="align-middle me-2 fs-18"></iconify-icon><span className="align-middle">Help</span>
                  </Link> */}

                  {/* <button className="dropdown-item " onClick={handleOpenDialog}>
                    <iconify-icon
                      icon="solar:lock-keyhole-bold-duotone"
                      class="align-middle me-2 fs-18"
                    ></iconify-icon>
                    <span className="align-middle">Change Password</span>
                  </button> */}
                  <div className="dropdown-divider my-1"></div>
                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    <iconify-icon
                      icon="solar:logout-3-bold-duotone"
                      class="align-middle me-2 fs-18"
                    ></iconify-icon>
                    <span className="align-middle">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Backdrop className="backdropScreen" open={loading}>
        <LoaderFade />
      </Backdrop>
      <Dialog
        open={openDialog}
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            handleCloseDialog();
          }
        }}
        fullWidth
        maxWidth="sm"
        className="p-3"
      >
        <div className="d-flex justify-content-between modal-header">
          <DialogTitle id="customized-dialog-title fw-sm modal-title m-0 p-2">
            <Typography variant="body1">Change Password</Typography>
          </DialogTitle>
          <IconButton
            onClick={handleCloseDialog}
            color="inherit"
            disableRipple
            className="icon-button btn-primary"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* <DialogContent className="p-4 pt-1 modal-body">
          <ChangePwd handleCloseDialogs={handleCloseDialog} />
        </DialogContent> */}
      </Dialog>
    </>
  );
};

export default AppNavbar;
