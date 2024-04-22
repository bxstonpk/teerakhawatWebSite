import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function QuotationForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8ofuk61", "template_8hugp6d", form.current, {
        publicKey: "m0JBf9d5-DgUriMGv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section className="absolute">
      <div className="w-screen h-screen py-8 px-4 md:px-32 lg:px-52 xl:px-80 2xl:px-96">
        <div className="bg-black py-2 rounded-lg  text-center">
          <span className="text-white">Quatation Teerakhawat Can Co.,LTD.</span>
        </div>
        <div className="pt-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-md rounded-xl px-4 pt-6 pb-8 mb-4 md:text-xl lg:text-2xl"
          >
            <b>Information</b>
            <input
              type="text"
              name="qtName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="nameQT"
              placeholder="Name"
            />
            <input
              type="text"
              name="qtAddress"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="adQT"
              placeholder="Address"
            />
            <input
              type="text"
              name="qtContact"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ctQT"
              placeholder="Contact"
            />
            <input
              type="text"
              name="qtLineID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="LineQT"
              placeholder="Line ID (ไม่บังคับ)"
            />
            <input
              type="email"
              name="qtEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="emailQT"
              placeholder="E-mail"
            />
            <b className="">Quotation Form</b>
            <br />
            <select
              name="qtProduct1"
              id="product1"
              className="my-4 border py-2 w-full"
            >
              <option value="">Select Product to Quotation</option>
              <optgroup label="แกลลอน">
                <option value="gl">แกลลอนเหลี่ยมฝาเกลียว</option>
                <option value="glp">แกลลอนเหลี่ยมฝาป๊อบอัพ</option>
              </optgroup>
              <optgroup label="ปี๊บเหลี่ยม">
                <option value="bk">ปี๊บเหลี่ยมฝาเกลียว</option>
                <option value="bkp">ปี๊บเหลี่ยมฝาป๊อบอัพ</option>
                <option value="pkg">ปี๊บเหลี่ยมฝาเกลียวสีทอง</option>
                <option value="pkl">ปี๊บเหลี่ยมสีทองฝากว้าง</option>
              </optgroup>
            </select>
            <br />
            <select
              name="qtProduct2"
              id="product2"
              className="border py-2 w-full"
            >
              <option value="">Select Product to Quotation</option>
              <optgroup label="แกลลอน">
                <option value="gl">แกลลอนเหลี่ยมฝาเกลียว</option>
                <option value="glp">แกลลอนเหลี่ยมฝาป๊อบอัพ</option>
              </optgroup>
              <optgroup label="ปี๊บเหลี่ยม">
                <option value="bk">ปี๊บเหลี่ยมฝาเกลียว</option>
                <option value="bkp">ปี๊บเหลี่ยมฝาป๊อบอัพ</option>
                <option value="pkg">ปี๊บเหลี่ยมฝาเกลียวสีทอง</option>
                <option value="pkl">ปี๊บเหลี่ยมสีทองฝากว้าง</option>
              </optgroup>
            </select>
            <br />
            <select
              name="qtProduct3"
              id="product3"
              className="my-4 border py-2 w-full"
            >
              <option value="">Select Product to Quotation</option>
              <optgroup label="แกลลอน">
                <option value="gl">แกลลอนเหลี่ยมฝาเกลียว</option>
                <option value="glp">แกลลอนเหลี่ยมฝาป๊อบอัพ</option>
              </optgroup>
              <optgroup label="ปี๊บเหลี่ยม">
                <option value="bk">ปี๊บเหลี่ยมฝาเกลียว</option>
                <option value="bkp">ปี๊บเหลี่ยมฝาป๊อบอัพ</option>
                <option value="pkg">ปี๊บเหลี่ยมฝาเกลียวสีทอง</option>
                <option value="pkl">ปี๊บเหลี่ยมสีทองฝากว้าง</option>
              </optgroup>
            </select>
            <br />
            <div className="flex justify-between mx-8 lg:mx-24">
              <button
                type="submit"
                className="border border-primary-700 bg-primary-700 text-white px-8 py-1 rounded-xl"
              >
                Submit
              </button>
              <button type="button" className="px-8 py-1 hover:text-red-600">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuotationForm;
