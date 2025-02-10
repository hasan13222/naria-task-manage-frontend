import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DNA } from "react-loader-spinner";
import { useForgetPasswordMutation } from "../redux/api/auth/authApi";
import { CustomError } from "../types/errorType";
import { toast } from "sonner";

const ForgetPassword = () => {
  const [forgetPassword, { isLoading, isError, error }] =
    useForgetPasswordMutation(undefined);

  async function forgetPassHandler(e: any) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    const result = await forgetPassword({ email });
    if (result.data?.success) {
      toast.success("A link sent to your email to change your password", {duration: 10000});
      form.reset();
    }
  }
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Forget Password</h1>
      <form
        onSubmit={forgetPassHandler}
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
          <Input required type="email" id="email" placeholder="Email" />
        </div>

        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default ForgetPassword;
