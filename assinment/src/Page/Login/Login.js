
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const navigate = useNavigate()

     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useSignInWithEmailAndPassword(auth);

     const handleSubmitLogin = event =>{
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);
     }

     if(user){
          navigate('/home')
     }

     return (
          <div className='w-50 mx-auto'>
               <h4>This is Login</h4>

<Form onSubmit={handleSubmitLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <button  className='btn-link btn'>
       <Link to='/register'>
       Go to Register 
       </Link>
 </button> <br></br>
  <Button onClick={() => signInWithEmailAndPassword()} variant="primary" type="submit">
    Login
  </Button>
</Form>

          </div>
     );
};

export default Login;