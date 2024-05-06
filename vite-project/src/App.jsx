import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/Mystate';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import Productinfo from './pages/productinfo/Productinfo';
import Addproduct from './pages/admin/page/Addproduct';
import Updateproduct from './pages/admin/page/Updateproduct';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/order" element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/productinfo/:id" element={<Productinfo/>}/>
          <Route path="/dashboard" element={
          <ProtectedRouteForAdmin>
          <Dashboard />
          </ProtectedRouteForAdmin>
        }/>
          <Route path="/addproduct" element={
          <ProtectedRouteForAdmin>
          <Addproduct />
          </ProtectedRouteForAdmin>
        }/>
          <Route path="/updateproduct" element={
          <ProtectedRouteForAdmin>
          <Updateproduct />
          </ProtectedRouteForAdmin>
        }/>
          <Route path="/*" element={<Nopage />}/>
        </Routes>
        <ToastContainer/>
      </Router>
      </MyState>
    </div>
  )
}

export default App;
//user
export const ProtectedRoute=({children})=>{
  const user=localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
//admin 
export const ProtectedRouteForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'));
  if(admin.user.email==='kaurprabh7890@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
