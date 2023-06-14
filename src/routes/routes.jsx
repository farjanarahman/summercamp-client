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
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path:"/instructor",
          element: <ShowInstructor></ShowInstructor>
        },
        {
          path: 'singleclass/:id',
          element: <SingleClass></SingleClass>,
          loader: ({params})=>fetch(`http://localhost:5000/classes/${params.id}`)
        },
        
      ]
    },
    
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: "/dashboard/instructor",
          element: <Instructor></Instructor>
        },
        {
          path: "/dashboard/class",
          element: <NewClass></NewClass>
        },
        {
          path: "/dashboard/action",
          element:<UsersAction></UsersAction>
        },
        {
          path: "/dashboard/allclass",
          element: <AllClasses></AllClasses>
        },
        {
          path: "/dashboard/myclass",
          element: <MyClass></MyClass>
        },
        {
          path: "/dashboard/updateclass/:id",
          element: <UpdateMyClass></UpdateMyClass>,
          //loader: ({params})=>fetch(`http://localhost:5000/singleclass/${params.id}`)
        },
        {
          path: "/dashboard/selectitem",
          element: <SelectItem></SelectItem>
        },
        {
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          loader: ({params})=>fetch(`http://localhost:5000/addtoclass/${params.id}`)
        }

      ]
    }
  ]);
  export default router;