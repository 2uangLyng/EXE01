import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // Kiểm tra dữ liệu đầu vào
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          // console.log("email", email);
          // console.log("password", password);
          // User test cứng
          const testUser = {
            id: "1",
            name: "Test User",
            email: "voquanglinh999@gmail.com",
            password: "test12345", // Mật khẩu test
          };

          // Kiểm tra email và password có khớp không
          if (email !== testUser.email || password !== testUser.password) {
            throw new Error("Tài khoản hoặc mật khẩu không hợp lệ !");
          }

          // Trả về user nếu đăng nhập thành công
          return {
            id: testUser.id,
            name: testUser.name,
            email: testUser.email,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            throw new Error("Dữ liệu nhập vào không hợp lệ.");
          }
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
});
