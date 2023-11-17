import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ paths }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:text-end md:items-end gap-[1px] w-full md:w-auto shadow-md md:shadow-none">
      {paths.map(({ link, linkName }, index) => (
        <Link
          key={index}
          to={link}
          className={`leading-[1] border-b py-5 px-3 md:p-0 md:border-none md:text-xs border-[#e0e0e0] ${
            pathname === link
              ? "md:font-bold"
              : "md:hover:bg-[#ff0000] md:hover:text-white"
          }`}
        >
          {linkName}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
