import axiosClient from "./axiosClient";

const authenApi = {
  checkLogin: (data) => {
    const url = `/login.php`;
    return axiosClient.post(url, data);
  },
};

export default authenApi;
