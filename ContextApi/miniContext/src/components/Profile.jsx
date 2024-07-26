import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please log In</div>;

  return <div>Welcome{user.username}</div>;
};

export default Profile;