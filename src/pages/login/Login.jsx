/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';

const Login = () => {
  useTitle('Login') ;
  const { signIn, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate() ;
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset();
        navigate(from, { replace: true }) ;

      }
      )
      .catch((error) => {
        const errorMessage = error.message;
        form.reset();
      });
  }

   const googleLogin = () =>{
      signWithGoogle()
      .then( result => {
        const loggedUser = result.user ;
        console.log(loggedUser)
        navigate(from, { replace: true }) ;
        
      }
      )
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        
      });
    }


  return (
    <>
      <h3 className='text-2xl font-semibold text-center bg-base-200 pt-6'>Login</h3>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <p>Don not have an account? <Link className='text-primary' to={'/register'}>Register</Link></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className='btn btn-primary' value="Login" />
                </div>
              </form>
            </div>
            <div className='p-4 flex justify-center'>
              <button onClick={googleLogin} className="btn btn-outline btn-primary">Log in with GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;