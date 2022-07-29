import cn from "classnames";
type Props = React.HTMLAttributes<HTMLHeadingElement>;

const TitleExtra = ({ className, ...props }: Props) => {
  return (
    <h3
      className={cn(className, "text-left text-gray-300 font-bold")}
      {...props}
    />
  );
};

export default TitleExtra;
