const MiniSidebar = () => {
  return (
    <>
      <div className="sidebar min-w-[50px] max-w-[280px] small_sidebar sticky left-0 top-0 max-h-svh h-svh overflow-auto border-r bg-white border-slate-200">
        {/* logo */}
        <div className="logo py-5 pl-5 cursor-pointer">
          <div className="flex gap-1 items-center">
            <img width={20} height={13} src="/logo-mini.svg" alt="logo" />
          </div>
        </div>

        {/* sidebar menu */}
        <ul className="sidebar_menu">
          <li
            className={`bg-lightSecondary/30 border-primary/90 px-5 py-2 border-l-4 hover:bg-lightSecondary/30 cursor-pointer`}
          >
            <a
              className={`inline-block w-full hover:scale-[1.01] transition-transform`}
              href="/"
            >
              D
            </a>
          </li>
          <li
            className={`px-5 py-2 border-transparent border-l-4 hover:bg-lightSecondary/30 cursor-pointer`}
          >
            <a
              className={`inline-block w-full hover:scale-[1.01] transition-transform`}
              href="/"
            >
              T
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MiniSidebar;
