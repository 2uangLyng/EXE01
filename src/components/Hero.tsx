import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="w-full">
      <div className="relative">
        <Image
          alt="Saigon cityscape with sunset"
          className="w-full h-80 lg:h-[650px] object-cover"
          height="600"
          src="https://storage.googleapis.com/a1aa/image/_j5_pc85Cn-3r820TX0bH07gPN1JKhIMq4n70H6B2fU.jpg"
          width="1200"
        />
        <div className="absolute bg-opacity-50 flex flex-col items-center text-center top-1/3 max-w-[900px] text-white left-1/2 -translate-x-1/2 w-full lg:left-1/3 lg:items-start">
          <h1 className="text-4xl lg:text-9xl font-bold text-center lg:text-start ">
            ĐI SÀI GÒN CHƠI HONG ?
          </h1>
          <div className="text-xl py-2 lg:text-4xl lg:py-4 font-medium max-w-[900px]">
            <Link
              href="#"
              className="bg-blue-400 text-white py-2 px-5 rounded-full flex items-center gap-2"
            >
              <p>Về À Sài Gòn</p>
              <p>
                <ArrowRightIcon className="h-5 w-5 lg:h-10 lg:w-10" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
