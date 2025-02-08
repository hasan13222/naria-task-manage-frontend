import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Register = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Sign Up</h1>
      <form className="flex flex-col gap-3 mt-2 w-[280px]">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="">
            Name
          </Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
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
        <p>
          Already Signed Up?{" "}
          <a className="underline" href="/">
            Login Here
          </a>
        </p>
      </form>
    </>
  );
};

export default Register;
