import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import SignUp from './components/Signup';
import Login from './components/Login';
import Todo from './components/Todo';  // Import the To-Do component
import PrivateRoute from './components/PrivateRoute';  // Import PrivateRoute
import backgroundImage from './assets/bg.jpg';  // Your background image

function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          className='bg-stone-900 grid py-4 min-h-screen bg-cover bg-center'
          style={{ backgroundImage: `url(${backgroundImage})` }}  // Background image
        >
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* Protect ToDo route with PrivateRoute */}
            <Route 
              path="/todo" 
              element={
                <PrivateRoute>
                  <Todo />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
