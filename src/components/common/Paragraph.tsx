import cn from "classnames";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ className, ...props }: Props) => {
  return <p className={cn("text-gray-300", className)} {...props}></p>;
};

export default Paragraph;
