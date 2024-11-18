import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";

import "./App.css";
import { ProtectedRoute } from "./components/protected-route";
import { SecretPage } from "./pages/secret";
import Cookies from "js-cookie";
import useLogin from "./hooks/use-login";

const App: React.FC = function App() {
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // set the token in the state
      // set the user as logged in
      setIsLoggedIn(true);
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <SecretPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
