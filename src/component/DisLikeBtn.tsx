import { ThumbsDown } from 'lucide-react';
import React, { useState } from 'react'

const DisLikeBtn = ({ dislike, setDislike }) => {
  const [hover, setHover] = useState(false)

  const HandleDislike = () => {
    if (!dislike) {
      setDislike(true)
    } else {
      setDislike(false);

    }
  }

  return (
    <div className="relative ">
      <button
        onClick={HandleDislike}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="m-3 cursor-pointer "
      >
        <ThumbsDown size={18} fill={`${dislike? 'white':''}`} />
      </button>
      {hover && (
        <div className=" absolute transition-all text-center duration-500 bg-black py-1 px-2 flex justify-center items-center rounded-xl text-[12px] text-white ">
          Bad response
        </div>
      )}
    </div>
  )
}

export default DisLikeBtn
