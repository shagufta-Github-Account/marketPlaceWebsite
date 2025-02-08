"use server"

import { client } from "@/sanity/lib/client"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function clerkGetUser() {
  const { userId } = await auth()
  const user = await currentUser()

  if (!user) {
    throw new Error("User not found")
  }

  const userName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Anonymous"
  const userEmail = user.emailAddresses[0]?.emailAddress ?? user.externalAccounts[0]?.emailAddress ?? null
  const userAvatar = user.imageUrl ?? null

  return { userId, userName, userEmail, userAvatar }
}

export async function sanityUserPost() {
  try {
    const user = await clerkGetUser()

    const userObject = {
      _type: "user",
      _id: `user-${user.userId}`,
      email: user.userEmail,
      name: user.userName,
      image: user.userAvatar,
      userId: user.userId,
    }

    const result = await client.createOrReplace(userObject)
    console.log("User created or updated in Sanity:", result)
    return result
  } catch (error) {
    console.error("Error creating or updating user in Sanity:", error)
    throw error
  }
}

