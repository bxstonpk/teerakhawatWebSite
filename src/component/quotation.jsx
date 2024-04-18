import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Quotation() {

  return (
    <section id="quotation" className="w-screen h-screen bg-gray-100 py-8 px-4 md:px-32 lg:px-52 xl:px-80 2xl:px-96">
      <div className="bg-black py-2 rounded-lg  text-center">
        <span className="text-white">Quatation Teerakhawat Can Co.,LTD.</span>
      </div>
      <div className="h-4"></div>
      <div>
        <form className="bg-white shadow-md rounded-xl px-4 pt-6 pb-8 mb-4 md:text-xl lg:text-2xl">
          <b>Information</b>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="nameQT"
            placeholder="Name"
          />
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="adQT"
            placeholder="Address"
          />
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="ctQT"
            placeholder="Contact"
          />
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="LineQT"
            placeholder="Line ID (ไม่บังคับ)"
          />
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="emailQT"
            placeholder="E-mail"
          />
          <b className="">Quotation Form</b>
          <br />
          <div className="mt-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="pdQT1"
              placeholder="Enter Product Ex. แกลลอนเหลี่ยม"
            />
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="pdQT2"
              placeholder="Enter Product Ex. ปี๊บเหลี่ยม"
            />
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="pdQT_"
              placeholder="Enter Product Ex. ปี๊บเหลี่ยมสีทอง"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between mx-16">
        <div className="bg-green-700 px-6 py-1 rounded-xl text-white hover:shadow">
          <a href="#">
            Submit
          </a>
        </div>
        <div className="bg-red-700 px-6 py-1 rounded-xl text-white hover:shadow">
          <Link to="/">
            Cancel
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quotation;