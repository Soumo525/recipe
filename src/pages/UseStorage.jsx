import { ref } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { storage } from "../firebase/firebase";

function UseStorage() {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const startUpload = (file) => {
    if (!file) {
      return;
    }
    const fileId = uuidv4();
    console.log(file);
    const storageRef = ref(storage, "images/rivers.jpg");
    const uploadTask = uploadBytesResumable(storageRef, file);
  };
  return {
    progress, error,url, startUpload
  };
}

export default UseStorage;
