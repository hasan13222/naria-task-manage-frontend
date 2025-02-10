import { DNA } from "react-loader-spinner";
import { useUpdateMyProfileMutation } from "../../redux/api/auth/authApi";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CustomError } from "../../types/errorType";
import { toast } from "sonner";
import { useRef, useState } from "react";
import axios from "axios";

const EditProfileForm = ({ profile, setEditMode }: any) => {
  const [isImageUploading, setIsImageUploading] = useState(false);

  const [updateProfile, { isLoading, isError, error }] =
    useUpdateMyProfileMutation(undefined);

  const profilePictureRef = useRef<HTMLInputElement>(null);

  async function updateProfileHandler(e: any) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;

    if (profilePictureRef?.current?.files instanceof FileList) {
      setIsImageUploading(true);
      await axios
        .post(
          `https://api.imgbb.com/1/upload?key=787a92272c8fe84458fd69331f72c734`,
          { image: profilePictureRef?.current?.files[0] },
          {
            headers: { "content-Type": "multipart/form-data" },
          }
        )
        .then(async (data) => {
          setIsImageUploading(false);
          const result = await updateProfile({
            name,
            profile_picture: data.data.data.display_url,
            phone,
            address,
          });
          if (result.data?.success) {
            setEditMode(false);
          } else {
            toast.error("Updated profile failed");
          }
        })
        .catch(async () => {
          setIsImageUploading(false);
          const result = await updateProfile({
            name,
            phone,
            address,
          });
          if (result.data?.success) {
            setEditMode(false);
          } else {
            toast.error("Updated profile failed");
          }
        });
    } else {
      const result = await updateProfile({
        name,
        phone,
        address,
      });
      if (result.data?.success) {
        setEditMode(false);
      } else {
        toast.error("Updated profile failed");
      }
    }
  }
  return (
    <>
      <form
        onSubmit={updateProfileHandler}
        className="flex relative flex-col gap-3 mt-2"
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
        {isImageUploading && (
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
          <Input
            defaultValue={profile?.name}
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="profile_picture" className="">
            Profile Picture
          </Label>
          <Input
            ref={profilePictureRef}
            type="file"
            id="profile_picture"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="">
            Phone
          </Label>
          <Input
            defaultValue={profile?.phone}
            type="text"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="address" className="">
            Address
          </Label>
          <Input
            defaultValue={profile?.address}
            type="text"
            id="address"
            placeholder="Address"
          />
        </div>
        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )}
        <Button type="submit">Update</Button>
      </form>
    </>
  );
};

export default EditProfileForm;
