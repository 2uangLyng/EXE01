"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchSection() {
  return (
    <section className="">
      <div className="pt-10 w-full flex flex-col items-center">
        {/* Ô tìm kiếm */}
        <div className="relative w-3/4 md:w-1/2 lg:max-w-[900px]">
          <input
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Tìm kiếm"
            type="text"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
        </div>

        {/* Tìm kiếm phổ biến */}
        <h2 className="mt-6 text-xl font-semibold text-teal-700">
          Tìm kiếm phổ biến
        </h2>
        <div className="m-4 flex flex-wrap justify-center gap-2">
          {[
            "Quán ăn",
            "Mua sắm",
            "Lịch sử",
            "Triển lãm",
            "Âm nhạc",
            "Quán nước",
            "Phương tiện",
            "Kiến trúc",
          ].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-teal-500 rounded-full text-teal-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Danh sách địa điểm trượt ngang */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide justify-start lg:justify-center">
            {[
              {
                title: "NHÀ THỜ TÂN ĐỊNH",
                img: "https://storage.googleapis.com/a1aa/image/8ir6Fvh5EuEK5hsEsIXoWtaWmA8hzEXks5RMP1AO-Go.jpg",
              },
              {
                title: "BƯU ĐIỆN THÀNH PHỐ",
                img: "https://storage.googleapis.com/a1aa/image/eW9vFCnmHVoBY3mFaUlUYUFsid87A_e2ImQ3JatKfnA.jpg",
              },
              {
                title: "CHỢ BẾN THÀNH",
                img: "https://storage.googleapis.com/a1aa/image/VH8DNVOCvVTgyPbeT3R0cXMgbCkZNOLoBy26qmoMFbc.jpg",
              },
              {
                title: "BẢO TÀNG MỸ THUẬT",
                img: "https://storage.googleapis.com/a1aa/image/b_JKEbdjuinILSQ7N40bPuyonA9Nu2eTCV77on9Wlew.jpg",
              },
            ].map((place, index) => (
              <div key={index} className="text-center flex-shrink-0 w-64">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full rounded-lg h-96 object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {place.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
