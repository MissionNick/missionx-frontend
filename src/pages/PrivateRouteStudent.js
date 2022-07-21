import { Outlet } from "react-router";
import axios from "axios";
import NeedLogIn from "../components/shared/NeedLogIn";
import { useState } from "react";

export default function PrivateRouteStudent({ isLoggedIn, setisLoggedIn }) {
  const [type, setType] = useState('')
    axios
      .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setisLoggedIn(res.data);
      });
  axios
    .post("http://localhost:4000/authenticate", {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data.type);
      setType(res.data.type);
    });
  if (!isLoggedIn | type !== 'student') {
    return <NeedLogIn userType="STUDENT"/>;
  } else {
    return <Outlet />;
      }
  }
