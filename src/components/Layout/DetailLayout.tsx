type Props = {
  image: string;
};

const DetailLayout = ({ image, children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="px-2">
      <div className="flex flex-col max-w-sm mx-auto md:flex-row md:max-w-4xl md:items-start">
        <img className="rounded-md md:w-1/3 flex-none md:mr-4" src={image} />
        <div className="md:w-2/3">{children}</div>
      </div>
    </div>
  );
};

export default DetailLayout;
