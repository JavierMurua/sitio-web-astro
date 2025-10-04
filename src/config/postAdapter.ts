// src/config/postAdapter.ts
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

interface Options {
  tag?: string;
  author?: string;
  limit?: number;
}

export async function getPosts({ tag, author, limit }: Options = {}) {
  let posts = await getCollection("blog", ({ data }) => !data.draft);

  if (tag) {
    posts = posts.filter((post) => post.data.tags?.includes(tag as any));
  }

  if (author) {
    posts = posts.filter((post) => post.data.author === author);
  }

  // ordenar por fecha descendente
  posts = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  if (limit) {
    posts = posts.slice(0, limit);
  }

  return posts;
}
