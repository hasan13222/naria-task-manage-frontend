import { FaAnglesLeft, FaPlus } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { useNavigate } from "react-router-dom";
import {
  useGetMyProfileQuery,
  useLogoutMutation,
} from "../../redux/api/auth/authApi";
import { Puff } from "react-loader-spinner";
import CreateTaskForm from "../form/CreateTaskForm";
import { useState } from "react";

const Topbar = ({ miniSidebar, setMiniSidebar }: any) => {
  const [dialogClose, setDialogClose] = useState("");

  const { data } = useGetMyProfileQuery(undefined);

  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation(undefined);

  async function logoutHandler() {
    const result = await logout({});
    if (result.data.success) {
      navigate("/login");
    } else {
      toast("Logout Failed");
    }
  }
  return (
    <>
      <div className="topbar flex justify-between items-center py-3  sticky top-0 shadow-md z-10 w-full bg-white">
        <div className="flex gap-1 items-center">
          <button
            onClick={() => setMiniSidebar(!miniSidebar)}
            className="text-lightPrimary hover:text-primary px-5"
          >
            <FaAnglesLeft />
          </button>

          <Dialog
            onOpenChange={() => setDialogClose("open")}
            open={dialogClose === "close" ? false : undefined}
          >
            <DialogTrigger asChild>
              <button className="py-[2px] px-2 flex gap-1 items-center rounded-sm border-primary border bg-primary text-white hover:bg-white hover:text-primary">
                <FaPlus /> <span>Create Task</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>
                  Create your new task with title, description and due date.
                </DialogDescription>
              </DialogHeader>
              {/* create task form */}
              <CreateTaskForm setDialogClose={setDialogClose} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="profile relative pr-8">
          {isLoading && (
            <div className="absolute flex justify-center items-center bg-white/50 left-0 top-0 w-full h-full">
              <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className="rounded-full border-2 w-10 cursor-pointer hover:border-slate-400 transition-all"
                src={`${
                  data?.data?.profile_picture
                    ? data?.data?.profile_picture
                    : "/man.png"
                }`}
                alt="avatar"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="w-full">
                  <a className="inline-block w-full" href="/dashboard/profile">
                    Profile
                  </a>
                </div>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logoutHandler}>
                <div className="w-full cursor-pointer">Logout</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Topbar;
