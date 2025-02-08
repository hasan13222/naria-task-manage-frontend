import { FaAnglesLeft, FaPlus } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../ui/textarea";
import { CalendarIcon } from "lucide-react";

import { format } from "date-fns"
import { cn } from "../../lib/utils";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { useState } from "react";

const Topbar = ({ miniSidebar, setMiniSidebar }: any) => {  
  const [date, setDate] = useState<Date>()
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

          <Dialog>
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
              <div className="grid gap-4 pb-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="">
                    Task Title
                  </Label>
                  <Input id="name" placeholder="Task Title" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="username" className="">
                    Description
                  </Label>
                  <Textarea placeholder="Type your task description here." />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="username" className="">
                    Due Date
                  </Label>
                  <Popover >
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
              </div>
              <DialogFooter className="sm:justify-start">
                <button className="py-[2px] px-2 flex gap-1 items-center rounded-sm border-primary border bg-primary text-white hover:bg-white hover:text-primary">
                  <FaPlus /> <span>Create Task</span>
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="profile pr-8">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className="rounded-full border-2 w-10 cursor-pointer hover:border-slate-400 transition-all"
                src="/man.png"
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
              <DropdownMenuItem>
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
