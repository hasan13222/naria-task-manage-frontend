import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DNA } from "react-loader-spinner";
import { useLoginUserMutation } from "../redux/api/auth/authApi";
import { CustomError } from "../types/errorType";

const Login = () => {
  const navigate = useNavigate();

  const [login, { isLoading, isError, error }] =
    useLoginUserMutation(undefined);

  async function loginHandler(e: any) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await login({ email, password });
    if (result.data?.success) {
      navigate("/dashboard");
    }
  }

  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Log In</h1>
      <form
        onSubmit={loginHandler}
        className="flex relative flex-col gap-3 mt-2 w-[250px]"
      >
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
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input defaultValue="jamil8305@gmail.com" required type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="">
            Password
          </Label>
          <Input
            required
            type="password"
            id="password"
            placeholder="Password"
            defaultValue="123456"
          />
          <div className="text-right underline">
            <a href="/forget-password">forgot password?</a>
          </div>
        </div>
        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )}
        <Button type="submit">Submit</Button>
        <p>
          Didn't Signed Up?{" "}
          <a className="underline" href="/register">
            Signup Here
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
