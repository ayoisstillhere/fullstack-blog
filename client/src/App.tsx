import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
