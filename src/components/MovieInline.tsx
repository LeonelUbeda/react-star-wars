import { useNavigate } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { getMovieIDFromURL } from "../utils/parse";
import { getMovieDetailURL } from "../utils/urls";
import GenericInline from "./GenericInline";

type Props = {
  id: string;
};

const MovieInline = ({ id }: Props) => {
  const navigate = useNavigate();
  const { data: character, isLoading } = useMovieDetail({
    id,
    isUrl: true,
  });

  return (
    <GenericInline
      isLoading={isLoading}
      text={character?.title}
      onClick={() => navigate(getMovieDetailURL(getMovieIDFromURL(id)))}
    />
  );
};

export default MovieInline;
