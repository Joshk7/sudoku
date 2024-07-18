import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 border">
      <div className="flex justify-between w-full">
        <div className="w-full">
            <Button className="bg-white" variant="secondary">Sudoku</Button>
        </div>
        <div className="flex">
            <Button variant="ghost">Awards</Button>
            <Button variant="ghost">Rules</Button>
            <Button variant="ghost">More</Button>
        </div>
      </div>
    </div>
  );
};

//px-10 mx-2 md:mx-12 lg:mx-48

export default MainNav;
