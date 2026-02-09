import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Typewriter } from 'react-simple-typewriter'
import CopyBtn from "./CopyBtn";
import { Ellipsis, ThumbsDown, ThumbsUp } from "lucide-react";


interface Msg {
  role: "chatbot" | "user";
  text: string;
}

interface Msgprops {
  msg: Msg
}

const Message: React.FC<Msgprops> = ({ msg }) => {
  const [answer, setAnswer] = useState<string[]>([]);
  const [like, setLike] = useState<Boolean>(false);
  const [hover, setHover] = useState(false)


  function checkHeading(str: string): boolean {
    return /^(\*\*)(.+)(\*)$/.test(str);
  }

  const setHeading = (str: string) => {
    return str.replace(/^(\*\*)(.+)(\*)$/, "$2");
  };

  const HandleLike =() => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false);
      
    }
  }
  

  useEffect(() => {
    if (msg.role === "chatbot") {
      const arr = msg.text;
      const aitext = arr
        .split("* ")
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);
      setAnswer(aitext);
    }
  }, [msg]);

  const renderer = {
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter {...props}
          language={match[2]}
          style={dark}
          preTag="div"
        >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>

      ) : (<code {...props} className={className}>{children}</code>)
    }
  }

  return (
    <div>
      {msg.role === "user" ? (
        <div onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-full flex flex-col gap-3 justify-end items-end">
          <div className="flex flex-col justity-end h-[70px] transition-all duration-500">
            <span className="text-[14px] min-w-fit max-w-[60%] p-3 rounded-2xl h-fit bg-[#343434] ">
              {msg.text}
            </span>
            {hover &&
              <div className="w-full h-fit flex justify-end">
                <CopyBtn msg={msg.text} />
              </div>
            }
          </div>
        </div>
      ) : (
        <span className="text-[15px] w-[90%] h-fit">
          {answer.length === 1
            ? < >
              <div>
                <Typewriter
                  words={answer}
                  cursor
                  cursorStyle=''
                  typeSpeed={30}
                  delaySpeed={1000}
                />
              </div>
              <div className="flex gap-3 items-center">
                <CopyBtn msg={msg.text} />
                <like/>
                {!like&&
                  <button className="m-2 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600">
                  <ThumbsDown size={18} />
                </button>
                }
                <button className="m-2 cursor-pointer h-[15px] w-[15px] rounded-full hover:bg-gray-600">
                    <Ellipsis size={18}/>
                </button>
              </div>
            </>
            : answer.map((item, index) => (
              <>
                <ul key={index}>
                  <li
                    className={
                      checkHeading(item)
                        ? "font-bold block py-3 text-[17px]"
                        : "pl-[5px]"
                    }
                  >
                    {checkHeading(item) ? setHeading(item) : <ReactMarkdown components={renderer}>{item}</ReactMarkdown>}
                  </li>
                </ul>
                <CopyBtn msg={msg.text} />
              </>
            ))}
        </span>
      )}
    </div>
  );
};

export default Message;





// Example: Using forEach to display items in an array





