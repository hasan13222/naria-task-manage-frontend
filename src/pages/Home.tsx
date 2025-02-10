import { Navigate } from "react-router-dom";
import { useCheckLoginQuery } from "../redux/api/auth/authApi";
import { Oval } from "react-loader-spinner";
const Home = () => {
  const { isSuccess, isError, isLoading } = useCheckLoginQuery(undefined);

  if (isLoading) {
    return (
      <div className="bg-white/50 absolute flex justify-center items-center left-0 top-0 w-svh h-svh">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/login" />;
  }

  if (isSuccess) {
    return <Navigate to="/dashboard" />;
  }
};

export default Home;
