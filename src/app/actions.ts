"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { prisma } from "./lib/db";
import { PUSHER_APP_ID, PUSHER_SECRET } from "./config";

export async function postData(formData: FormData) {
  'use server'
  const Pusher = require('pusher')

  const session = await getServerSession(authOptions);
  const message = formData.get('message')

  const data = await prisma.message.create({
    data: {
      message: message as string,
      email: session?.user?.email
    },
    include: {
      User: {
        select: {
          name: true
        }
      }
    }
  })

  const pusher = new Pusher({
    appId: PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    secret: PUSHER_SECRET,
    cluster: 'us2',
    useTLS: true
  })

  await pusher.trigger('chat', 'hello', {
    message: `${JSON.stringify(data)}\n\n`
  })
}

export const getMessages = async () => {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      createdAt: 'asc'
    },
  })

  return data;
}
