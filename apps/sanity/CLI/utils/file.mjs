import fs from "fs";

export function modifyJsonFile(path, transformer) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const content = JSON.parse(data);
    const modifiedContent = transformer(content);

    fs.writeFileSync(path, JSON.stringify(modifiedContent, null, 2) + "\n");
  } catch (err) {
    console.error(err);
    return;
  }
}
