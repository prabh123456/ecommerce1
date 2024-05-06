import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../../context/data/Mycontext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/Firebaseconfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/loader';
import { MdOutlineMail, MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { FaRegUser } from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required");
        }
        setLoading(false);
        if(password.length<6){
          return toast.error('Password Size Inappropriate');
        }
        setLoading(false);

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            toast.success("Signup Succesfully")
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
            
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            toast.error("The email address is already in use. Please use a different email address.");
        }
        else {
          toast.error("Signup Failed");
      }
            setLoading(false)
        }
    }

    return (
      <div className="flex items-center justify-center h-screen ">
        {loading && <Loader/>}
        <div className="bg-gray-800 rounded-xl px-8 py-8 "style={{ width: '450px' }}>
          <div>
            <h1 className="text-white text-center text-xl font-bold mb-4">Signup</h1>
          </div>
          <div className="relative flex items-center mb-4">
            <FaRegUser className="absolute left-0 pl-2 mb-3 mt-3 text-white" size={30} />
            <input type="text" name="name" autoComplete='current-name' value={name} onChange={(e)=> setName(e.target.value)} className="bg-gray-600 rounded-xl w-full pl-10 py-2 text-xl placeholder-white outline-none" placeholder="Name" />
          </div>
          <div className="relative flex items-center mb-4">
            <MdOutlineMail className="absolute left-0 pl-2 mb-3 mt-3 text-white" size={30} />
            <input type="email" name="email" autoComplete='current-email' value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-gray-600 rounded-xl w-full pl-10 py-2 text-xl placeholder-white  outline-none" placeholder="Email" />
          </div>
          <div className="relative flex items-center">
            {showPassword ? (
              <MdOutlineVisibilityOff className="absolute left-0 pl-2 mb-3 mt-3 text-white cursor-pointer" size={30} onClick={togglePasswordVisibility} />
            ) : (
              <MdOutlineVisibility className="absolute left-0 pl-2 mb-3 mt-3 text-white cursor-pointer" size={30} onClick={togglePasswordVisibility} />
            )}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password} onChange={(e)=> setPassword(e.target.value)}
              className="bg-gray-600 rounded-xl w-full pl-10 py-2 text-xl placeholder-white  outline-none"
              placeholder="Password" autoComplete='current-password'
            />
          </div>
          <div className='flex items-center justify-center'>
              <button onClick={signup} className='bg-red-500 text-xl text-black font-bold w-full rounded-xl mt-4 h-10 hover:bg-red-100' >Signup</button>
          </div>
          <div className='flex items-center justify-center'>
          <h2 className='text-white text-lg mt-2'>Already have an account? <Link className=' text-red-500 font-bold' to={'/Login'}>Login</Link></h2>
          </div>
        </div>
      </div>
    );
}

export default Signup;