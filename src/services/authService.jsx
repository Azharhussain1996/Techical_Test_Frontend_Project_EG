import designApi from "../lib/http-common-design";
import adminApi from "../lib/http-common-admin";
import Cookies from "js-cookie";
import { AESEncrypt } from "global/Crypto-Helper";
import GLOBAL from "global/Global-Variables";
import { jwtDecode } from "jwt-decode";
import authHeader from "./authHeader";

let APP_API_URL = import.meta.env.VITE_APP_API_URL;
let ADMIN_API_URL = import.meta.env.VITE_APP_ADMIN__API_URL;

const SignIn = (formData) => {
  return adminApi
    .post(ADMIN_API_URL + "/Account/SignIn", formData, {
      headers: {
        "api-security-key": import.meta.env.VITE_APP_API_KEY,
      },
    })
    .then((response) => {
      if (response.data.HttpStatusCode === 200) {
        const decode = jwtDecode(response.data.Data);
        sessionStorage.setItem("is_login", true);
        localStorage.setItem("is_login", true);
        const encryptedAccessToken = AESEncrypt(
          JSON.stringify(response.data.Data)
        );
        const encryptedUserToken = AESEncrypt(
          JSON.stringify(response.data.Data)
        );
        Cookies.set(GLOBAL.ACCESS_TOKEN, encryptedAccessToken);
        Cookies.set(GLOBAL.ADMIN_ACCESS_TOKEN, encryptedUserToken);
      }
      return response.data;
    });
};

const SignUp = async (formData) => {
  return designApi.post(APP_API_URL + "/Account/SignUp", formData, {
    headers: {
      "api-security-key": import.meta.env.VITE_APP_API_KEY,
      "Content-Type": "multipart/form-data",
    },
  });
};

const changePwd = (formData) => {
  return adminApi.post(ADMIN_API_URL + "/Account/ChangePassword", formData, {
    headers: authHeader(),
  });
};

const authService = {
  changePwd,
  SignUp,
  SignIn,
};

export default authService;
