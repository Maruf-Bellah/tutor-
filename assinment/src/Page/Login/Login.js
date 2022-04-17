
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocilalLogin from './SocialLogin/SocilalLogin';



const Login = () => {
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const navigate = useNavigate()
     const location = useLocation();

     let from = location.state?.from?.pathname || "/home";
     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useSignInWithEmailAndPassword(auth);

        const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

        const resetPassword = async() =>{
          const email = emailRef.current.value;
          await sendPasswordResetEmail(email);
          alert('Sent email');
     }


        if(loading){
             <Loading></Loading>
        }

     const handleSubmitLogin = event =>{
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);
     }


     if(user){
          navigate(from, { replace: true })
          // navigate('/home');
     }
     let errorElement;
        if (error) {
            errorElement = <p className='text-danger'>Error: {error.message}</p>
        }

     return (
          <div className='w-50 mx-auto'>
               <h4>This is Login</h4>

<Form onSubmit={handleSubmitLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />

  </Form.Group>
          {errorElement}
  <Button className='w-50' onClick={() => signInWithEmailAndPassword()} variant="primary" type="submit">
    Login
  </Button> 

 <div>
 <span>  Are you want to read ?</span> 
  <Link to='/register' className='text-decoration-none'>
  <button className='btn btn-link text-decoration-none'>Please Regiser</button>
 </Link>
 </div>

 <div>
 <span>  Forget your Password?</span> 
  <Link to='/register' className='text-decoration-none'>
  <button className='btn btn-link text-decoration-none ' onClick={resetPassword}>Reset Password</button>
 </Link>
 </div>
</Form>

<SocilalLogin></SocilalLogin>

          </div>
     );
};

export default Login;