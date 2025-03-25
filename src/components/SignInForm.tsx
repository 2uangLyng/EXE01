"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export function SignIn({ toggle }: { toggle: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Reset lỗi trước khi gửi request
    setLoading(true); // Hiển thị loading

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Kiểm tra dữ liệu trước khi gửi
    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
      setLoading(false);
      return;
    }

    try {
      console.log("🚀 Đang gửi dữ liệu đăng nhập:", { email, password });

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Không tự động chuyển hướng
        callbackUrl: "/", // Điều hướng sau khi đăng nhập thành công
      });

      console.log("🔍 Kết quả đăng nhập:", result);

      if (result?.error) {
        setError("Email hoặc mật khẩu không đúng.");
      } else {
        router.push("/"); // Chuyển hướng nếu đăng nhập thành công
      }
    } catch (error) {
      console.error("❌ Lỗi đăng nhập:", error);
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-12">
      <h1 className="text-3xl font-bold">Đăng nhập</h1>
      <div className="flex space-x-2 my-5">
        <FaGoogle className="p-2 border rounded-full w-10 h-10" />
        <FaFacebookF className="p-2 border rounded-full w-10 h-10" />
        <FaGithub className="p-2 border rounded-full w-10 h-10" />
        <FaLinkedinIn className="p-2 border rounded-full w-10 h-10" />
      </div>
      <div className="grid gap-4 w-4/5 mt-5">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            className="h-12"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            id="password"
            type="password"
            name="password"
            required
            className="h-12"
          />
        </div>
        <Button type="submit" className="w-full h-12" disabled={loading}>
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </div>
      {/* <p className="mt-4">
        Chưa có tài khoản?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggle}>
          Đăng ký
        </span>
      </p> */}
    </form>
  );
}
