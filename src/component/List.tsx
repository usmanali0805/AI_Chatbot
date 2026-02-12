import React, { useState } from 'react'

import { Ellipsis } from "lucide-react";
import LikeBtn from "./LikeBtn";
import DisLikeBtn from "./DisLikeBtn";
import CopyBtn from './CopyBtn';

const List = ({ msg }) => {
    const [like, setLike] = useState<Boolean>(false);

    return (
        <div className="flex gap-3 items-center">
            <CopyBtn msg={msg} />
            <LikeBtn like={like} setLike={setLike } />
            {!like && 
                <DisLikeBtn />
            }
            <button className="m-2 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600">
                <Ellipsis size={18} />
            </button>
        </div>
    )
}

export default List
