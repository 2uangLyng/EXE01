"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Lấy thông tin session

  const navBarData = [
    "Trang chủ",
    "Giới thiệu",
    "Khám phá",
    "Sản phẩm",
    "Giỏ hàng",
    "Liên hệ",
  ];

  return (
    <nav className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#f8f9fa] to-transparent z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 gap-4">
        {/* Logo */}
        <div>
          <img
            alt="Saigon logo"
            className="h-[80px] w-[100px]"
            height="100"
            src="/images/logo.png"
            width="100"
          />
        </div>

        {/* Navigation Menu */}
        <div className="items-center hidden lg:flex">
          <ul className="flex space-x-6 ml-6">
            {navBarData.map((item, index) => (
              <li key={index} className="relative group">
                <a className="text-white" href="#">
                  {item}
                </a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Auth Section */}
        <div className="items-center space-x-4 hidden lg:flex">
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-black">
                Chào, <strong>{session.user?.name}</strong>!
              </span>
              <button
                onClick={() => signOut()}
                className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded-2xl"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
            >
              Đăng kí / Đăng nhập
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 text-orange-400 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col z-50"
          >
            <button onClick={() => setIsOpen(false)} className="self-end mb-4">
              <XMarkIcon className="h-6 text-gray-700 cursor-pointer" />
            </button>
            <ul className="space-y-4 py-4">
              {navBarData.map((item, index) => (
                <li key={index} className="relative group">
                  <a className="text-gray-700 block" href="#">
                    {item}
                  </a>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </li>
              ))}
            </ul>
            <hr />
            {/* Hiển thị thông tin user */}
            {session ? (
              <div className="py-5 flex flex-col gap-y-5">
                <h3 className="text-black">
                  Chào, <strong>{session.user?.name}</strong>!
                </h3>
                <button
                  onClick={() => signOut()}
                  className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded-2xl"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-2xl mt-5"
              >
                Đăng kí / Đăng nhập
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
