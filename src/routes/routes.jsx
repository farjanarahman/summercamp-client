import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";
import Main from "../layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from '../routes/PrivateRoute'
import Dashboard from "../Layout/Dashboard";
import UHome from '../Layout/UHome'
import AdminRoute from '../routes/AdminRoute'
import AllUsers from "../pages/Dashboard/AllUsers";
import ManageClass from "../pages/Dashboard/ManageClass";
import AddClass from '../pages/Dashboard/Instructor/AddClass'
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass";
import MyCourse from "../pages/Dashboard/MyCourse";
import Payment from "../pages/Dashboard/Payment";

  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LoginForm></LoginForm>
        },
        {
            path: '/register',
            element: <RegisterForm></RegisterForm>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
      {
        path: 'uHome',
        element: <UHome></UHome>
      },
      {
        path: 'manageUser',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: 'updateClass',
        element: <UpdateClass></UpdateClass>
      },
      {
        path: 'myCourse',
        element: <MyCourse></MyCourse>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      }
    ]
    }
  ]);