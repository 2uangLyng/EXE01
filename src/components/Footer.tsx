import React from "react";

function Footer() {
  return (
    <footer className="py-10 bg-[#023048]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-[#F77F00]">Àsài gòn</h1>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16 text-white text-center">
          <div className="mb-6 md:mb-0 ">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  TRANG CHỦ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  GIỚI THIỆU
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  KHÁM PHÁ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  SẢN PHẨM
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  GIỎ HÀNG
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold mb-2">LIÊN HỆ</h2>
            <p>Điện thoại: (84+) 1234567890</p>
            <p>Email: asaigon123@gmail.com</p>
            <p>Location: Ho Chi Minh City - Viet Nam</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold mb-2">THEO DÕI À SÀI GÒN</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
