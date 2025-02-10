import TaskCard from "../components/ui/TaskCard";
import SummaryCard from "../components/ui/SummaryCard";
import { FaAnglesRight, FaBoxOpen } from "react-icons/fa6";
import { useCheckLoginQuery } from "../redux/api/auth/authApi";
import { useGetMyTaskQuery } from "../redux/api/task/taskApi";
import { TTask } from "../types/task";

function Dashboard() {
  const { data } = useCheckLoginQuery(undefined);

  const { data: tasks } = useGetMyTaskQuery({
    token: data?.data?.token,
    params: { limit: 4 },
  });
  return (
    <>
      <div className="body min-h-[calc(100vh-100px)] w-full p-5">
        <h2 className="text-xl font-semibold">Dashboard</h2>

        {/* user_course_instructor_summary */}
        <div className="user_course_instructor_summary grid grid-cols-1 sm:grid-cols-3 gap-5 mt-3">
          <SummaryCard summary={tasks?.meta?.summary} total={tasks?.meta?.total}/>
        </div>

        {/* recent tasks */}
        <div className="tasks">
          <div className="flex mt-4 justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Task</h3>
            <a
              className="flex gap-1 items-center hover:text-secondary text-primary"
              href="/dashboard/tasks"
            >
              <span>View All</span> <FaAnglesRight className="" size={10} />
            </a>
          </div>

          <div className="course__items grid grid-cols-1 sm:grid-cols-2 mt-2 gap-5">
            {tasks?.data?.map((task: TTask) => (
              <>
                <TaskCard task={task} />
              </>
            ))}
          </div>
          {tasks?.data?.length === 0 && (
            <p className="my-5 flex flex-col items-center text-2xl">
              <FaBoxOpen size={80} />
              <span>You have No Task</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
