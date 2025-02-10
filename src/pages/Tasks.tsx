import TaskCard from "../components/ui/TaskCard";
import { useCheckLoginQuery } from "../redux/api/auth/authApi";
import { useGetMyTaskQuery } from "../redux/api/task/taskApi";
import { TTask } from "../types/task";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { CalendarIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { useState } from "react";
import { FaBoxOpen, FaX } from "react-icons/fa6";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../components/ui/pagination";

function Tasks() {
  const [date, setDate] = useState<Date>();
  const { data } = useCheckLoginQuery(undefined);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");

  const { data: tasks } = useGetMyTaskQuery({
    token: data?.data?.token,
    params: {
      limit: 6,
      page,
      due_date: date ? format(date, "dd-MM-yyyy") : "",
      status,
    },
  });

  function dtHandle(dt: Date) {
    setPage(1);
    setDate(dt);
  }
  function clearFilter() {
    setPage(1);
    setDate(undefined);
    setStatus("");
  }
  return (
    <>
      <div className="body min-h-[calc(100vh-100px)] w-full p-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <div className="flex gap-2 items-center">
            {/* filter by status */}
            <Select
              value={status}
              onValueChange={(value) => {
                setPage(1);
                setStatus(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter By Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Status</SelectLabel>
                  <SelectItem value="todo">todo</SelectItem>
                  <SelectItem value="ongoing">ongoing</SelectItem>
                  <SelectItem value="complete">complete</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* filter by date */}
            <Popover>
              <PopoverTrigger className="" asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Filter By Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(dt) => dtHandle(dt!)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* clear filter */}
            {(date || status) && (
              <button
                onClick={clearFilter}
                className="flex gap-1 rounded-md items-center text-white bg-red-500 px-2 py-1"
              >
                <FaX size={12} /> <span className="mb-[2px]">Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* tasks */}
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

        {/* pagination */}
        {tasks?.meta?.totalPage > 1 && (
          <Pagination className="my-5">
            <PaginationContent>
              {[
                ...Array(tasks?.meta?.totalPage)
                  .fill(1)
                  .map((item, index) => (
                    <PaginationItem
                      className="px-3 rounded-md py-1 bg-black text-white cursor-pointer"
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </PaginationItem>
                  )),
              ]}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  );
}

export default Tasks;
