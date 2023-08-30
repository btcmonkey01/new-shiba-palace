import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

 

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID as string,
      clientSecret: GITHUB_CLIENT_SECRET as string
    })
  ]
}