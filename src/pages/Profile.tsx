import { useState } from "react";
import EditProfileForm from "../components/form/EditProfileForm";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import ProfileDetails from "../components/ui/ProfileDetails";
import { useGetMyProfileQuery } from "../redux/api/auth/authApi";
import { CustomError } from "../types/errorType";
import { Circles } from "react-loader-spinner";
const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const { data, isLoading, isError, error } = useGetMyProfileQuery(undefined);
  return (
    <>
      <div className="container relative py-8 mx-auto">
        {isLoading && (
          <div className="flex items-center justify-center absolute left-0 z-10 top-0 w-full h-full bg-white/70">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}

        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )}
        <div className="mt-1 px-5 pt-5 flex flex-wrap justify-center items-center gap-4">
          <div>
            <div className="flex gap-2 items-center mb-3">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 leading-none">
                {editMode ? "Update Profile" : "Md. Jamil Hasan"}
              </h2>
              {!editMode && (
                <Button
                  className="bg-accent"
                  onClick={() => setEditMode(true)}
                  size="sm"
                >
                  Edit Profile
                </Button>
              )}
            </div>

            <Card className="p-5">
              <CardContent>
                <div className="signup_image flex justify-center items-center">
                  <img
                    className="h-[160px] object-contain"
                    src={`${
                      data?.data?.profile_picture
                        ? data?.data?.profile_picture
                        : "/man.png"
                    }`}
                    alt="signup"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-grow">
            {editMode ? (
              <EditProfileForm profile={data?.data} setEditMode={setEditMode} />
            ) : (
              <Card className="p-5">
                <CardContent>
                  <ProfileDetails profile={data?.data} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
