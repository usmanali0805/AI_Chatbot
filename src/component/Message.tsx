import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CopyBtn from "./CopyBtn";
import List from "./List";


interface Msg {
  role: "chatbot" | "user";
  text: string;
  isStreaming?: boolean;
}

interface Msgprops {
  msg: Msg
}

const Message: React.FC<Msgprops> = ({ msg }) => {
  const [hover, setHover] = useState(false)

  const renderer = {
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter {...props}
          language={match[1]}
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
        <span className="text-[15px] w-[90%] flex flex-col gap-3 h-fit">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown components={renderer}>{msg.text}</ReactMarkdown>
            {msg.isStreaming && <span className="inline-block w-2 h-4 ml-1 bg-gray-300 animate-pulse rounded-sm" />}
          </div>
          {!msg.isStreaming && <List msg={msg.text} />}
        </span>
      )}
    </div>
  );
};

export default Message;





