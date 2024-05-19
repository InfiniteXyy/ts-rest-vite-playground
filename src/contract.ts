import { initContract } from '@ts-rest/core';
import { z } from 'zod';

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string().nullable(),
});

export const contract = initContract().router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: { 201: PostSchema },
    body: z.object({ title: z.string(), body: z.string() }),
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    pathParams: z.object({ id: z.string().transform(Number) }),
    responses: { 200: PostSchema.nullable() },
    summary: 'Get a post by id',
  },
});
