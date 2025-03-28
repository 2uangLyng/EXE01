"use client";
import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import { ShippingOption } from "@/types/shipping";
import { useState } from "react";

const CartPage = () => {
  const [step, setStep] = useState(1);

  const shippingOptions: ShippingOption[] = [
    { label: "Gia hàng tiết kiệm: 30.000 VND", value: 30000 },
    { label: "Giao hàng tiêu chuẩn: 40.000 VND", value: 40000 },
    { label: "Giao hàng nhanh: 50.000 VND", value: 50000 },
  ];
  const [shipping, setShipping] = useState(shippingOptions[0].value); // Lưu phí vận chuyển

  return (
    <div className="relative container mx-auto pt-[120px]">
      <h1 className="font-black text-4xl text-center text-orange-400 pb-10">
        CHỐT ĐƠN !
      </h1>
      <div className="flex justify-center items-center space-x-48 relative w-full bg-blue-200 h-20 rounded-2xl max-w-[900px] mx-auto">
        {["Giỏ hàng", "Chi tiết thanh toán", "Hoàn tất đơn hàng"].map(
          (title, index) => (
            <div
              key={index}
              className="relative flex justify-center gap-2 items-center cursor-pointer"
              onClick={() => {
                if (index + 1 <= step) {
                  setStep(index + 1); // Chỉ cho phép quay lại bước trước
                }
              }}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold transition-all duration-500 ${
                  step >= index + 1 ? "bg-blue-500" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`font-medium transition-all duration-500 ${
                  step >= index + 1 ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                {title}
              </span>
            </div>
          )
        )}
      </div>

      {/* Hiển thị component theo bước */}
      {step === 1 && (
        <Step1
          setStep={setStep}
          shipping={shipping}
          setShipping={setShipping}
          shippingOptions={shippingOptions}
        />
      )}
      {step === 2 && <Step2 setStep={setStep} shipping={shipping} />}
      {step === 3 && <Step3 shipping={shipping} />}
    </div>
  );
};

export default CartPage;
