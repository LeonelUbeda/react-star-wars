import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import fetchAPI from "../services/fetchAPI";
import { moviesAtom } from "../store/movies";
import { MovieT } from "../types/movies";
import { APIResultListT } from "../types/api";

type UseMoviesReturnT = {
  isLoading: boolean;
  data: MovieT[] | undefined;
};

const useMovies = (): UseMoviesReturnT => {
  const [movies, setMovies] = useAtom(moviesAtom);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!movies) {
      setIsLoading(true);
      fetchAPI<APIResultListT<MovieT>>("films")
        .then((result) => result.results)
        .then((movies) => setMovies(movies))
        .then(() => setIsLoading(false));
    }
  }, []);

  return {
    isLoading,
    data: movies,
  };
};

export default useMovies;
