export const firebase = process.env.REACT_APP_FIREBASE_API_KEY;
export const unsplash = process.env.REACT_APP_UNSPLASH_API_KEY;

export const authErrorMsg = {
  EMAIL_EXISTS: { type: "email", message: "Email exists! Try to sign in!" },
  OPERATION_NOT_ALLOWED: {
    type: "password",
    message: "Operation not allowed!",
  },
  TOO_MANY_ATTEMPTS_TRY_LATER: {
    type: "email",
    message: "Too many  attempts! Try later!",
  },
  EMAIL_NOT_FOUND: { type: "email", message: "Email not found!" },
  INVALID_PASSWORD: { type: "password", message: "Wrong password!" },
  USER_DISABLED: { type: "email", message: "User disabled!" },
};
