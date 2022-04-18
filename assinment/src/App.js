import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Page/Header/Header';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import CheckOut from './CheckOut/CheckOut';
import Blog from './Page/Blog/Blog';
import About from './Page/About/About';
import ServiceDetail from './Page/Service/ServiceDetail/ServiceDetail';
import Footer from './Page/Footer/Footer'
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/checkout' element={
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
