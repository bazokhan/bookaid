/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

// check to use this workaround only in development and not in production
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}
export default prisma