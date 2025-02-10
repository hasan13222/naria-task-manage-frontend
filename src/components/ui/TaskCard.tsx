import { BsPencilSquare } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { TTask } from "../../types/task";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../redux/api/task/taskApi";
import { useCheckLoginQuery } from "../../redux/api/auth/authApi";
import { toast } from "sonner";
import EditTaskForm from "../form/EditTaskForm";

const TaskCard = ({ task }: { task: TTask }) => {
  const [dialogClose, setDialogClose] = useState("");
  const [updateDialogClose, setUpdateDialogClose] = useState("");

  const { data } = useCheckLoginQuery(undefined);

  // delete task
  const [deleteTask, { isLoading }] = useDeleteTaskMutation(data?.data?.token);

  // status change
  const [updateStatus, { isLoading: isUpdateLoading }] =
    useUpdateTaskMutation(data);

  async function deleteTaskHandler(id: string) {
    setDialogClose("close");
    const result = await deleteTask({ id, token: data?.data?.token });
    if (result?.data?.success) {
      toast.success("Task deleted successfully");
    } else {
      toast.error("Task deleted failed");
    }
  }

  async function taskStatusHandler(status: string) {
    const result = await updateStatus({
      id: task?._id,
      body: { status },
      token: data?.data?.token,
    });
    if (result?.data?.success) {
      toast.success("Task updated successfully");
    } else {
      toast.error("Task update failed");
    }
  }
  return (
    <>
      <div className="course__single p-5 bg-white rounded-lg shadow-md border hover:scale-[1.01] transition-transform">
        <div className="course_desc flex-grow flex flex-col items-start h-full justify-between">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-center">
              {task.status === "ongoing" && (
                <button
                  onClick={() => taskStatusHandler("complete")}
                  className="py-[2px] px-2 relative rounded-sm bg-accent border-accent border text-white hover:bg-white hover:text-accent"
                >
                  {isUpdateLoading && (
                    <div className="absolute flex justify-center items-center w-full h-full left-0 top-0">
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  )}
                  Complete
                </button>
              )}
              {task.status === "todo" && (
                <button
                  onClick={() => taskStatusHandler("ongoing")}
                  className="py-[2px] px-2 relative rounded-sm bg-secondary border-secondary border text-white hover:bg-white hover:text-secondary"
                >
                  {isUpdateLoading && (
                    <div className="absolute flex justify-center items-center w-full h-full left-0 top-0">
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  )}
                  Start
                </button>
              )}
              {task.status === "complete" && (
                <span className="text-primary font-medium">Completed</span>
              )}

              <div className="edit_delete flex gap-1">
                {/* task update functionality */}
                <Dialog
                  onOpenChange={() => setUpdateDialogClose("open")}
                  open={updateDialogClose === "close" ? false : undefined}
                >
                  <DialogTrigger asChild>
                    <button className="py-1 px-2 rounded-sm bg-yellow-500 text-white hover:bg-white hover:text-yellow-500">
                      <BsPencilSquare />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Update Task</DialogTitle>
                    </DialogHeader>
                    {/* update task form */}
                    <EditTaskForm
                      task={task}
                      setDialogClose={setUpdateDialogClose}
                    />
                  </DialogContent>
                </Dialog>

                {/* task delete functionality */}
                <Dialog
                  onOpenChange={() => setDialogClose("open")}
                  open={dialogClose === "close" ? false : undefined}
                >
                  <DialogTrigger asChild>
                    <button className="py-1 relative px-2 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 text-white">
                      {isLoading && (
                        <div className="absolute flex justify-center items-center w-full h-full left-0 top-0">
                          <Oval
                            visible={true}
                            height="20"
                            width="20"
                            color="#4fa94d"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        </div>
                      )}

                      <MdDelete />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delete Task</DialogTitle>
                      <DialogDescription>
                        Are you sure to Delete the Task?
                      </DialogDescription>
                    </DialogHeader>
                    {/* delete task  */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => deleteTaskHandler(task?._id)}
                        className="py-1 px-2 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 text-white"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setDialogClose("close")}
                        className="py-1 px-2 rounded-sm bg-slate-600 hover:bg-white hover:text-slate-600 text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <h3 className="font-semibold text-lg">{task?.title}</h3>
            <p>{task?.description?.slice(0, 60)}...</p>
            <p className="text-sm flex items-center justify-between gap-2">
              <span className="font-semibold">Status: {task?.status}</span>{" "}
              <span>Date: {task?.due_date}</span>
            </p>
          </div>
          <div>
            <Dialog>
              <DialogTrigger>
                <button className="flex gap-1 items-center hover:text-secondary text-primary/70">
                  <span>Details</span>{" "}
                  <FaAnglesRight className="mt-1" size={10} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{task?.title}</DialogTitle>
                  <DialogDescription>
                    <p>{task?.description}</p>
                    <p className="text-sm  flex items-center justify-between gap-2">
                      <span className="font-semibold">Status: {task?.status}</span>{" "}
                      <span>Date: {task?.due_date}</span>
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
