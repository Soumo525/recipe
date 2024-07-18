import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Upload from './pages/Upload';
import SignUp from './pages/SignUp';



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
         
              <Route path="/upload" element={<Upload />} />
        
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

const NotFound = () => <h2>Page not found</h2>;

export default App;
