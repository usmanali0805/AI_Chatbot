import { ThumbsDown } from 'lucide-react';
import React ,{useState} from 'react'

const DisLikeBtn = () => {
        const [hover, setHover] = useState(false)
    
  return (
    <div className="relative ">
      <button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="m-3 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600"
      >
        <ThumbsDown size={18} />
      </button>
      {hover && (
        <div className=" absolute transition-all duration-500 bg-black py-1 px-2 flex justify-center items-center rounded-xl text-[12px] text-white ">
            Bad response
        </div>
      )}
    </div>
  )
}

export default DisLikeBtn
