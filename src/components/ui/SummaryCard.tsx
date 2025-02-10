import {
  MdOutlineEventNote,
  MdOutlineNoteAlt,
  MdOutlineStickyNote2,
} from "react-icons/md";


const SummaryCard = ({summary, total}: any) => {
    return (
        <>
            <div className="user relative flex flex-col h-[200px] justify-between bg-gradient-to-r from-lightPrimary to-primary text-white item bg-white rounded-lg shadow-md hover:scale-[1.01] transition-transform">
                <div className="pt-8 px-8 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg">Total Task To-do</h3>
                    <p className="font-bold text-2xl">{summary?.todo}</p>
                  </div>
                  <MdOutlineEventNote size={50} className="pr-5" />
                </div>
                <img
                  className="absolute object-cover top-0 right-0 w-7/12 h-full"
                  src="/circle.svg"
                  height={250}
                  width={150}
                  alt="circle svg"
                />
                <p className="pb-8 pl-8">{((summary?.todo/total)*100).toFixed(0)}% tasks is yet to do</p>
              </div>
              <div className="user relative flex flex-col h-[200px] justify-between bg-gradient-to-r from-lightSecondary to-secondary text-white item bg-white rounded-lg shadow-md hover:scale-[1.01] transition-transform">
                <div className="pt-8 px-8 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg">Total Ongoing Task</h3>
                    <p className="font-bold text-2xl">{summary?.ongoing}</p>
                  </div>
                  <MdOutlineNoteAlt size={50} className="pr-5" />
                </div>
                <img
                  className="absolute object-cover top-0 right-0 w-7/12 h-full"
                  src="/circle.svg"
                  height={250}
                  width={150}
                  alt="circle svg"
                />
                <p className="pb-8 pl-8">{((summary?.ongoing/total)*100).toFixed(0)}% task is ongoing</p>
              </div>
              <div className="user relative flex flex-col h-[200px] justify-between bg-gradient-to-r from-lightAccent to-accent text-white item bg-white rounded-lg shadow-md hover:scale-[1.01] transition-transform">
                <div className="pt-8 px-8 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg">
                      Total Completed Task
                    </h3>
                    <p className="font-bold text-2xl">{summary?.complete}</p>
                  </div>
                  <MdOutlineStickyNote2 size={45} className="pr-5" />
                </div>
                <img
                  className="absolute object-cover top-0 right-0 w-7/12 h-full"
                  src="/circle.svg"
                  height={250}
                  width={150}
                  alt="circle svg"
                />
                <p className="pb-8 pl-8">{((summary?.complete/total)*100).toFixed(0)}% task is completed</p>
              </div>
        </>
    );
};

export default SummaryCard;