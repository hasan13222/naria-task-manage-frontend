

const ProfileDetails = ({profile}: any) => {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-5">Profile Information</h2>
        <ul>
          <li className="text-base mb-3 shadow-sm border p-3 rounded-md">
            <span className="font-medium">Name:</span> {profile?.name}
          </li>
          <li className="text-base mb-3 shadow-sm border p-3 rounded-md">
            <span className="font-medium">Email:</span> {profile?.email}
          </li>
          <li className="text-base mb-3 shadow-sm border p-3 rounded-md">
            <span className="font-medium">Phone:</span> {profile?.phone}
          </li>
          <li className="text-base shadow-sm border p-3 rounded-md">
            <span className="font-medium">Address:</span> {profile?.address}
          </li>
        </ul>
      </>
    );
  };
  
  export default ProfileDetails;
  