import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // If the user is not logged in, redirect to login page
  return currentUser ? children : <Navigate to="/login" />;
}
