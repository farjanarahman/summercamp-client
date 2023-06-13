import { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { app } from '../../firebase/firebase.config';

const RegisterForm = () => {
  useTitle('Register');
  const { createUser } = useContext(AuthContext);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (data) => {
    const { name, email, photo, password, confirmPassword } = data;

    // Password validation
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;
    if (
      password.length < 6 ||
      !password.match(/[A-Z]/) ||
      !password.match(/[^\w\s]/)
    ) {
      setPasswordError(
        'Password must be at least 6 characters long, contain at least one capital letter, and at least one special character.'
      );
      return;
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='bg-indigo-100 py-5'>
      <div className="max-w-md mx-auto bg-orange-300 rounded-lg p-5">
        <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-600">Name is required</span>}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
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
          <div className='relative'>
            <div className="form-control">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="input input-bordered"
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
          <div className='relative'>
            <div className="form-control">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="input input-bordered"
                placeholder="Confirm your password"
                {...register("confirmPassword", { required: true })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.confirmPassword && <span className="text-red-600">Confirm Password is required</span>}
          </div>
          <div className="form-control">
            <label htmlFor="photoURL" className="label">
              Photo URL
            </label>
            <input
              className="input input-bordered"
              type="text"
              id="photo"
              placeholder="Photo URL"
              {...register("photo")}
            />
          </div>
          <div className="form-control mt-5">
            <label className="label cursor-pointer">
              <span className="label-text">Accept Terms and Conditions</span>
              <input type="checkbox" className="checkbox checkbox-primary" {...register("terms", { required: true })} />
            </label>
            {errors.terms && <span className="text-red-600">You must accept the terms and conditions</span>}
          </div>
          {passwordError && (
            <p className="text-red-500 mt-2">{passwordError}</p>
          )}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="flex justify-center">
          <button
            className="btn bg-red-500 hover:bg-red-600 mx-auto mt-5"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-center mx-auto"></FaGoogle>
          </button>
        </div>
        <p className="text-center mt-5 mb-5">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 link link-hover">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;

