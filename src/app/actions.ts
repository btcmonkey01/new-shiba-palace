"use server"
import { prisma } from "./lib/db";
import { PUSHER_APP_ID, PUSHER_SECRET } from "./config";
import { reduceAddressString } from "./utils/web";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export async function postData(formData: FormData, account: string) {
  'use server'
  const Pusher = require('pusher')

  const _address = reduceAddressString(account)
  const session = await getServerSession(authOptions);
  const message = formData.get('message')

  const data = await prisma.message.create({
    data: {
      message: message as string,
      email: _address
    },
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
