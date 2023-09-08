import Entries from "./components/Entries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="p-[10px] max-w-[700px] mx-auto my-0">
      <Navbar />
      <Entries />
    </main>
  );
}

export default App;
