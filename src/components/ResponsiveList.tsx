import cn from "classnames";
type Props = React.HTMLAttributes<HTMLDivElement>;

const ResponsiveList = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-1 gap-y-4 max-w-md md:gap-4 md:grid-cols-3 md:max-w-4xl mx-auto"
      )}
      {...props}
    />
  );
};

export default ResponsiveList;
