import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const { signup, googleSignup, updateUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signup(email, password)
            .then(result => {
                form.reset();
                navigate('/login');
                toast('Registration Successful!')
                handleUpdateUserProfile(name);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                toast('Registration Successful!')
                navigate('/home');
            })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-center items-center bg-black h-screen'>
            <div className='border border-white mb-8 p-16'>
                <h2 className='text-5xl text-white mb-8 text-center'>Register</h2>

                <form onSubmit={handleRegister}>
                    <div className="form-control w-full">
                        <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered w-full my-3" required />
                    </div>

                    <div className="form-control w-full">
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full my-3" required />
                    </div>

                    <div className="form-control w-full">
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full my-3" required />
                    </div>

                    <input className='btn btn-outline w-full my-3 text-white' value="Sign Up" type="submit" />

                    <div>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>

                <p className='text-white'>
                    Already have an account? <Link className='text-secondary' to="/login">Please Login Here</Link>
                </p>

                <div className="divider text-white">OR</div>

                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;