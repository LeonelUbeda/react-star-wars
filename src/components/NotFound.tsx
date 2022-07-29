import { useNavigate } from "react-router-dom";
import ActionButton from "./common/ActionButton";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-white mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-xl text-white mt-4 text-center">Not found</h2>
      <ActionButton
        className="mx-auto block mt-4"
        onClick={() => navigate("/")}
      >
        Go Home
      </ActionButton>
      <div className="mx-auto"></div>
    </div>
  );
};

export default NotFound;
