import { formatISO9075 } from "date-fns";

const Post = ({
  title,
  summary,
  content,
  image,
  createdAt,
}: {
  title: any;
  summary: any;
  content: any;
  image: any;
  createdAt: any;
}) => {
  return (
    <div className="grid grid-cols-[0.9fr,1.1fr] gap-[20px] mb-[30px]">
      <div className="">
        <img
          className="object-cover h-[100%]"
          src={
            "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22173805/DSCF2666_2.jpg"
          }
          alt="Airpods Img"
        />
      </div>
      <div>
        <h2 className="m-0 text-[1.5rem] font-bold">{title}</h2>
        <p className="mx-0 my-[6px] text-[#888] text-[.7rem] font-bold flex gap-[10px]">
          <a href="" className="text-[#333]">
            Ayodele Fagbami
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="text-sm my-[10px] mx-0 leading-[1.4rem]">{content}</p>
        {/* should be summary above */}
      </div>
    </div>
  );
};

export default Post;
