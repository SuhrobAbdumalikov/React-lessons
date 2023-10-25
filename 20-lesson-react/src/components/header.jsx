import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

function Header({ isLogged, setIsLogged }) {
  const onLogout = () => {
    localStorage.removeItem("access_token");
    setIsLogged(false);
  };
  return (
    <header className="flex justify-between py-6 border-b-2 border-green-500 fixed z-50 bg-black w-full left-0 top-0 px-10">
      <Link to={"/"} className="text-3xl font-bold text-green-500">
        Bookztron
      </Link>
      <div className="flex gap-3">
        {isLogged ? (
          <>
            <Link
              to={"/shop"}
              className="rounded-full bg-green-500 hover:bg-green-700 p-2 text-black transition-all hover:text-white"
            >
              Shop
            </Link>
            <Link
              to={"/wishlist"}
              className="rounded-full bg-green-500 hover:bg-green-700 p-2 text-black transition-all hover:text-white"
            >
              Wishlist
            </Link>
            <Link
              to={"/cards"}
              className="rounded-full bg-green-500 hover:bg-green-700 p-2 text-black transition-all hover:text-white"
            >
              Cart
            </Link>
            <Link
              to={"/"}
              className="rounded-full bg-green-500 hover:bg-green-700 p-2 text-black transition-all hover:text-white"
            >
              Orders
            </Link>
            <Button
              onClick={() => {
                toast({
                  className: "bg-yellow-400 text-black",
                  title: "Warning❗",
                  description: "Do you Want to logout?",
                  action: (
                    <ToastAction
                      altText="Yes"
                      className="hover:text-black"
                      onClick={onLogout}
                    >
                      Yes
                    </ToastAction>
                  ),
                });
              }}
              className="bg-red-600 hover:bg-red-800"
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to={"/login"} className="p-2 bg-green-600 rounded-sm text-white">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
export default Header;

Header.propTypes = {
  isLogged: PropTypes.any,
  setIsLogged: PropTypes.func,
};
