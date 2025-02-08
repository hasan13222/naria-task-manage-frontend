import TaskCard from "../components/ui/TaskCard";
import SummaryCard from "../components/ui/SummaryCard";
import { FaAnglesRight } from "react-icons/fa6";

function Dashboard() {
  return (
    <>
      <div className="body min-h-[calc(100vh-100px)] w-full p-5">
        <h2 className="text-xl font-semibold">Dashboard</h2>

        {/* user_course_instructor_summary */}
        <div className="user_course_instructor_summary grid grid-cols-1 sm:grid-cols-3 gap-5 mt-3">
          <SummaryCard />
        </div>

        {/* tasks */}
        <div className="tasks">
          <div className="flex mt-4 justify-between items-center">
            <h3 className="text-lg font-semibold">Ongoing Task</h3>
            <a
              className="flex gap-1 items-center hover:text-secondary text-primary"
              href="/"
            >
              <span>View All</span> <FaAnglesRight className="" size={10} />
            </a>
          </div>

          <div className="course__items grid grid-cols-1 sm:grid-cols-2 mt-2 gap-5">
            <TaskCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
