import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loadingUser } = useAuth();

  if (loadingUser) {
    // Hiển thị loading trong khi chờ kiểm tra trạng thái đăng nhập
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, hiển thị component con (trang được bảo vệ)
  return children;
};

export default ProtectedRoute;