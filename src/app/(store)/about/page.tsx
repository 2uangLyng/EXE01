"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useDraggable } from "react-use-draggable-scroll";

function AboutPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { events } = useDraggable(scrollRef as React.MutableRefObject<HTMLDivElement>);

    return (
        <div className="max-w-[1440px] mx-auto pt-[120px] px-4">
            <h1 className="font-black text-4xl text-orange-400 text-center pb-8">
                À SÀI GÒN LÀ GÌ ?
            </h1>
            <p className="text-center text-lg text-gray-700 mb-4">
                À Sài Gòn là một nền tảng trực tuyến{" "}
                <strong>tôn vinh văn hóa Sài Gòn</strong> thông qua việc giới thiệu các
                địa danh nổi tiếng, ẩm thực đặc trưng và phong cách sống độc đáo. Đồng
                thời, nền tảng{" "}
                <strong>
                    cung cấp trải nghiệm mua sắm sáng tạo, nơi người dùng có thể tùy chỉnh
                    quần áo và phụ kiện bằng công nghệ tiên tiến như 3D và AI
                </strong>
                . Ngoài ra, một phần lợi nhuận sẽ được quyên góp để hỗ trợ cộng đồng địa
                phương, tạo nên một hệ sinh thái bền vững và ý nghĩa.
            </p>

            {/* Chỉ khu vực ảnh bị overflow */}
            <div className="relative w-full py-4 overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth select-none cursor-grab active:cursor-grabbing"
                    {...events}
                    style={{
                        userSelect: "none",
                        scrollbarWidth: "none",
                        scrollbarColor: "transparent transparent",
                        maxWidth: "100%", // Không để tràn toàn bộ trang
                    }}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            src="https://images.unsplash.com/photo-1617028214012-ad037508a10a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt={`Image ${index + 1}`}
                            className="w-[400px] h-[300px] object-cover select-none rounded-sm"
                            width={400}
                            height={300}
                            draggable={false}
                        />
                    ))}
                </div>
            </div>
            <h2 className="text-center text-3xl font-black text-blue-400 py-4">TẦM NHÌN</h2>
            <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <Image
                    src="https://images.unsplash.com/photo-1617028214012-ad037508a10a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Image`}
                    className="w-[500px] h-[500px] object-cover select-none rounded-sm"
                    width={400}
                    height={400}
                />
                <div>
                    <p className="text-xl">Trở thành nền tảng hàng đầu kết hợp du lịch, văn hóa và công nghệ cá nhân hóa, giúp mỗi người yêu Sài Gòn có thể trải nghiệm, thể hiện và kết nối với di sản của thành phố theo cách riêng của họ. À Sài Gòn mong muốn xây dựng một cộng đồng năng động, nơi mọi người không chỉ tìm hiểu về những nét đẹp truyền thống mà còn có thể sáng tạo và tùy chỉnh các sản phẩm mang đậm dấu ấn cá nhân. Chúng tôi hướng tới việc mở rộng hệ sinh thái dịch vụ, tạo ra một không gian trực tuyến sống động, giúp du khách và người dân địa phương tiếp cận dễ dàng với văn hóa Sài Gòn thông qua những trải nghiệm tương tác, sáng tạo và đầy cảm hứng.</p>
                </div>
                <Image
                    src="https://images.unsplash.com/photo-1617028214012-ad037508a10a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Image`}
                    className="w-[500px] h-[500px] object-cover select-none rounded-sm"
                    width={400}
                    height={400}
                />
            </div>
            <h2 className="text-center text-3xl font-black text-blue-400 py-8">SỨ MỆNH</h2>
            <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 justify-center items-center mb-30">
                <div className="w-full bg-orange-400 text-xl text-white p-3 rounded-2xl">Tôn vinh và lan tỏa vẻ đẹp của Sài Gòn thông qua nền tảng giới thiệu ẩm thực, địa danh và phong cách sống.</div>
                <div className="w-full bg-orange-400 text-xl text-white p-3 rounded-2xl">Ứng dụng công nghệ tiên tiến để nâng cao trải nghiệm mua sắm và khám phá văn hóa.</div>
                <div className="w-full bg-orange-400 text-xl text-white p-3 rounded-2xl">Cung cấp sản phẩm tùy chỉnh sáng tạo, giúp khách hàng thể hiện cá tính và tình yêu với thành phố.</div>
                <div className="w-full bg-orange-400 text-xl text-white p-3 rounded-2xl">Đóng góp vào cộng đồng địa phương thông qua các chương trình từ thiện và hỗ trợ phát triển bền vững.</div>
            </div>
        </div>
    );
}

export default AboutPage;
