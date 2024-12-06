import fs from "fs";

export function readInput(file_name: string) {
  return fs.readFileSync(file_name, "utf-8");
}
