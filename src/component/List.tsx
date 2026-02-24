import React, { useState } from 'react'

import { Ellipsis } from "lucide-react";
import LikeBtn from "./LikeBtn";
import DisLikeBtn from "./DisLikeBtn";
import CopyBtn from './CopyBtn';

const List = ({ msg }) => {
    const [like, setLike] = useState<boolean>(false);
    const [hover, setHover] = useState(false)

    return (
        <div className="flex gap-3 items-center">
            <span>
            <CopyBtn msg={msg} />
            </span>
            <span>
            <LikeBtn like={like} setLike={setLike} />
            </span>
            <span>

            {!like &&
                <DisLikeBtn like={like} setLike={setLike} />
            }
            </span>
            <div className='relative '>

                <button
                    onMouseEnter={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setHover(false);
                    }} className="m-2 cursor-pointer h-[15px] w-[15px] ">
                    <Ellipsis size={18} />
                </button>
                {hover && (
                    <div className=" absolute transition-all duration-500 bg-black py-1 px-2 flex text-center justify-center items-center rounded-xl text-[12px] text-white ">
                        more actions
                    </div>
                )}
            </div>
        </div>
    )
}

export default List
