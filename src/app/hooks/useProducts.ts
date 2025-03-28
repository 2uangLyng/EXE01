"use client";
import { useState, useEffect } from "react";

// Dữ liệu mẫu
const mockProducts = [
  {
    id: 1,
    name: "Áo Thun Đen",
    price: 200000,
    category: "Áo Thun",
    slug: "ao-thun-den",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Áo Thun Xanh",
    price: 450000,
    category: "Áo Thun",
    slug: "ao-thun-xanh",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    name: "Áo Thun Trắng",
    price: 450000,
    category: "Áo Thun",
    slug: "ao-thun-trang",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Túi Tote Xanh",
    price: 500000,
    category: "Túi tote",
    slug: "tui-tote-xanh",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Túi Tote Đen",
    price: 210000,
    category: "Túi tote",
    slug: "tui-tote-den",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Sticker Trái Tim",
    price: 400000,
    category: "Sticker",
    slug: "sticker-trai-tim",
    image:
      "https://storage.googleapis.com/a1aa/image/StZF4WBmfArq0AQGVGMxoV6MEXySrFISQp7JdWGuaOw.jpg",
    colors: [
      {
        value: "red",
        label: "đỏ",
      },
      {
        value: "black",
        label: "đen",
      },
      {
        value: "blue",
        label: "xanh dương",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];
export const useProducts = () => {
  const [products, setProducts] = useState<typeof mockProducts>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000); // Giả lập delay tải dữ liệu
  }, []);

  return { products, loading };
};
