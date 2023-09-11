import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({
  _id,
  title,
  summary,
  image,
  createdAt,
  author,
}: {
  _id: any;
  title: any;
  summary: any;
  image: any;
  createdAt: any;
  author: any;
}) => {
  return (
    <div className="grid sm:grid-cols-[0.9fr,1.1fr] grid-cols-[1fr] gap-[20px] mb-[30px]">
      <div className="">
        <Link to={`/post/${_id}`}>
          <img
            className="object-cover h-[198px] w-[100%]"
            src={"http://localhost:4000/" + image}
            alt="Airpods Img"
          />
        </Link>
      </div>
      <div>
        <Link to={`/post/${_id}`}>
          {" "}
          <h2 className="m-0 text-[1.5rem] font-bold">{title}</h2>
        </Link>

        <p className="mx-0 my-[6px] text-[#888] text-[.7rem] font-bold flex gap-[10px]">
          <a href="" className="text-[#333]">
            {author.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="text-sm my-[10px] mx-0 leading-[1.4rem]">{summary}</p>
        {/* should be summary above */}
      </div>
    </div>
  );
};

export default Post;
