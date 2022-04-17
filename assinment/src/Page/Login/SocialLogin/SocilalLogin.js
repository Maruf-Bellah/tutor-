import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../google.png'

const SocilalLogin = () => {

     const navigate = useNavigate()

     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     
     let errorElement ;
     if (error) {
           errorElement = <p className='text-danger'>Error: {error.message}</p>
        }
        
        if(user){
             navigate('/home')
        }
     return (
          <div className='mt-2'>
                 {errorElement}
    
          <button 
          onClick={() => signInWithGoogle ()}
          className='btn btn-outline-primary mt-2'>
          <img src={logo} alt="" />
               Google Sign in
          </button>

        
          
          </div>
     );
};

export default SocilalLogin;