export function addInfoCookie(infoCookie) {
  return {
    type: "SHOW_INFO",
    infoCookie,
  };
}

export function addFortuneCookie(fortuneCookie) {
  return {
    type: "ADD_COOKIE",
    fortuneCookie,
  };
}
