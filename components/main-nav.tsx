import NavDropdownMenu from "./nav-dropdown-menu";
import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 border">
      <div className="flex justify-between w-full px-10 mx-2 md:mx-12 lg:mx-48">
        <div>
          <Button className="bg-white" variant="secondary">
            Sudoku
          </Button>
        </div>
        <div className="md:hidden lg:block">
          <Button variant="ghost">Awards</Button>
          <Button variant="ghost">Rules</Button>
          <NavDropdownMenu />
        </div>
        <div className="lg:hidden">
          <Button className="bg-blue-400 text-blue-50" variant="secondary">
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
};

//px-10 mx-2 md:mx-12 lg:mx-48

export default MainNav;
