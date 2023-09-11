import ReactQuill from "react-quill";

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

export default function Editor({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) {
  return (
    <ReactQuill
      value={value}
      modules={modules}
      formats={formats}
      theme="snow"
      onChange={onChange}
    />
  );
}
