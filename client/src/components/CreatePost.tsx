import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image", "video"],
    [{ indent: "-1" }, { indent: "+1" }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "color",
  "background",
  "script",
  "link",
  "image",
  "video",
  "indent",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form action="">
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
      />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className="w-[100%] block bg-[#555] text-white rounded-[5px] py-[7px] mt-[5px]" onClick={() => console.log(content)}>
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
