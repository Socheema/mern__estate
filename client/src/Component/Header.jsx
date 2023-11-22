import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="text-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Chima</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline hover:underline text-slate-700">
            <Link to={"/"}>Home </Link>
          </li>
          <li className=" hover:underline text-slate-700">
            <Link to={"/about"}>About</Link>
          </li>
          {currentUser ? (
            <Link to={"/profile"}>
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
                loading="lazyloading"
              />
            </Link>
          ) : (
            <li className=" hover:underline text-slate-700">
              <Link to={"/sign-in"}>Sign in</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
