// import { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
// import useTitle from '../../hooks/useTitle';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
// import app from '../../firebase/firebase.config';

// const LoginForm = () => {
//   const { signIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log('Login page location', location);
//   const from = location.state?.from?.pathname || '/';
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   useTitle('Login');

//   const handleLogin = event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);

//     signIn(email, password)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         navigate(from, { replace: true });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then(result => {
//         const user = result.user;
//         console.log(user);
//         navigate(from, { replace: true });
//       })
//       .catch(error => {
//         console.log(error.message);
//       });
//   };

//   return (
//     <div className="hero min-h-screen bg-indigo-100">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card flex-shrink-0 w-full shadow-2xl max-w-md mx-auto rounded-lg py-8 px-10 bg-orange-300">
//             {/* <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Please Login</h2> */}
//             <form onSubmit={handleLogin} className="space-y-4 ">
//               <div className="form-control">
//                 <label htmlFor="email" className="label text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="input input-bordered"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="password" className="label text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     id="password"
//                     className="input input-bordered pr-10"
//                     placeholder="Enter your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
//                     onClick={handleTogglePassword}
//                   >
//                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                   </button>
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-primary w-full">
//                 Login
//               </button>
//               <br />
//             </form>
//             <div className="flex justify-center">
//               <button className="btn bg-red-500 hover:bg-red-600 mx-auto mt-5" onClick={handleGoogleSignIn}>
//                 <FaGoogle className="text-center mx-auto"></FaGoogle>
//               </button>
//             </div>
//             <p className="text-center mt-5 text-gray-700">
//               Don't have an account? <Link to="/register" className="text-blue-700 link link-hover">Register</Link>
//             </p>
//           </div>
//           <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <img src="https://i.ibb.co/jTjHrpb/login.png"  alt="" className='w-96' />
//         </div>
//         </div>
//       </div>
//   );
// };
// export default LoginForm;



import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import app from '../../firebase/firebase.config';

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('Login page location', location);
  const from = location.state?.from?.pathname || '/';
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useTitle('Login');

  const onSubmit = data => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-indigo-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl max-w-md mx-auto rounded-lg py-8 px-10 bg-orange-300">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="label text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="input input-bordered pr-10"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors.password && <span className="text-red-600">Password is required</span>}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
            <br />
          </form>
          <div className="flex justify-center">
            <button className="btn bg-red-500 hover:bg-red-600 mx-auto mt-5" onClick={handleGoogleSignIn}>
              <FaGoogle className="text-center mx-auto" />
            </button>
          </div>
          <p className="text-center mt-5 text-gray-700">
            Don't have an account? <Link to="/register" className="text-blue-700 link link-hover">Register</Link>
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src="https://i.ibb.co/jTjHrpb/login.png" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
