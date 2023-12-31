import removeMD from "markdown-to-text";

const url = "https://readblog-w4dwmgxs2a-uc.a.run.app?id=";

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
      const response = await fetch(url + id);
      const post = await response.json();
      sessionStorage.setItem(id, JSON.stringify(post));
      return resolve(post);
    } catch (e) {
      reject(e);
    }
  });
}
