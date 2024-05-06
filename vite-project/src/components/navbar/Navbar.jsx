import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/Mycontext';
import { MdDarkMode } from "react-icons/md";
import { FiSun } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
function Navbar() {
  const context = useContext(myContext);
  const { togglemode, mode } = context;
const user=JSON.parse(localStorage.getItem('user'));
const logout=()=>{
  localStorage.clear('user');
  window.location.href='/login';
}
  return (
    <div>
      <header className='relative bg-white'>
        <p className='flex h-8 bg-pink-600 items-center justify-center text-white font-medium text-large sm:px-6 lg:px-8'>
          Get free delivery on orders over ₹300
        </p>
        <nav aria-label="Top" className='h-31 bg-gray flex items-center justify-between sm:px-6 lg:px-10 shadow-md hover:shadow-lg' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}> 
          <div>
            <Link to="/">
              <h1 className='text-2xl font-medium text-black px-2 py-1 rounded' style={{color:mode==='dark'?'white':''}}>E-BHARAT</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8" > 
            <Link to={'/allproducts'} className="text-lg font-medium text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              All Products
            </Link>
            <Link to={'/order'} className="text-lg font-medium text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Order
            </Link>
            { user?.user?.email==='kaurprabh7890@gmail.com'?<Link to={'/dashboard'} className="text-lg font-medium text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Admin
            </Link>:''}
            { user?<a className="text-lg font-medium text-gray-700 cursor-pointer" onClick={logout} style={{ color: mode === 'dark' ? 'white' : '' }}>
              Logout
            </a>:''}

          <div >
            <button onClick={togglemode}>
            {mode === 'light' ? (
            <MdDarkMode size={30} />) : mode === 'dark' ? (<FiSun size={30} />) : null} </button>
          </div>
          <div className="ml-4 flow-root lg:ml-6">
          <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                <FaShoppingCart size={30} />
                <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link> 
                  </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

