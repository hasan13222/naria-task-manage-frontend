import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const EditProfileForm = () => {
    return (
        <>
            <form>
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

export default EditProfileForm;