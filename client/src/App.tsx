import { Route, Routes } from "react-router-dom";
import Entries from "./components/Entries";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Entries />} />
        <Route path={"/login"} element={<div>Login Page</div>} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
