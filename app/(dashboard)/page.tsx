"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { roboto_mono } from "../font";
import dynamic from "next/dynamic";

const SudokuBoard = dynamic(() => import("../../components/sudoku-board"), {
  ssr: false,
});

const DashboardPage = () => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 items-center justify-center",
        roboto_mono.className
      )}
    >
      DashBoard Page!
      <SudokuBoard />
    </div>
  );
};

export default DashboardPage;
