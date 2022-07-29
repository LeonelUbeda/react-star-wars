import cn from "classnames";

type Props = {
  title: string;
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

const GenericDetail = ({ title, text, className, ...props }: Props) => {
  return (
    <div className={cn("text-sm", className)} {...props}>
      <h6 className="text-gray-200 font-semibold">{title}</h6>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default GenericDetail;
