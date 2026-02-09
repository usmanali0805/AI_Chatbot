import React , {useState} from 'react'
import { Copy } from 'lucide-react';


const CopyBtn = ({msg}) => {

    const [hover, setHover] = useState<Boolean>(false);
    const HandleCopy = (msg: string): void => {
        navigator.clipboard.writeText(msg)
    }

    return (
        <div className='relative'>
        <button onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} onClick={() => HandleCopy(msg)} className="m-3 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600">
            <Copy size={18} />
        </button>
        {hover&& <div className=' absolute bg-black py-1 px-2 flex justify-center items-center rounded-xl text-[12px] text-white '>copy</div>}
        </div>
    )
}

export default CopyBtn
