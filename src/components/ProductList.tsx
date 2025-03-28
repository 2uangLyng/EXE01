"use client";
import { useCategories } from "@/app/hooks/useCategories";
import { useProducts } from "@/app/hooks/useProducts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useState } from "react";

function ProductList() {
  const { categories, loading } = useCategories();
  const { products } = useProducts();
  const router = useRouter(); // Khai báo useRouter
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const uniqueCategories = Array.from(new Set(categories));

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-4">
      {/* Đường kẻ trên */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center my-4">
        <div className="h-[1px] bg-black w-1/4 lg:w-1/3"></div>
        <div className="w-2/4 lg:w-1/3">
          <h3 className="w-full text-center text-xl font-bold">Sản phẩm mới</h3>
        </div>
        <div className="h-[1px] bg-black w-1/4 lg:w-1/3"></div>
      </div>
      {/* Danh Sách Sản Phẩm */}
      <div className="container mx-auto py-8">
        {uniqueCategories.map((category) => (
          <div key={`category-${category}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                {category.toUpperCase()}
              </h2>
              <div className=" flex items-center gap-2 cursor-pointer relative group">
                <span className="text-xl font-medium">Xem thêm</span>
                <ArrowRightIcon className="w-4 h-4" />
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transition-transform scale-x-0 group-hover:scale-x-100"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {filteredProducts
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <div
                    key={`product-${product.id}-${index}`}
                    className="text-start flex flex-col items-center mx-auto cursor-pointer"
                    onClick={() => router.push(`/products/${product.slug}`)} // Điều hướng khi click
                  >
                    <img
                      alt={product.name}
                      className="mb-2 w-[300px] h-[450px] object-cover rounded-2xl"
                      height="450"
                      src={product.image}
                      width="300"
                    />
                    <div className="w-full flex flex-row items-start gap-2">
                      <strong className="text-lg">
                        [{product.category.toUpperCase()}]
                      </strong>
                      <span className="text-lg">{product.name}</span>
                    </div>
                    <p className="text-lg font-bold text-start w-full">
                      {product.price.toLocaleString()} VND
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* Đường kẻ dưới */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center my-4">
        <div className="h-[1px] bg-black w-1/3"></div>
        <div className="h-[1px] bg-black w-1/3"></div>
      </div>
    </div>
  );
}

export default ProductList;
