import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FourOFourPage = () => {
  const divRef = useRef(null);

  const backgroundPositionHandler = (e) => {
    divRef.current.style.backgroundPositionX = e.screenX / 5 + "px";
    divRef.current.style.backgroundPositionY = e.screenY / 5 + "px";
  };

  useEffect(() => {
    let isUserOnPage = true;

    isUserOnPage &&
      window.addEventListener("mousemove", backgroundPositionHandler);

    return function cleanup() {
      isUserOnPage = false;

      !isUserOnPage &&
        window.removeEventListener("mousemove", backgroundPositionHandler);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`flex flex-col items-center justify-center w-screen h-screen bg-P404 bg-slate-900`}
    >
      <div className="text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-50 ">
          <h1 className="text-9xl">404</h1>
          <h3 className="text-2xl font-bold ">The page not found!</h3>
          <p>Something went wrong. do you want to try later?!</p>
          <Link to="/" className="px-8 py-2 bg-indigo-500 rounded-md ">
            Get back to the home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourOFourPage;
