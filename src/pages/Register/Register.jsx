import { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const RegisterForm = () => {

    useTitle('Register');
    const { createUser } = useContext(AuthContext);
    

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="max-w-md mx-auto bg-violet-300 rounded p-5">
            <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
                <div className="form-control">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input input-bordered"
                        placeholder="Enter your name"
                        required
                    />
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
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password" className="label">
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
                <div className="form-control">
                    <label htmlFor="confirmPassword" className="label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="input input-bordered"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="photoURL" className='label'>Photo URL</label>
                    <input className='input input-bordered'
                        type="text"
                        id="photo"
                        placeholder='Photo URL' />
                </div>
                <div className="form-control mt-5">
                <label className="label cursor-pointer">
                    <span className="label-text ">Accept Terms and Conditions</span>
                    <input type="checkbox"  className="checkbox checkbox-primary" />
                </label>
            </div>
                <button type="submit" className="btn btn-primary w-full">
                    Register
                </button>
            </form>
        
            <p className='text-center mt-5  mb-5'>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
        </div>
    );
};

export default RegisterForm;



