import removeMD from "markdown-to-text";

// Served via the Firebase Hosting rewrite `/api/blog/:id` → readBlog function.
// Keeps the call same-origin, avoids hardcoding the function's run.app URL/region,
// and lets us swap regions/codebases without a frontend deploy.
const buildUrl = (id) => `/api/blog/${encodeURIComponent(id)}`;

export default async function Main(id, setState) {
  const post = await getPost(id);
  post.desc = post.desc.replaceAll("\\n", "\n");
  post.plain = removeMD(post.desc);
  setState(post);
}

export async function homeList(num, setList) {
  const out = [];
  // const list = [2, 4, 5];
  for (let i = 0; i < num; i++) {
    const post = await getPost(i);
    post.link = "/blog/" + i;
    post.desc = post.desc.replaceAll("\\n", "\n");
    post.plain = removeMD(post.desc);
    out.push(post);
  }
  setList(out);
}

export async function listData(num, setList) {
  const out = [];
  for (let i = 0; i < num; i++) {
    const post = await getPost(i);
    post.link = "/blog/" + i;
    post.desc = post.desc.replaceAll("\\n", "\n");
    post.plain = removeMD(post.desc);
    out.push(post);
  }
  setList(out);
}

function getPost(id) {
  return new Promise(async (resolve, reject) => {
    try {
      if (sessionStorage.getItem(id)) {
        return resolve(JSON.parse(sessionStorage.getItem(id)));
      }
      const response = await fetch(buildUrl(id));
      const post = await response.json();
      sessionStorage.setItem(id, JSON.stringify(post));
      return resolve(post);
    } catch (e) {
      reject(e);
    }
  });
}
