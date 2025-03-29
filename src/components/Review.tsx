import Image from "next/image";
import React from "react";

function Review() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-6 p-4">
        {/* Phần Review 1 */}
        <div className="flex gap-4 w-full md:w-1/2">
          <div className="shrink-0">
            <Image
              src="https://storage.googleapis.com/a1aa/image/VH8DNVOCvVTgyPbeT3R0cXMgbCkZNOLoBy26qmoMFbc.jpg"
              alt="Review Image"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-sky-600">
              BÁNH MÌ, CÀ PHÊ GÌ CHƯA NGƯỜI ĐẸP? ^^
            </h3>
            <p className="text-start w-full md:w-3/4 pt-4">
              Sáng dậy sớm ngồi cà phê bệt ở nhà thờ Đức Bà, tay trái ổ bánh mì
              tay phải ly cà phê, ngon lành :))
            </p>
          </div>
        </div>

        {/* Phần Review 2 */}
        <div className="flex gap-4 w-full md:w-1/2">
          <div className="shrink-0">
            <Image
              src="https://storage.googleapis.com/a1aa/image/VH8DNVOCvVTgyPbeT3R0cXMgbCkZNOLoBy26qmoMFbc.jpg"
              alt="Review Image"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-sky-600">
              THÊM MỘT LẦN CÀ PHÊ NỮA NHÉ!
            </h3>
            <p className="text-start w-full md:w-3/4 pt-4">
              Nếu sáng nay chưa uống cà phê thì chiều làm một ly nhen. Đắng nhẹ
              mà thơm lừng! 😍
            </p>
          </div>
        </div>
      </div>

      {/* Ảnh nền phía dưới */}
      <div className="w-full pt-5">
        <Image
          alt="Saigon cityscape with sunset"
          className="w-full h-80 lg:h-[800px] object-cover"
          height="600"
          src="https://storage.googleapis.com/a1aa/image/_j5_pc85Cn-3r820TX0bH07gPN1JKhIMq4n70H6B2fU.jpg"
          width="1200"
        />
      </div>
    </section>
  );
}

export default Review;
