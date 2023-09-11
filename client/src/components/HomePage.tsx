import { useEffect, useState } from "react";
import Post from "./Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/posts").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            _id={null}
            title={null}
            summary={null}
            image={null}
            createdAt={null}
            author={null}
            {...(post as typeof Post)}
          />
        ))}
    </>
  );
};

export default HomePage;
