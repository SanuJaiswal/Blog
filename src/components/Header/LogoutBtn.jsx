import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { Button } from "../index";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Button
      onClick={logoutHandler}
      className="inline-block duration-200 hover:bg-blue-100 "
    >
      LogOut
    </Button>
  );
}

export default LogoutBtn;
