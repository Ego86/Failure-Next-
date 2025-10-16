"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

class Auth {
  async login(formData: FormData) {
    try {
      const email = formData.get("email");
      const password = formData.get("password");
      const cookieStore = await cookies();
      const userData = JSON.stringify({ email, password });
      const response = await fetch(
        "https://failure-server.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: userData,
        }
      );
const data = await response.json()

      if (response.ok) {
        cookieStore.set("access_token",data.accessToken, { maxAge: 3600 });
        redirect("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async register(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = await cookies();
    const userData = JSON.stringify({ name, email, password });
    try {
      const response = await fetch(
        "http://localhost:1000/users/login",
        {
          method: "POST",
          cache: "force-cache",
          headers: { "Content-Type": "application/json" },
          body: userData,
        }
      );
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        cookieStore.set("access_token", data.accessToken, { maxAge: 3600 });
        redirect("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export const { login, register } = new Auth();
