import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

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
      element: <h3>Giriş yapılmış</h3>,
    },
  ]);

  return (
    <div>
      {!isLoggedIn ? (
        <RouterProvider router={router} />
      ) : (
        <RouterProvider router={routerLoggedIn} />
      )}
    </div>
  );
};

export default App;
