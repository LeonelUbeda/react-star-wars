import cn from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={cn(
        className,
        "text-xs",
        "sm:text-sm py-1 px-2 bg-purple-600 rounded-lg text-white font-semibold focus:ring-2 focus:ring-purple-400",
        "md:text-md md:py-2 md:px-3"
      )}
      {...props}
    />
  );
};

export default ActionButton;
