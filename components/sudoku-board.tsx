"use client";

import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import BoardCell from "./board-cell";
import { useState } from "react";

const SudokuBoard = () => {
//   const board = Array(81)
//     .fill(undefined)
//     .map((_, i) => Math.floor(Math.random() * 10));

  const puzzle: (null | number)[] = makepuzzle();
//   const puzzle = board;
  console.log(puzzle.filter((item) => item?.valueOf() === 9));

  // const [board, setBoard] = useState<(number | null)[]>(makepuzzle());

  // var puzzle = makepuzzle();
  // setBoard(puzzle);

  // const board = makepuzzle();
  // const defaultBoard = [
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null,
  //     null
  //   ]

  return (
    <div className="flex flex-wrap w-96 mt-5">
      {puzzle.map((cellValue: any, index: any) => (
        <BoardCell cellValue={cellValue ? cellValue++ : null} key={index} />
      ))}
    </div>
  );
};

export default SudokuBoard;
