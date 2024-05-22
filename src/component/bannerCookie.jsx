import React from "react";

const HiddenCookie = () => {
  document.getElementById("cookie-banner").style.display = "none";
}

function BannerCookie() {
  return (
    <>
      <div className="abolute w-screen block" id="cookie-banner">
        <div className="flex justify-center items-center h-16 text-white">
          <p className="text-center">
            We use cookies to ensure you get the best experience on our website.{" "}
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
          &nbsp;&nbsp;
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={ HiddenCookie}
          >
            Got it!
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerCookie;
