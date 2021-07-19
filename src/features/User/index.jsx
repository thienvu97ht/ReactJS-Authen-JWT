import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import userApi from "../../api/user";

UserFeature.propTypes = {};

function UserFeature(props) {
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await userApi.getUser();
      console.log(resp);
    };
    fetchData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    history.push("/login");
  };

  return (
    <div>
      <p>User</p>
      <button onClick={handleLogOut}>Đăng xuất</button>
    </div>
  );
}

export default UserFeature;
