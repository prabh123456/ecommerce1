import React, { useEffect, useState } from 'react';
import MyContext from './Mycontext';
import { fireDB } from '../../firebase/Firebaseconfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query, setDoc ,deleteDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { doc} from 'firebase/firestore';
function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
  });

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const addproduct = async () => {
    setLoading(true);

    try {
      const productData = { ...products };
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, productData);
      setTimeout(()=>{
        toast.success("Product Added successfully");
      },2000);
      window.location.href='/dashboard';
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts({
      title: null,
      price: null,
      imageUrl: null,
      category: null,
      description: null,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    });
  }

  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item)
  }

  // update product
  const UpdateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
        toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const DeleteProduct = async (item) => {
    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      toast.error('Product Deletion Falied')
      setLoading(false)
    }
  }

  return (
    <MyContext.Provider value={{
      mode,
      toggleMode,
      loading,
      setLoading,
      products,
      setProducts,
      addproduct,
      product,
      edithandle,
      UpdateProduct,
      DeleteProduct
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
