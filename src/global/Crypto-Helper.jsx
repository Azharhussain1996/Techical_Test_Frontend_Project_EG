import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

// var CryptoJS = await import("crypto-js");

// const dynamicValue = process.env.REACT_APP_SECRET_KEY;
const dynamicValue = import.meta.env.VITE_APP_SECRET_KEY;

export function AESEncrypt(pureText) {
  const privateKey = `${dynamicValue}`;
  let ciphertext = encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(pureText), privateKey).toString()
  );
  return ciphertext;
}

export function AESDecrypt(encryptedText) {
  const privateKey = `${dynamicValue}`;
  var bytes = CryptoJS.AES.decrypt(encryptedText, privateKey).toString(
    CryptoJS.enc.Utf8
  );
  var decryptedData = JSON.parse(bytes);
  return decryptedData;
}

export function Sha256Hash(id, first, last) {
  const pureText = `${first}-${id}-${last}`;
  const privateKey = `${dynamicValue}`;
  var hash = encodeURIComponent(
    Base64.stringify(hmacSHA512(pureText, privateKey))
  );
  return hash;
}
