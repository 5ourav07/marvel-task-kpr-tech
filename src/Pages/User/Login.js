import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const { login, googleSignup } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                form.reset();
                toast('Login Successful!')
                navigate('/home');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                toast('Login Successful!')
                navigate('/home');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex justify-center items-center bg-black h-screen'>
            <div className='border border-white mb-8 p-16'>
                <h2 className='text-5xl text-white mb-8 text-center'>Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="form-control w-full">
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full my-3" required />
                    </div>

                    <div className="form-control w-full">
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full my-3" required />
                    </div>

                    <input className='btn btn-outline w-full my-3 text-white' value="Login" type="submit" />

                    <div>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>

                <p className='text-white'>
                    Don't have an account? <Link className='text-secondary' to="/register">Please Register Here</Link>
                </p>

                <div className="divider text-white">OR</div>

                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;