const fs = require("fs/promises");

async function main() {
  let a = await fs.readFile("temp.txt", "utf-8");
  console.log(a)
  a = a.replaceAll("import", "const")
    .replaceAll("from", "=")
    .replaceAll("/", "%2F")
    .replaceAll(
      ".%2F",
      "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/"
    )
    .replaceAll('";', '?alt=media";');

  console.log(a)
  await fs.writeFile("temp.txt", a);
}

main()