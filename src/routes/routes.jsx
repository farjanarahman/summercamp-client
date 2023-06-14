import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";
import Main from "../layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from '../routes/PrivateRoute'
import AdminRoute from '../routes/AdminRoute'
import MyClass from '../pages/MyClass/MyClass'
import UpdateClass from '../pages/UpdateClass/UpdateClass'
import Payment from '../pages/Payment/Payment';
import Classes from '../pages/Classes/Classes';
import ShowInstructor from '../pages/ShowInstructor/ShowInstructor';
import Class from '../pages/Class/Class';
import SelectItem from '../pages/SelectItem/SelectItem';
import AllClasses from '../pages/AllClasses/AllClasses';
import UsersAction from '../pages/UsersAction';
import PopularInstructor from "../pages/Home/PopularInstructors/PopularInstructor";
import NewClass from '../pages/NewClass/NewClass'
import Dashboard from '../Layout/Dashboard';

  
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
          path:"/instructors",
          element: <ShowInstructor></ShowInstructor>
        },
        {
          path: 'singleclass/:id',
          element: <Class></Class>,
          loader: ({params})=>fetch(`https://sportify-neon.vercel.app//classes/${params.id}`)
        },
        
      ]
    },
    
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: "/dashboard/instructor",
          element: <PopularInstructor></PopularInstructor>
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
          element: <UpdateClass></UpdateClass>,
          //loader: ({params})=>fetch(`https://sportify-neon.vercel.app//singleclass/${params.id}`)
        },
        {
          path: "/dashboard/selectitem",
          element: <SelectItem></SelectItem>
        },
        {
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          loader: ({params})=>fetch(`https://sportify-neon.vercel.app//addtoclass/${params.id}`)
        }

      ]
    }
  ]);
  export default router;