// import { useContext, useState } from 'react';
// import useTitle from '../../hooks/useTitle';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';
// import { app } from '../../firebase/firebase.config';

// const RegisterForm = () => {
//   useTitle('Register');
//   const { createUser } = useContext(AuthContext);
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/';

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const [passwordError, setPasswordError] = useState('');

//   const handleRegister = (data) => {
//     const { name, email, photo, password, confirmPassword } = data;

//     // Password validation
//     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;
//     if (
//       password.length < 6 ||
//       !password.match(/[A-Z]/) ||
//       !password.match(/[^\w\s]/)
//     ) {
//       setPasswordError(
//         'Password must be at least 6 characters long, contain at least one capital letter, and at least one special character.'
//       );
//       return;
//     } else if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match.');
//       return;
//     }

//     createUser(email, password)
//       .then((result) => {
//         const createdUser = result.user;
//         console.log(createdUser);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   return (
//     <div className='bg-indigo-100 py-5'>
//       <div className="max-w-md mx-auto bg-orange-300 rounded-lg p-5">
//         <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
//         <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
//           <div className="form-control">
//             <label htmlFor="name" className="label">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="input input-bordered"
//               placeholder="Enter your name"
//               {...register("name", { required: true })}
//             />
//             {errors.name && <span className="text-red-600">Name is required</span>}
//           </div>
//           <div className="form-control">
//             <label htmlFor="email" className="label">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="input input-bordered"
//               placeholder="Enter your email"
//               {...register("email", { required: true })}
//             />
//             {errors.email && <span className="text-red-600">Email is required</span>}
//           </div>
//           <div className='relative'>
//             <div className="form-control">
//               <label htmlFor="password" className="label">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 className="input input-bordered"
//                 placeholder="Enter your password"
//                 {...register("password", { required: true })}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
//                 onClick={handleTogglePassword}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//             </div>
//             {errors.password && <span className="text-red-600">Password is required</span>}
//           </div>
//           <div className='relative'>
//             <div className="form-control">
//               <label htmlFor="confirmPassword" className="label">
//                 Confirm Password
//               </label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="confirmPassword"
//                 className="input input-bordered"
//                 placeholder="Confirm your password"
//                 {...register("confirmPassword", { required: true })}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
//                 onClick={handleTogglePassword}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//             </div>
//             {errors.confirmPassword && <span className="text-red-600">Confirm Password is required</span>}
//           </div>
//           <div className="form-control">
//             <label htmlFor="photoURL" className="label">
//               Photo URL
//             </label>
//             <input
//               className="input input-bordered"
//               type="text"
//               id="photo"
//               placeholder="Photo URL"
//               {...register("photo")}
//             />
//           </div>
//           <div className="form-control mt-5">
//             <label className="label cursor-pointer">
//               <span className="label-text">Accept Terms and Conditions</span>
//               <input type="checkbox" className="checkbox checkbox-primary" {...register("terms", { required: true })} />
//             </label>
//             {errors.terms && <span className="text-red-600">You must accept the terms and conditions</span>}
//           </div>
//           {passwordError && (
//             <p className="text-red-500 mt-2">{passwordError}</p>
//           )}
//           <button type="submit" className="btn btn-primary w-full">
//             Register
//           </button>
//         </form>
//         <div className="flex justify-center">
//           <button
//             className="btn bg-red-500 hover:bg-red-600 mx-auto mt-5"
//             onClick={handleGoogleSignIn}
//           >
//             <FaGoogle className="text-center mx-auto"></FaGoogle>
//           </button>
//         </div>
//         <p className="text-center mt-5 mb-5">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-700 link link-hover">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;



import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
//import { saveUser } from '../../api/AuthApi';

const RegisterForm = () => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    
    const onSubmit = data => {
        //console.log(data);
        if(data.password !==data.confirm){
        alert('password didnot match');
        return
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                //saveUser(result);
                console.log(result);
                console.log(loggedUser);
                //navigate('/login');
                //logOut();
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" {...register("photo", { required: true })} className="input input-bordered" />
                            {errors.photo && <span className='text-red-500'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" {...register("confirm", { required: true })} className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form >
                    <p className='my-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;

