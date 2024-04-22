import React from "react";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <section id="ProductCard" className="lg:px-20 xl:px-48 2xl:px-72">
      <div className="text-center my-4 md:my-8 md:text-xl lg:text-2xl">
        <span className="">Our Product</span>
        <br />
        <span>Teerakhawat Can Company Limited</span>
      </div>
      <div className="flex justify-between pb-4 lg:pb-8">
        <div></div>
        <div className="border-2 w-32 py-2 md:py-3 md:w-48 lg:w-52 text-center bg-primary-700 text-white rounded-lg hover:rounded-3xl hover:bg-primary-800">
          <span className="md:text-xl lg:text-2xl">
            <Link to="/quotation">ขอใบเสนอราคา</Link>
          </span>
        </div>
        <div></div>
      </div>
      <span className="text-2xl md:text-3xl lg:text-3xl pl-4">
        Gallon Items
      </span>
      <div className="bg-gray-200 mx-4 py-4">
        <div className="pl-6 py-4 text-lg lg:text-xl border-b-slate-400 border">
          <p>On Sale by Teerakhawat Can</p>
        </div>
        <div className="flex md:justify-between bg-white mx-4">
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./gallonreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  แกลลอนเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  น้ำหนัก 0.4 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./gallonreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  แกลลอนเหลี่ยมฝาป็อพอัพ 1.5”
                  <br />
                  น้ำหนัก 0.4 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./gallonreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  แกลลอนเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  คอ 2 ชั้น
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:my-6 lg:my-10"></div>

      <span className="text-2xl md:text-3xl lg:text-3xl pl-4">
        Bucket Items 1.5"
      </span>
      <div className="bg-gray-200 mx-4 py-4">
        <div className="pl-6 py-4 text-lg lg:text-xl border-b-slate-400 border">
          <p>On Sale by Teerakhawat Can</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 md:justify-between bg-white mx-4">
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  น้ำหนัก 1.0 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  น้ำหนัก 1.1 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  คอ 1.2 ชั้น
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="w-32 h-32 object-cover md:w-48 md:h-48 lg:w-56 lg:h-56">
              <img src="./bucketpopup.png" alt="product" className="" />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาป๊อบอัพ 1.5”
                  <br />
                  น้ำหนัก 1.1 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="w-32 h-32 object-cover md:w-48 md:h-48 lg:w-56 lg:h-56">
              <img src="./bucketreal.png" alt="product" className="" />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 1.5”
                  <br />
                  10 ลิตร
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:my-6 lg:my-10"></div>

      <span className="text-2xl md:text-3xl lg:text-3xl pl-4">
        Bucket Items 2.5"
      </span>
      <div className="bg-gray-200 mx-4 py-4">
        <div className="pl-6 py-4 text-lg lg:text-xl border-b-slate-400 border">
          <p>On Sale by Teerakhawat Can</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 md:justify-between bg-white mx-4">
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 2.5”
                  <br />
                  น้ำหนัก 1.1 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว 2.5”
                  <br />
                  น้ำหนัก 1.2 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:my-6 lg:my-10"></div>

      <span className="text-2xl md:text-3xl lg:text-3xl pl-4">
        Bucket Golden Items
      </span>
      <div className="bg-gray-200 mx-4 py-4">
        <div className="pl-6 py-4 text-lg lg:text-xl border-b-slate-400 border">
          <p>On Sale by Teerakhawat Can</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 md:justify-between bg-white mx-4">
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมสีทอง ฝาเกลียว 1.5”
                  <br />
                  น้ำหนัก 1.1 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมสีทอง ฝาเกลียว 2.5”
                  <br />
                  น้ำหนัก 1.1 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมสีทอง ฝาเกลียว 2.5”
                  <br />
                  น้ำหนัก 1.2 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียวสีทอง 3.0”
                  <br />
                  น้ำหนัก 1.2 กก.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="w-42 rounded-2xl md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="product"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมสีทองฝากว้าง 8”
                  <br />
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:my-6 lg:my-10"></div>
    </section>
  );
}

export default ProductCard;
