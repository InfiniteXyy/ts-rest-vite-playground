import { PrismaClient } from '@prisma/client';
import { initServer } from '@ts-rest/express';
import { contract } from './contract';

export const prisma = new PrismaClient();

const server = initServer();

export const router = server.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post = await prisma.post.findFirst({ where: { id } });
    return { status: 200, body: post };
  },
  createPost: async ({ body }) => {
    const post = await prisma.post.create({ data: body });
    return { status: 201, body: post };
  },
});
