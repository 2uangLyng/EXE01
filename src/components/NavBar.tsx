"use client";
import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWhistlist";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const navBarData = [
    { title: "Trang chủ", link: "/" },
    { title: "Giới thiệu", link: "/about" },
    { title: "Khám phá", link: "/explore" },
    { title: "Sản phẩm", link: "/products" },
    { title: "Liên hệ", link: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#f8f9fa] to-transparent z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 gap-4">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="Saigon logo"
            className="h-[80px] w-[100px]"
            src="/images/logo.png"
            width="100"
            height="100"
          />
        </Link>

        {/* Navigation Menu */}
        <div className="items-center hidden lg:flex">
          <ul className="flex space-x-6 ml-6">
            {navBarData.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  className={`${
                    pathname === item.link ? "font-bold" : "text-black"
                  } block`}
                  href={item.link}
                >
                  {item.title}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transition-transform ${
                    pathname === item.link
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Auth Section */}
        <div className="items-center hidden lg:flex space-x-10">
          {/* Icons Section */}
          <div className="items-center space-x-6 hidden lg:flex">
            <Link href="/wishlist" className="relative">
              <HeartIcon className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-black">
                Chào, <strong>{session.user?.name}</strong>!
              </span>
              <Button
                onClick={() => signOut()}
                className="bg-red-500 text-white py-1 px-4 rounded-2xl cursor-pointer"
              >
                Đăng xuất
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => signIn()}
              className="bg-blue-500 text-white py-1 px-4 rounded-2xl cursor-pointer"
            >
              Đăng kí / Đăng nhập
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 text-orange-400 cursor-pointer" />
          </button>
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
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-4"
              >
                <XMarkIcon className="h-6 text-gray-700 cursor-pointer" />
              </button>
              <ul className="space-y-4 py-4">
                {navBarData.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      className={`${
                        pathname === item.link ? "font-bold" : "text-black"
                      } block`}
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transition-transform ${
                        pathname === item.link
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-6 lg:hidden my-5">
                <Link href="/wishlist" className="relative">
                  <HeartIcon className="h-6 w-6" />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                <Link href="/cart" className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2 py-1">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
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
      </div>
    </nav>
  );
}

export default NavBar;
