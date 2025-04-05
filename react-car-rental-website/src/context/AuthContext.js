import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// === Sửa dòng createContext: Cung cấp giá trị mặc định có cấu trúc ===
const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  loadingUser: true, // Khởi tạo là true để chờ useEffect kiểm tra token
  loginAction: () => {}, // Hàm rỗng làm placeholder
  logoutAction: () => {}, // Hàm rỗng làm placeholder
  updateUserState: () => {} // Hàm rỗng làm placeholder
});

// === Placeholder cho các hàm gọi API (Giữ nguyên như trước) ===
export const apiLogin = async (email, password) => {
  console.log("API CALL (DEMO): /api/auth/login", { email, password });
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (email === "test@example.com" && password === "password") {
    return {
      token: "fake-jwt-token-" + Date.now(),
      user: { CustomerID: 1, CustomerName: 'Test User', CustomerEmail: email, CustomerPhone: '0987654321', CustomerAddress: '123 Demo St' }
    };
  } else {
    throw new Error("Email hoặc mật khẩu không đúng.");
  }
};

export const apiRegister = async (registrationData) => {
  console.log("API CALL (DEMO): /api/auth/register", registrationData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (registrationData.CustomerEmail.includes("exist")) {
     throw new Error("Email đã tồn tại.");
  }
  return { message: "Đăng ký thành công!" };
};

export const apiFetchUserProfile = async (token) => {
  console.log("API CALL (DEMO): /api/user/me with token", token);
  await new Promise(resolve => setTimeout(resolve, 500));
  const storedUser = localStorage.getItem('user');
  if (storedUser && token === localStorage.getItem('token')) {
      return JSON.parse(storedUser);
  } else {
      throw new Error("Invalid or expired token");
  }
};

export const apiUpdateProfile = async (userId, updatedData, token) => {
     console.log("API CALL (DEMO): /api/user/update", { userId, updatedData, token });
     await new Promise(resolve => setTimeout(resolve, 1000));
     return { ...updatedData, CustomerID: userId, CustomerEmail: (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).CustomerEmail : '') };
};
// === Kết thúc Placeholder ===


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
   // Bắt đầu với loadingUser là true
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate(); // useNavigate phải được gọi trong component hoặc hook khác

  // --- Định nghĩa logoutAction ở đây để useCallback có thể truy cập ---
  const logoutAction = useCallback((shouldNavigate = true) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    if (shouldNavigate) {
       navigate('/home');
    }
  }, [navigate]); // Thêm navigate vào dependency của logoutAction

  // --- Sửa lại useCallback cho loadUserFromToken ---
  const loadUserFromToken = useCallback(async () => {
    const currentToken = localStorage.getItem('token');
    if (currentToken) {
      try {
        // Không cần setLoadingUser(true) ở đây nữa vì đã khởi tạo là true
        const userData = await apiFetchUserProfile(currentToken);
        if (userData) {
           localStorage.setItem('user', JSON.stringify(userData));
           setUser(userData);
           setToken(currentToken);
        } else {
           logoutAction(false);
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        logoutAction(false);
      } finally {
        setLoadingUser(false); // Chỉ set false sau khi hoàn tất
      }
    } else {
      setLoadingUser(false);
      setUser(null);
      setToken(null);
    }
  }, [logoutAction]); // Thêm logoutAction vào dependency array

   useEffect(() => {
      loadUserFromToken();
   }, [loadUserFromToken]);


  const loginAction = (userData, authToken) => {
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(authToken);
    setUser(userData);
    navigate('/profile');
  };

  // logoutAction đã được định nghĩa ở trên

  const updateUserState = (updatedUserData) => {
     const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
     const newUserState = { ...currentUser, ...updatedUserData };
     localStorage.setItem('user', JSON.stringify(newUserState));
     setUser(newUserState);
  }

  const value = {
    isAuthenticated: !!token,
    user,
    token,
    loadingUser,
    loginAction,
    logoutAction, // logoutAction đã được định nghĩa ổn định bởi useCallback
    updateUserState
  };

  // Chỉ render children sau khi đã kiểm tra token xong (loadingUser là false)
  // để đảm bảo các component con không bị lỗi khi context chưa sẵn sàng
  if (loadingUser) {
      return <div>Loading Application...</div>; // Hoặc một spinner đẹp hơn
  }


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  // Thêm kiểm tra null ở đây để an toàn hơn, mặc dù giá trị mặc định đã có cấu trúc
  const context = useContext(AuthContext);

  return context;
};