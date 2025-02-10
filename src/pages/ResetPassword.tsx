import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DNA } from "react-loader-spinner";
import {  useResetPasswordMutation } from "../redux/api/auth/authApi";
import { CustomError } from "../types/errorType";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [resetPassword, { isLoading, isError, error }] =
    useResetPasswordMutation(undefined);

    // getting token from query
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

  async function resetPassHandler(e: any) {
    e.preventDefault();
    const form = e.target;
    const newPassword = form.newPassword.value;

    const result = await resetPassword({ body:{newPassword}, token: searchParams.get('token') });
    if (result.data?.success) {
      toast.success("Password reset successful");
      navigate('/');
    } else{
        navigate('/forget-password');
    }
  }
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Reset Password</h1>
      <form
        onSubmit={resetPassHandler}
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
          <Label htmlFor="newPassword" className="">
            New Password
          </Label>
          <Input required type="password" id="newPassword" placeholder="Password" />
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

export default ResetPassword;
