import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import app from '../../firebase/firebase.config';

const LoginForm = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login page location', location)
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    useTitle('Login');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="max-w-md mx-auto rounded-lg shadow-lg py-8 px-10 bg-violet-300">
            <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Please Login</h2>
            <form onSubmit={handleLogin} className="space-y-4 ">
                <div className="form-control">
                    <label htmlFor="email" className="label text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input input-bordered"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password" className="label text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="input input-bordered"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Login
                </button>
                <br />
            </form>
            <div className="flex justify-center">
                <button className='btn bg-red-500 hover:bg-red-600 mx-auto mt-5' onClick={handleGoogleSignIn}>
                    <FaGoogle className='text-center mx-auto'></FaGoogle>
                </button>
            </div>
            <p className='text-center mt-5 text-gray-700'>Don't have an account? <Link to='/register' className='text-blue-700'>Register</Link></p>
        </div>
    );
};

export default LoginForm;


