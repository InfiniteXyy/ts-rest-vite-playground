import { initServer } from '@ts-rest/express';
import { contract } from './contract';
import { dbManager } from './model';

const server = initServer();

export const router = server.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post = dbManager.find(id) ?? null;
    return { status: 200, body: post };
  },
  createPost: async ({ body }) => {
    const post = dbManager.insert(body);
    return { status: 201, body: post };
  },
});
