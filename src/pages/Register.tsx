import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useSignupUserMutation } from "../redux/api/auth/authApi";
import { DNA } from "react-loader-spinner";
import { CustomError } from "../types/errorType";

const Register = () => {
  const navigate = useNavigate();

  const [login, { isLoading, isError, error }] =
    useSignupUserMutation(undefined);

  async function signupHandler(e: any) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await login({ name, email, password });
    if (result.data?.success) {
      navigate("/login");
    }
  }
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Sign Up</h1>
      <form onSubmit={signupHandler} className="flex relative flex-col gap-3 mt-2 w-[280px]">
        {isLoading && (
          <div className="absolute flex justify-center items-center z-10 left-0 top-0 w-full h-full bg-white/50">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="">
            Name
          </Label>
          <Input required type="text" id="name" placeholder="Name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input required type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="">
            Password
          </Label>
          <Input required type="password" id="password" placeholder="Password" />
        </div>
        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )}
        <Button type="submit">Submit</Button>
        <p>
          Already Signed Up?{" "}
          <a className="underline" href="/login">
            Login Here
          </a>
        </p>
      </form>
    </>
  );
};

export default Register;
