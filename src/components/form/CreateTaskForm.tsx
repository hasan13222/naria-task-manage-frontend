import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../ui/textarea";
import { CalendarIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { useCreateTaskMutation } from "../../redux/api/task/taskApi";
import { Rings } from "react-loader-spinner";
import { CustomError } from "../../types/errorType";
import { toast } from "sonner";
import { useCheckLoginQuery } from "../../redux/api/auth/authApi";

const CreateTaskForm = ({setDialogClose}:any) => {
  const [date, setDate] = useState<Date>();

  const {data} = useCheckLoginQuery(undefined);
  const [createTask, { isLoading, isError, error }] =
    useCreateTaskMutation(undefined);

  async function createTaskHandler(e: any) {
    e.preventDefault();
    setDialogClose("close");
    
    const form = e.target;
    const newTask = {
      title: form.title.value,
      description: form.description.value || "",
      due_date: date ? format(date, "dd-MM-yyyy") : "",
    };


    const result = await createTask({body: {...newTask, userId: data?.data?.user?._id}, token: data?.data?.token});
    if (result?.data?.success) {
      toast.success("Task created successfully");
    } else {
      toast.error("Task creation failed");
    }
  }
  return (
    <>
      <form className="relative" onSubmit={createTaskHandler}>
        {isLoading && (
          <div className="absolute w-full h-full bg-white/70 left-0 top-0 flex justify-center items-center">
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}

        <div className="grid gap-4 pb-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="">
              Task Title
            </Label>
            <Input required name="title" placeholder="Task Title" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="">
              Description
            </Label>
            <Textarea
              name="description"
              placeholder="Type your task description here."
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="due_date" className="">
              Due Date
            </Label>
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
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <p className="text-red-500">
              {isError && (error as CustomError)?.data?.message}
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="py-[2px] px-2 flex gap-1 items-center rounded-sm border-primary border bg-primary text-white hover:bg-white hover:text-primary"
            >
              <span>Create Task</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateTaskForm;
