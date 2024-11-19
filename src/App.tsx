import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";

import "./App.css";
import { ProtectedRoute } from "./components/protected-route";
import { AddMatchPage } from "./pages/add-match";
import Cookies from "js-cookie";
import useLogin from "./hooks/use-login";
import { getAllMatches } from "./services/matches";
import useMatch from "./hooks/use-matches";
import groupToArray from "./utils/group-to-array";
import { MatchPage } from "./pages/match";
import { getAllEvents } from "./services/events";
import useEvents from "./hooks/use-events";
import { getAllPlayers } from "./services/players";
import usePlayers from "./hooks/use-player";

const App: React.FC = function App() {
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);
  const setMatches = useMatch((state) => state.setMatches);
  const setEvents = useEvents((state) => state.setEvents);
  const setOrganizedMatches = useMatch((state) => state.setOrganizedMatches);
  const setPlayers = usePlayers((state) => state.setPlayers);

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

    async function fetchEvents() {
      try {
        const events = await getAllEvents();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    async function fetchPlayers() {
      try {
        const players = await getAllPlayers();
        setPlayers(players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }

    fetchPlayers();
    fetchEvents();
    fetchMatches();
  }, [setEvents, setMatches, setOrganizedMatches]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/match/:matchId" element={<MatchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/addMatch"
            element={
              <ProtectedRoute>
                <AddMatchPage />
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
