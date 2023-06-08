import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";
import Main from "../layout/Main";

  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <LoginForm></LoginForm>
        },
        {
            path: 'register',
            element: <RegisterForm></RegisterForm>
        }
      ]
    },
  ]);