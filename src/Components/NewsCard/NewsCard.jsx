import React, { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const {
    title,
    total_view,
    thumbnail_url,
    details,
    production,
    image_url,
    author,
    rating,
  } = news;

  const slicedDetails = details.slice(0,200); 
  const [isdetails,setIsdetails] = useState(true)

  const date = new Date(author.published_date).toLocaleDateString();
  return (
    <div className="border border-black/10 rounded-sm">
      {/* TOP PART */}
      <div className="grid grid-cols-12 px-4 py-3 rounded-t-sm bg-[#F3F3F3]">
        <div className="col-span-1">
          <img
            src={author.img}
            className="w-10 h-10 object-center rounded-full"
            alt="thumnail"
          />
        </div>
        <div className="col-span-10">
          <h1 className="text-sm text-[#403F3F] font-semibold">
            {author.name}
          </h1>
          <p className="text-[#706F6F] text-sm ">{date}</p>
        </div>
        <div className="col-span-1 gap-2 flex">
          <button>
            <CiBookmark className="cursor-pointer" size={20}></CiBookmark>
          </button>
          <button>
            <CiShare2 className="cursor-pointer" size={20}></CiShare2>
          </button>
        </div>
      </div>
      {/* NEWS PART */}
      <div className="p-6">
        <h1 className="font-semibold text-xl text-[#403F3F]">{title}</h1>
        <div className="mt-6">
          <img
            src={thumbnail_url}
            className="object-cover rounded-sm w-full h-[262px] border-dashed"
            alt=""
          />
        </div>
        <p className="text-sm font-semibold leading-6 mt-6 text-justify text-wrap text-[#706F6F]">
          {
            isdetails? slicedDetails : details
          }
         <button className="link-error mx-1 link-hover cursor-pointer" onClick={()=>setIsdetails(!isdetails)}>{isdetails? "Show more...":"Show Less"}</button>
        </p>
        <hr className="mx-1 mt-6 opacity-20" />
      </div>
      {/* RATINGS PART */}
      <div className="mx-6 flex justify-between items-center mb-6 ">
        <div className="flex items-center justify-center gap-2">
          <StarRatings
            rating={rating.number}
            starRatedColor="gold"
            changeRating={(newRating) => console.log(newRating)}
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="1px"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaEye></FaEye> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
