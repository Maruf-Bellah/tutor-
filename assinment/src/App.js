import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Page/Header/Header';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import CheckOut from './CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/checkout' element={
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>
     </Routes>
    </div>
  );
}

export default App;
