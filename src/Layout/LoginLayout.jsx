import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function LoginLayout() {
  const changeBackground = () => {
    document.body.style.backgroundColor = "rgba(220, 220, 220, 0.4)";
  };

  const userName = "teerak";
  const passWord = "Twc@1234";

  const form = useRef();

  let setLogin = false;

  const checkLogin = (e) => {
    e.preventDefault();

    console.log(form.current.username.value);
    console.log(form.current.password.value);

    if (
      form.current.username.value === userName &&
      form.current.password.value === passWord
    ) {
      alert("Login Success");
      setLogin = true;
      console.log(setLogin);
    } else {
      alert("Username or Password is incorrect");
    }

  }

  return (
    changeBackground(),
    (
      <section id="login" className="flex justify-between">
        <div></div>
        <div className="flex flex-col justify-between">
          <div></div>
          <div className="bg-white w-96 h-full rounded-xl shadow mt-4 pt-8 pb-8">
            <div className="w-96 flex justify-between">
              <div></div>
              <img src="./logo.png" alt="logo" className="w-24 h-24 " />
              <div></div>
            </div>
            <h1 className="text-center pt-8 text-lg">
              LOGIN <br /> <b>TEERAKHAWAT CAN</b>
            </h1>
            <div className="px-8 pt-8">
              <form action="post" ref={form} onSubmit={checkLogin}>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-10 border border-gray-300 rounded-lg px-2"
                  name="username"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 border border-gray-300 rounded-lg px-2 mt-4"
                  name="password"
                />
                <button className="w-full h-10 bg-blue-500 text-white rounded-lg mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </section>
    )
  );
}

export default LoginLayout;
