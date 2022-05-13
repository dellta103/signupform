import axios from "axios";

const BASEURL = "https://6201d07eb8735d00174cb5bc.mockapi.io/signupform";

export const signUpService = {
  signUp: (values) => {
    return axios({
      method: "POST",
      url: BASEURL,
      data: values,
    });
  },
};
