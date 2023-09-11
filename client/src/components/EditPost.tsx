import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<any>("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(ev: { preventDefault: () => void; }) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id!);
    if (image?.[0]) {
      data.set('file', image?.[0]);
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }
  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder="Title"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        name=""
        id=""
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
        onChange={(e) => setImage(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button className="w-[100%] block bg-[#555] text-white rounded-[5px] py-[7px] mt-[5px]">
        Edit Post
      </button>
    </form>
  );
};
export default EditPost;
