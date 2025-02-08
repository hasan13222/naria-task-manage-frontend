import { Outlet } from "react-router-dom";
import "../../styles/login.css";

const RootLayout = () => {
  return (
    <>
      <div className="w-svw h-svh relative login_bg">
        <img
          className="absolute animation_round left-0 top-0 w-full h-full object-cover -z-10"
          src="/thor.jpg"
          alt="thor"
        />
        <div className="flex justify-center items-center w-full h-full bg-black/20">
          <div className="bg-white rounded-md p-5 shadow-lg border">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
