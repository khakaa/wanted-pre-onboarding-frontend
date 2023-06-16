export const validationCheck = (email, password, setBtnState) => {
  if (email.includes("@") && password.length >= 8) {
    setBtnState(false);
  } else {
    setBtnState(true);
  }
};
