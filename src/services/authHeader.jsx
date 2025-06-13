import Cookies from "js-cookie";
import { AESDecrypt } from "global/Crypto-Helper";
import GLOBAL from "global/Global-Variables";
import { jwtDecode } from "jwt-decode";

export default function authHeader() {
  const access_token = JSON.parse(
    AESDecrypt(
      decodeURIComponent(Cookies.get(GLOBAL.APP_Access_Keys.APP_ACCESS_TOKEN))
    )
  );
  const token = access_token;
  const token1 = JSON.parse(
    AESDecrypt(
      decodeURIComponent(Cookies.get(GLOBAL.APP_Access_Keys.ADMIN_ACCESS_TOKEN))
    )
  );
  const tokenExpiry = jwtDecode(token1);
  const expiry = tokenExpiry.exp;
  const tokenExpiryDate = new Date(expiry * 1000);
  const formattedExpiryDate = tokenExpiryDate.toUTCString();
  if (token) {
    return {
      Authorization: "Bearer " + token,
      "api-security-key": import.meta.env.VITE_APP_API_KEY,
      "Content-Type": "application/json-patch+json",
      credentials: "include",
      "same-site": "None",
      "x-token-expiry": formattedExpiryDate,
    };
  } else {
    return {};
  }
}
