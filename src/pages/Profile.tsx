import { useState } from "react";
import EditProfileForm from "../components/form/EditProfileForm";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import ProfileDetails from "../components/ui/ProfileDetails";
const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <div className="container py-8 mx-auto">
        <div className="flex items-center gap-4"></div>
        {/* {isLoading && (
          <button type="button" className="bg-primary" disabled>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            Loading...
          </button>
        )}
        {isError && (
          <p className="text-red-500">
            {(error as CustomError)?.data?.message}
          </p>
        )} */}
        <div className="mt-1 px-5 pt-5 flex flex-wrap justify-center items-center gap-4">
          <div >
            <div className="flex gap-2 items-center mb-3">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 leading-none">
              {editMode ? "Edit Profile" : "Md. Jamil Hasan"}
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
                  {!editMode && (
                    <img
                      className="h-[160px] object-contain"
                      src="/man.png"
                      alt="signup"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-grow">
            {editMode ? (
              <EditProfileForm />
            ) : (
              <Card className="p-5">
                <CardContent>
                  <ProfileDetails />
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
