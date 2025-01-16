"use server";
import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };
  try {
    await connectMongo();

    //insert into database
    await new User(userData).save();

    //revalidate users
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async () => {
  try {
    await connectMongo();

    //get user
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};