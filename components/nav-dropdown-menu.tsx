"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavDropdownMenu = () => {
  const [position, setPosition] = React.useState("tips");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">More</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          className={position === "print" ? "bg-gray-200" : ""}
          onClick={() => setPosition("print")}
        >
          Printable Sudoku
        </DropdownMenuItem>
        <DropdownMenuItem
          className={position === "solve" ? "bg-gray-200" : ""}
          onClick={() => setPosition("solve")}
        >
          Solver
        </DropdownMenuItem>
        <DropdownMenuItem
          className={position === "tips" ? "bg-gray-200" : ""}
          onClick={() => setPosition("tips")}
        >
          Tips
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
