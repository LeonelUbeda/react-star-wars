import { useEffect, useState } from "react";
import { CharacterT } from "../types/character";
import { MovieT } from "../types/movies";
import debounce from "lodash.debounce";
import fetchAPI from "../services/fetchAPI";
import { APIResultListT } from "../types/api";

type UseSearchReturnT = {
  movies: MovieT[];
  characters: CharacterT[];
  isLoading: boolean;
};

const useSearch = (value: string, delay: number = 1000): UseSearchReturnT => {
  const [currentMovies, setCurrentMovies] = useState<MovieT[]>([]);
  const [currentCharacters, setCurrentCharacters] = useState<CharacterT[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value !== "") {
      startSearch();
    }

    return () => startSearch.cancel();
  }, [value]);

  const startSearch = debounce(() => {
    setIsLoading(true);
    Promise.all([
      fetchAPI<APIResultListT<CharacterT>>(`people/?search=${value}`)
        .then((response) => response.results)
        .then((characters) => setCurrentCharacters(characters)),
      fetchAPI<APIResultListT<MovieT>>(`films/?search=${value}`)
        .then((response) => response.results)
        .then((movies) => setCurrentMovies(movies)),
    ]).finally(() => setIsLoading(false));
  }, delay);

  return {
    movies: currentMovies,
    characters: currentCharacters,
    isLoading,
  };
};

export default useSearch;
