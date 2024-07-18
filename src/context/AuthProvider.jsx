import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, database } from '../firebase/firebase';
import { ref, getDownloadURL, listAll, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from "uuid";
import { set, get, child, onValue } from 'firebase/database';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageList, setImageList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
      
    });

    return () => unsubscribe();
  }, [navigate]);

  const userLogin = async (userInfo) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      setCurrentUser(userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const uploadImage = async (file) => {
    setLoading(true);
    try {
      const imgRef = ref(storage, `files/${uuidv4()}`);
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      setImageList(prevList => [...prevList, url]);
      return url;
    } catch (error) {
      console.error('Error uploading image:', error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchImages = async () => {
    try {
      const listRef = ref(storage, 'files');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      setImageList(urls);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const fetchData = async () => {
    try {
      const dbRef = ref(database, 'users'); // Changed to point to 'users'
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data
        }));
        setDataList(userArray);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const userCreate = async (userInFoLog) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInFoLog.email,
        userInFoLog.password
      );
      setCurrentUser(userCredential.user);
      navigate('/login'); // Navigate to signup page after successful signup
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const data = {
    currentUser,
    userLogin,
    uploadImage,
    imageList,
    fetchImages,
    fetchData,
    dataList,
    userCreate
  };

  return (
    <AuthContext.Provider value={data}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
