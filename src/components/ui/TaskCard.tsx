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
} from "@/components/ui/dialog";

const TaskCard = () => {
  return (
    <>
      <div className="course__single p-5 bg-white rounded-lg shadow-md border hover:scale-[1.01] transition-transform">
        <div className="course_desc flex-grow flex flex-col items-start h-full justify-between">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-center">
              <button className="py-[2px] px-2 rounded-sm bg-accent text-white hover:bg-white hover:text-accent">
                Complete
              </button>
              <div className="edit_delete flex gap-1">
                <button className="py-1 px-2 rounded-sm bg-yellow-500 text-white hover:bg-white hover:text-yellow-500">
                  <BsPencilSquare />
                </button>
                <button className="py-1 px-2 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 text-white">
                  <MdDelete />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-lg">
              Digital Marketing Bootcamp
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div>
            <a
              className="flex gap-1 items-center hover:text-secondary text-primary"
              href="/"
            >
              <span>Details</span> <FaAnglesRight className="mt-1" size={10} />
            </a>
          </div>
        </div>
      </div>
      <div className="course__single p-5 bg-white rounded-lg shadow-md border hover:scale-[1.01] transition-transform">
        <div className="course_desc flex-grow flex flex-col items-start h-full justify-between">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-center">
              <button className="py-[2px] px-2 rounded-sm bg-accent border-accent border text-white hover:bg-white hover:text-accent">
                Complete
              </button>
              <div className="edit_delete flex gap-1">
                <button className="py-1 px-2 rounded-sm bg-yellow-500 text-white hover:bg-white hover:text-yellow-500">
                  <BsPencilSquare />
                </button>
                <button className="py-1 px-2 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 text-white">
                  <MdDelete />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-lg">
              Digital Marketing Bootcamp
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <p className="text-sm font-semibold">Date: 27th February, 2025</p>
          </div>
          <div>
            <Dialog>
              <DialogTrigger>
                <button className="flex gap-1 items-center hover:text-secondary text-primary">
                  <span>Details</span>{" "}
                  <FaAnglesRight className="mt-1" size={10} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Digital Marketing Bootcamp</DialogTitle>
                  <DialogDescription>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, praesentium eveniet tenetur nisi culpa quas autem atque amet quasi repellendus sunt quis perspiciatis maiores inventore cum accusantium, nihil voluptatibus facere doloribus hic veritatis harum dolores asperiores ullam! Ipsum aspernatur sit dolorem deserunt consequuntur delectus voluptatum! Quia voluptate ut perferendis deserunt!
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
