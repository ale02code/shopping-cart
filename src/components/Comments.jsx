import React, { useState } from "react";
import useComments from "../hooks/useComments";
import ArrowLeft from "../assets/arrow-left-fill.png";
import ArrowRight from "../assets/arrow-right-fill.png";

function Comments() {
  const { comments } = useComments();
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleLeft = () => {
    if (currentPosition === 0) return;

    setCurrentPosition(currentPosition - 1);
  };

  const handleRight = () => {
    if (currentPosition === 35) return;
    setCurrentPosition(currentPosition + 1);
  };

  return (
    <div className="h-80 w-screen bg-slate-500 relative flex justify-center items-center">
      <img
        src={ArrowLeft}
        alt=""
        className="h-10 absolute left-6 hover:cursor-pointer z-40 mb:left-2"
        onClick={handleLeft}
      />
      <div className="w-[90%] h-80 relative flex justify-center items-center">
        <div className="flex gap-4 justify-center items-center h-full w-full mx-auto overflow-hidden absolute mb:justify-start mb:w-64">
          {comments
            .slice(currentPosition, currentPosition + 4)
            .map((comment) => (
              <div
                key={comment.id}
                className="min-w-[290px] bg-white h-64 rounded-lg overflow-hidden shadow-md mb:min-w-full"
              >
                <div className="w-full bg-blue-700">
                  <strong className="text-xl block text-center p-2 text-white">
                    {comment.email}
                  </strong>
                </div>
                <p className="text-lg p-2">{comment.body}</p>
              </div>
            ))}
        </div>
      </div>
      <img
        src={ArrowRight}
        alt=""
        className="h-10 absolute right-6 hover:cursor-pointer z-40 mb:right-2"
        onClick={handleRight}
      />
    </div>
  );
}

export default Comments;
