import { ThumbsUp } from 'lucide-react';
import React ,{useState} from 'react'



const LikeBtn = ({setLike,like}) => {
    const [hover, setHover] = useState(false)

     const HandleLike =() => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false);
      
    }
  }

    return (
    <div className="relative ">
      <button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={HandleLike}
        className="m-3 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600"
      >
        <ThumbsUp size={18} fill={`${like? 'white':''}`} />
      </button>
      {hover && (
        <div className=" absolute transition-all duration-500 bg-black py-1 px-2 flex justify-center items-center rounded-xl text-[12px] text-white ">
          Good response
        </div>
      )}
    </div>
  )
}

export default LikeBtn
