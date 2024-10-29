import { useState } from "react";
import Link from "../../Links/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 5, path: "/faq", name: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoCloseSharp className="text-3xl" />
        ) : (
          <IoMdMenu className="text-3xl" />
        )}
      </div>
      <ul
        className={`
            md:flex bg-rose-500 duration-1000 absolute md:static p-6
            ${open ? "top-16" : "-top-64"}
        `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
