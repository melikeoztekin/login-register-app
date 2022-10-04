import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TodoApp from "./pages/TodoApp";
import PasswordChangePage from "./pages/PasswordChangePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleLogin = (token: string) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage onSuccess={handleLogin} />,
    },
    {
      path: "/login",
      element: <LoginPage onSuccess={handleLogin} />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  const routerLoggedIn = createBrowserRouter([
    {
      path: "/",
      element: <TodoApp onLogout={handleLogout} />,
    },
    {
      path: "/password-change",
      element: <PasswordChangePage token={token} onLogout={handleLogout} />,
    },
  ]);

  return (
    <div>
      <ToastContainer />
      {!isLoggedIn ? (
        <RouterProvider router={router} />
      ) : (
        <RouterProvider router={routerLoggedIn} />
      )}
    </div>
  );
};

export default App;
