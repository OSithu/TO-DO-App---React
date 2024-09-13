import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import backgroundImage from "./assets/bg.jpg";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          className="bg-stone-900 grid py-4 min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
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
