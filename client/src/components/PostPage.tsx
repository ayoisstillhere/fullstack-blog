import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext<any>(UserContext);
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
      {userInfo.id === postInfo["author"]["_id"] && (
        <div className="text-center ">
          <Link
            to={`/edit/${postInfo["_id"]}`}
            className="bg-[#333] text-white py-[15px] px-[30px] rounded-[5px] mb-[20px] inline-flex items-center gap-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
        </div>
      )}
      <div className="max-h-[200px] overflow-hidden flex">
        <img
          src={`http://localhost:4000/${postInfo["image"]}`}
          alt="Cover Image"
          className="object-cover object-[center_center] w-[100%]"
        />
      </div>

      <div
        className="py-4 leading-[1.6rem]"
        dangerouslySetInnerHTML={{ __html: postInfo["content"] }}
      />
    </div>
  );
};

export default PostPage;
