import React from "react";

function ProductHomePage() {
  return (
    <section className="relative w-full">
      {/* Đường kẻ trên */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center my-4">
        <div className="h-[1px] bg-black w-1/4 lg:w-1/3"></div>
        <div className="w-2/4 lg:w-1/3">
          <h3 className="w-full text-center text-xl font-bold">Sản phẩm mới</h3>
        </div>
        <div className="h-[1px] bg-black w-1/4 lg:w-1/3"></div>
      </div>

      {/* Nội dung chính */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide justify-start lg:justify-center lg:gap-32">
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

      {/* Đường kẻ dưới */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center my-4">
        <div className="h-[1px] bg-black w-1/3"></div>
        <div className="h-[1px] bg-black w-1/3"></div>
      </div>
    </section>
  );
}

export default ProductHomePage;
