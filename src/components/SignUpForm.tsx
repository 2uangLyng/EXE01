"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export function SignUp({ toggle }: { toggle: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Đăng ký thành công!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-12">
      <h1 className="text-2xl font-bold">Tạo tài khoản</h1>
      <div className="flex space-x-2 my-4">
        <FaGoogle className="p-2 border rounded-full w-10 h-10" />
        <FaFacebookF className="p-2 border rounded-full w-10 h-10" />
        <FaGithub className="p-2 border rounded-full w-10 h-10" />
        <FaLinkedinIn className="p-2 border rounded-full w-10 h-10" />
      </div>
      <div className="grid gap-4 w-4/5 mt-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Họ và Tên</Label>
          <Input
            id="name"
            type="text"
            required
            className="h-12"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            className="h-12"
            placeholder="nguyenvana@gmail.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" type="password" required className="h-12" />
        </div>
        <Button type="submit" className="w-full h-12" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>
      </div>
      <p className="mt-4">
        Đã có tài khoản?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggle}>
          Đăng nhập
        </span>
      </p>
    </form>
  );
}
