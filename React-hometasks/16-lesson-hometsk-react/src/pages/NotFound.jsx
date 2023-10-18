import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h1>Not Found !</h1>
      <i>Sorry We Can Not Found Any Kind Of Pages</i>
      <Link to={"/"}>
        <Button title={"back home"} />
      </Link>
    </div>
  );
}

export default NotFound;
