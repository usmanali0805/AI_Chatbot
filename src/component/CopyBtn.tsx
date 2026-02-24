import React, { useState } from 'react'
import { Check, Copy, Ticket } from 'lucide-react';


const CopyBtn = ({ msg }) => {
    const [hover, setHover] = useState<boolean>(false);
    const [copied, setCopied] = useState(false)

    const [text , setText] = useState('copy')


    const HandleCopy = (msg: string): void => {
        navigator.clipboard.writeText(msg)
        setText('copied')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
            setText('copy')
        }, 2000);
    }

    return (
        <div className='relative'>
            <button onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} onClick={() => HandleCopy(msg)} className="m-3 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600">
                {!copied ? <Copy size={18} /> :
                    <Check />}
            </button>
            {hover && <div className=' absolute bg-black py-1 px-2 flex justify-center text-center items-center rounded-xl text-[12px] text-white '>{text}</div>}
        </div>
    )
}

export default CopyBtn
