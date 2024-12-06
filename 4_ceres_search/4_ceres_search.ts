import fs from "fs";

function readInput() {
  return fs.readFileSync("input.txt", "utf-8");
}

function transformInput(rawInput: string) {
  const convertTo2DArray = rawInput.split(/\n/).map((s) => s.split(""));
  const removedEmptyStrings = convertTo2DArray.filter((arr) => arr.length != 0);
  return removedEmptyStrings;
}

//Right, left, down, up, down right, up left, down left, up right
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

function checkGridBoundaries(x, y, rows, columns) {
  return x >= 0 && x < rows && y >= 0 && y < columns;
}

function findXMAS(grid: string[][]) {
  const rows = grid.length;
  const columns = grid[0].length;
  let count = 0;
  console.log("Rows:", rows, "Columns:", columns);

  function checkWord(
    startX: number,
    startY: number,
    dx: number,
    dy: number,
    word: string
  ) {
    let x = startX;
    let y = startY;

    //For each letter of the word, if the grid letter we're accessing doesn't match, return false, also return false if the index of x or y goes beyond the grid boundaries.
    for (let i = 0; i < word.length; i++) {
      if (!checkGridBoundaries(x, y, rows, columns) || grid[x][y] !== word[i])
        return false;
      x += dx;
      y += dy;
    }

    return true;
  }

  //Loop through each entry in the grid.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      //On each entry, check every direction (left, right, up, down, diagonals) for XMAS
      for (const [dx, dy] of directions) {
        if (checkWord(i, j, dx, dy, "MAS")) count++;
      }
    }
  }

  return count;
}

function findXMAS2(grid: string[][]) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (
        grid[i][j] == "A" &&
        i >= 1 &&
        i < grid.length - 1 &&
        j >= 1 &&
        j < grid[0].length - 1
      ) {
        if (
          ((grid[i + 1][j + 1] == "S" && grid[i - 1][j - 1] == "M") ||
            (grid[i + 1][j + 1] == "M" && grid[i - 1][j - 1] == "S")) &&
          ((grid[i - 1][j + 1] == "S" && grid[i + 1][j - 1] == "M") ||
            (grid[i - 1][j + 1] == "M" && grid[i + 1][j - 1] == "S"))
        )
          count++;
      }
    }
  }

  return count;
}

findXMAS2(transformInput(readInput()));
