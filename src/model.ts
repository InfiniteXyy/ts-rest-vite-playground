import { z } from "zod";
import { PostSchema } from "./contract";

type Post = z.infer<typeof PostSchema>;

const db: Post[] = [{ id: "0", body: "test", title: "hello" }];

let id = 0;

export const dbManager = {
  insert(post: Omit<Post, "id">) {
    const item = { ...post, id: String(id++) };
    db.push(item);
    return item;
  },
  find(id: string) {
    return db.find((post) => post.id === id);
  },
};
