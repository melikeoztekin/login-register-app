import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TodoApp from "./pages/TodoApp";
import PasswordChangePage from "./pages/PasswordChangePage";
import { useLoginContext } from "./contexts/LoginContext/LoginContext";
import { TodoAppProvider } from "./contexts/TodoAppContext/TodoAppContext";

const App = () => {
  const [token, setToken] = useState<string>("");
  const { isLoggedIn, logout } = useLoginContext();

  const handleLogout = () => {
    logout();
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  const routerLoggedIn = createBrowserRouter([
    {
      path: "/",
      element: <TodoApp />,
    },
    {
      path: "/password-change",
      element: <PasswordChangePage token={token} onLogout={handleLogout} />,
    },
  ]);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      {!isLoggedIn ? (
        <RouterProvider router={router} />
      ) : (
        <TodoAppProvider>
          <RouterProvider router={routerLoggedIn} />
        </TodoAppProvider>
      )}
    </div>
  );
};

export default App;
