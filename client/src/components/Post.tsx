import { formatISO9075 } from "date-fns";

const Post = ({
  title,
  summary,
  content,
  image,
  createdAt,
  author,
}: {
  title: any;
  summary: any;
  content: any;
  image: any;
  createdAt: any;
  author: any;
}) => {
  return (
    <div className="grid grid-cols-[0.9fr,1.1fr] gap-[20px] mb-[30px]">
      <div className="">
        <img
          className="object-cover h-[198px] w-[100%]"
          src={"http://localhost:4000/" + image}
          alt="Airpods Img"
        />
      </div>
      <div>
        <h2 className="m-0 text-[1.5rem] font-bold">{title}</h2>
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
