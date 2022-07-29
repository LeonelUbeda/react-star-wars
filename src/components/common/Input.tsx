import cn from "classnames";
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={cn(
        className,
        "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-white bg-gray-600 focus:outline-none focus:shadow-outline"
      )}
      {...props}
    />
  );
};

export default Input;
