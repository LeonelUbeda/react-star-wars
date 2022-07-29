import ActionButton from "./common/ActionButton";
import Paragraph from "./common/Paragraph";

type Props = {
  image: string;
  onClick: () => void;
  buttonText: string;
  description?: string;
  title: string;
};

const Card = ({ image, onClick, buttonText, title, description }: Props) => {
  return (
    <div className="flex bg-gray-600 rounded-md px-2 py-2 md:h-auto md:py-4 md:px-4">
      <div className="flex items-start mx-auto w-4/5 md:flex-col md:w-auto">
        <img
          className="h-32 ml-2 md:h-auto md:w-full rounded-md md:mx-0"
          src={image}
        />
        <div className="w-full pl-4 h-full flex flex-col pb-2 md:mt-2 md:px-0">
          <h3 className="text-left text-white font-bold md:mb-2">{title}</h3>
          {description && (
            <Paragraph className="mt-1 md:mb-4 md:mt-2 text-xs">
              {description}
            </Paragraph>
          )}

          <ActionButton
            onClick={onClick}
            className="mt-4 w-fit md:mt-auto md:mx-auto"
          >
            {buttonText}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
