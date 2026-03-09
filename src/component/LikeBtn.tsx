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
        className="m-3 cursor-pointer "
      >
        <ThumbsUp size={18} fill={`${like? 'white':''}`} />
      </button>
      {hover && (
        <div className=" absolute transition-all duration-500 text-center bg-black py-1 px-2 flex justify-center items-center rounded-xl text-[12px] text-white ">
          Good response
        </div>
      )}
    </div>
  )
}

export default LikeBtn
