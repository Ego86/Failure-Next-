"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const actionSendUser = async (formData: FormData) => {
const name = formData.get("name")
const email = formData.get("email")
console.log(name, email)
const cookieStore = await cookies()
cookieStore.set("auth", "true")
redirect("/home")
}

export default actionSendUser