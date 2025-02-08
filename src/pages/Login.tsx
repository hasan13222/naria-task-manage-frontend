import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Login = () => {

    const navigate = useNavigate();
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Log In</h1>
      <form onSubmit={() => navigate('/dashboard')} className="flex flex-col gap-3 mt-2 w-[250px]">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="">
            Password
          </Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Button type="submit">Submit</Button>
        <p>Didn't Signed Up? <a className="underline" href="/register">Signup Here</a></p>
      </form>
    </>
  );
};

export default Login;
