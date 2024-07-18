import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import { auth, database } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { uploadImage, currentUser } = useAuth();
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Redirect to login page if no currentUser
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]); // Include navigate in dependency array

  const handleFileChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
  };

  

  const handleSubmit = async (e) => {
    const userId = auth.currentUser.uid;
    e.preventDefault();
    if (selectedFile) {
      try {
        const fileId = await uploadImage(selectedFile);
        console.log("File uploaded successfully");

        await set(ref(database, "users/" + uuidv4()), {
          userId: userId,
          title: title,
          ingredients: ingredients,
          instructions: instructions,
          category: category,
          fileId: fileId,
        });

        console.log("Data added to database successfully");

        // Clear the form after submission
        setSelectedFile(null);
        setTitle("");
        setIngredients("");
        setInstructions("");
        setCategory("");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={title}
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={(e) => setIngredients(e.target.value)}
          type="text"
          name="ingredients"
          id="ingredients"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={ingredients}
          required
        />
        <label
          htmlFor="ingredients"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Ingredients
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={(e) => setInstructions(e.target.value)}
          type="text"
          name="instructions"
          id="instructions"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={instructions}
          required
        />
        <label
          htmlFor="instructions"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Instructions
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          id="category"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={category}
          required
        />
        <label
          htmlFor="category"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Category
        </label>
      </div>
      <div>
        <label
          htmlFor="file_input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default Upload;
