import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
const postsFile = path.join(dataDir, "post.json");

async function readPosts() {
  try {
    const fileContent = await readFile(postsFile, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writePosts(posts) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(postsFile, JSON.stringify(posts, null, 2));
}

export async function GET() {
  const posts = await readPosts();

  return Response.json({ posts });
}

export async function POST(request) {
  const postData = await request.json();
  const posts = await readPosts();
  const newPost = {
    id: Date.now().toString(),
    body: postData.body,
    author: postData.author,
  };

  await writePosts([newPost, ...posts]);

  return Response.json({
    message: "Post stored",
    post: newPost,
  });
}
