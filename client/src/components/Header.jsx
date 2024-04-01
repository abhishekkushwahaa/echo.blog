import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <nav className="border-b-[1px] flex justify-between">
      <div className="md:p-2 p-1 mt-2 flex justify-between">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-10 w-10 inline-block" />
          <span className="sm:text-xl text-[0px] font-serif m-1">
            echo.blog
          </span>
        </Link>
        <Input
          className="h-8 w-52 decoration-clone m-1 ml-6 font-serif"
          placeholder="Search blog..."
        />
      </div>
      <div className="p-2 flex justify-between">
        <Link to="/add-blog">
          <span className="m-3 font-serif flex">
            <CgAddR className="m-1" />
            Write
          </span>
        </Link>
        <Link to="/notification">
          <IoMdNotificationsOutline className="h-6 w-6 m-3" />
        </Link>
        <Link to="/signin">
          <Button variant="outline" className="m-1 align-center font-serif">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
