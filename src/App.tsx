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
import { getAllMatches } from "./services/matches";
import useMatch from "./hooks/use-matches";
import groupToArray from "./utils/group-to-array";
import { MatchPage } from "./pages/match";

const App: React.FC = function App() {
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);
  const setMatches = useMatch((state) => state.setMatches);
  const setOrganizedMatches = useMatch((state) => state.setOrganizedMatches);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // set the token in the state
      // set the user as logged in
      setIsLoggedIn(true);
    }
  });

  React.useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await getAllMatches();
        setMatches(matches);

        //Group Matches
        const newMatches = groupToArray(matches, "format_id");
        setOrganizedMatches(newMatches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }

    fetchMatches();
  }, [setMatches, setOrganizedMatches]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/match/:matchId" element={<MatchPage />} />
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
