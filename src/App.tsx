import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

import "./App.css";

const App: React.FC = function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
