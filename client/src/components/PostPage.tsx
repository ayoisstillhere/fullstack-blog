import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo: any) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-[2.125rem] font-bold text-center mt-[10px] mb-[5px]">
        {postInfo["title"]}
      </h1>
      <time className="text-center block text-[.7rem] text-[#aaa]">
        {formatISO9075(new Date(postInfo["createdAt"]))}
      </time>
      <div className="text-center mb-[20px] text-[.7rem] font-bold">
        by @{postInfo["author"]["username"]}
      </div>
      <div className="max-h-[200px] overflow-hidden flex">
        <img
          src={`http://localhost:4000/${postInfo["image"]}`}
          alt="Cover Image"
          className="object-cover object-[center_center]"
        />
      </div>

      <div
        className="py-4"
        dangerouslySetInnerHTML={{ __html: postInfo["content"] }}
      />
    </div>
  );
};

export default PostPage;
