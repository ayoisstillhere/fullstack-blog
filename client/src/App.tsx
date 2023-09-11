import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/register" element={<RegisterPage />} />{" "}
          <Route path="/create" element={<CreatePost />} />{" "}
          <Route path="/post/:id" element={<PostPage />} />{" "}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
