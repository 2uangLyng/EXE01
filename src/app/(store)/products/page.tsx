"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useCategories } from "@/app/hooks/useCategories";
// import { useProducts } from "@/app/hooks/useProducts";
import Image from "next/image";

function ProductPage() {
  const { categories, loading } = useCategories();
  // const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const uniqueCategories = Array.from(new Set(categories));

  // const filteredProducts = selectedCategory
  //   ? products.filter((product) => product.category === selectedCategory)
  //   : products;

  return (
    <div className="pt-[120px] max-w-[1440px] mx-auto">
      <h2 className="text-4xl text-center font-black text-orange-400">
        À SÀI GÒN CÓ GÌ ?
      </h2>

      {/* Banner */}
      <div className="relative p-4">
        <Image
          src="https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1c2h8ZW58MHx8MHx8fDA%3D"
          alt="Plush Toy"
          className="w-full h-[250px] mx-auto rounded-2xl object-cover sm:h-[300px] md:h-[400px] lg:h-[500px] lg:w-[1440px]"
        />
        <div className="absolute bottom-10 right-10 md:right-20 lg:right-10">
          <Button
            variant={"outline"}
            className="flex justify-center items-center cursor-pointer"
          >
            <p> Tự thiết kế theo sở thích của bạn</p>
            <ArrowRightIcon className="text-center" />
          </Button>
        </div>
      </div>

      {/* Danh Mục */}
      <div className="w-full flex flex-col items-center px-4 gap-4 lg:flex-row lg:justify-center mt-6">
        {loading ? (
          <p>Đang tải danh mục...</p>
        ) : (
          <>
            {/* "Tất cả" button */}
            <button
              className={`bg-gray-200 px-4 py-2 rounded-lg font-bold transition ${
                selectedCategory === null ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Tất cả
            </button>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                className={`bg-gray-200 px-4 py-2 rounded-lg font-bold transition ${
                  selectedCategory === category ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
