import React from "react";

function ProductCard() {
  return (
    <section id="productCard">
      <div className="border border-gray-400 rounded-2xl bg-white py-2">
        <div className="">
          <img
            src="./GallonSim.png"
            alt="product"
            className="w-32 h-32 object-cover content-center justify-center "
          />
        </div>
        <div className="mx-2 text-yellow-500">
          <span className="text-sm">Gallon Items</span>
        </div>
        <div className="mx-2">
          <div>
            <span className="text-sm">แกลลอนเหลี่ยมฝาเกลียว 1.5”</span>
            <br />
            <span className="text-sm">น้ำหนัก 0.4 กก.</span>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-red-500">Price : TBA</p>
            <img
              src="./shopping-cart.png"
              alt=""
              className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-4 md:grid-cols-3 gap-2 lg:flex my-6 md:my-10">
        <div className="border border-gray-400 w-42 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
          <div className="">
            <img
              src="./gallonreal.png"
              alt="product"
              className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>
          <div className="mx-2 text-yellow-500">
            <span className="text-sm lg:text-lg">Gallon Items</span>
          </div>
          <div className="mx-2">
            <div>
              <span className="text-xs md:text-sm lg:text-xl">
                แกลลอนเหลี่ยมฝาเกลียว
              </span>
              <br />
              <span className="text-xs md:text-sm lg:text-xl"></span>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-red-500 md:text-xl lg:text-2xl">Price : TBA</p>
              <img
                src="./shopping-cart.png"
                alt=""
                className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-400 w-42 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
          <div className="">
            <img
              src="./bucketreal.png"
              alt="product"
              className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>
          <div className="mx-2 text-yellow-500">
            <span className="text-sm lg:text-lg">Bucket Items</span>
          </div>
          <div className="mx-2">
            <div>
              <span className="text-xs md:text-sm lg:text-xl">
                ปี๊บเหลี่ยมฝาเกลียว
              </span>
              <br />
              <span className="text-xs md:text-sm lg:text-xl"></span>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-red-500 md:text-xl lg:text-2xl">Price : TBA</p>
              <img
                src="./shopping-cart.png"
                alt=""
                className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-400 w-42 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
          <div className="">
            <img
              src="./bucketpopup.png"
              alt="product"
              className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>
          <div className="mx-2 text-yellow-500">
            <span className="text-sm lg:text-lg">Bucket Items</span>
          </div>
          <div className="mx-2">
            <div>
              <span className="text-xs md:text-sm lg:text-xl">
                ปี๊บเหลี่ยมฝาป๊อบอัพ
              </span>
              <br />
              <span className="text-xs md:text-sm lg:text-xl"></span>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-red-500 md:text-xl lg:text-2xl">Price : TBA</p>
              <img
                src="./shopping-cart.png"
                alt=""
                className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-400 w-42 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
          <div className="">
            <img
              src="./bucketgold.png"
              alt="product"
              className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>
          <div className="mx-2 text-yellow-500">
            <span className="text-sm lg:text-lg">Bucket Items</span>
          </div>
          <div className="mx-2">
            <div>
              <span className="text-xs md:text-sm lg:text-xl">
                ปี๊บเหลี่ยมฝาเกลียวสีทอง
              </span>
              <br />
              <span className="text-xs md:text-sm lg:text-xl"></span>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-red-500 md:text-xl lg:text-2xl">Price : TBA</p>
              <img
                src="./shopping-cart.png"
                alt=""
                className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
