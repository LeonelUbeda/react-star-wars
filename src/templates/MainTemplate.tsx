import { Link } from "react-router-dom";

const MainTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="py-1 bg-gray-600 flex w-full">
        <nav className="flex mx-auto">
          <Link
            to="/"
            className="text-white text-lg font-bold hover:bg-gray-800 py-1 px-3 block rounded-md"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-white text-lg font-bold hover:bg-gray-800 py-1 px-3 block rounded-md"
          >
            Search
          </Link>
        </nav>
      </div>
      <div className="mt-4 mb-8">{children}</div>
    </>
  );
};

export default MainTemplate;
