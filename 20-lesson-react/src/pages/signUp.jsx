import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex gap-8 flex-col w-1/2 mx-auto bg-green-500 p-10 rounded-md">
        <h1 className="text-center text-2xl font-medium text-white">Sign Up</h1>
        <Input
          name="userName"
          placeholder={"UserName"}
          type="text"
          //   value={formData.userEmail}
          //   onChange={handleChange}
        />
        <Input
          name="userEmail"
          placeholder={"Email"}
          type="email"
          //   value={formData.userEmail}
          //   onChange={handleChange}
        />
        <Input
          name="userPassword"
          placeholder={"Password"}
          type="password"
          //   value={formData.userPassword}
          //   onChange={handleChange}
        />
        <Button>Sign Up</Button>
        <Link to={"/login"} className="text-center text-white">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
