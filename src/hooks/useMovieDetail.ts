import { MovieT } from "../types/movies";
import { getMovieIDFromURL } from "../utils/parse";
import useMovies from "./useMovies";

type UseMovieDetailArgsT = {
  id: string;
  isUrl?: boolean;
};

type UseMovieDetailReturnT = {
  isLoading: boolean;
  data: MovieT | undefined;
};

const useMovieDetail = ({
  id,
  isUrl,
}: UseMovieDetailArgsT): UseMovieDetailReturnT => {
  const { isLoading, data } = useMovies();
  const parsedID = isUrl ? Number(getMovieIDFromURL(id)) : Number(id);
  return {
    isLoading,
    data: data
      ? data.find((movie) => movie.episode_id === parsedID)
      : undefined,
  };
};

export default useMovieDetail;
