import { Route, Routes } from "react-router-dom";
import Entries from "./components/Entries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main className="p-[10px] max-w-[700px] mx-auto my-0">
            <Navbar />
            <Entries />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
