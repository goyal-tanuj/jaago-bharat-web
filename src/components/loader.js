import removeMD from "markdown-to-text";

const url = "https://readblog-w4dwmgxs2a-uc.a.run.app?id=";

export default async function Main(id, setState) {
  const response = await fetch(url + id);
  const post = await response.json();
  console.log(post);
  post.desc = post.desc.replaceAll("\\n", "\n");
  post.plain = removeMD(post.desc);
  setState(post);
}

export async function homeList(num, setList) {
  const out = [];
  const list = [2, 4, 5];
  for (let i = 0; i < num; i++) {
    const response = await fetch(url + list[i]);
    const post = await response.json();
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
    const response = await fetch(url + i);
    const post = await response.json();
    post.link = "/blog/" + i;
    post.desc = post.desc.replaceAll("\\n", "\n");
    post.plain = removeMD(post.desc);
    out.push(post);
  }
  setList(out);
}
