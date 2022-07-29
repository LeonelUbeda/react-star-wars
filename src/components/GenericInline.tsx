import cn from "classnames";
import ArrowButton from "./common/ArrowButton";

type Props = {
  isLoading?: boolean;
  text?: string;
  onClick?: () => void;
};

const GenericInline = ({ onClick, isLoading = false, text }: Props) => {
  return (
    <div
      className={cn("py-2 px-3 rounded-md flex", {
        "bg-gray-600": isLoading,
        "animate-pulse": isLoading,
        "bg-gray-800": !isLoading,
      })}
    >
      {isLoading && <span className="text-gray-500">Loading</span>}
      {!isLoading && <span className="text-gray-200">{text}</span>}
      {!isLoading && <ArrowButton className="ml-auto" onClick={onClick} />}
    </div>
  );
};

export default GenericInline;
