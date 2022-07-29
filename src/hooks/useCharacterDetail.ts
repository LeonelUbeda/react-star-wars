import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import fetchAPI from "../services/fetchAPI";
import { charactersAtom } from "../store/movies";
import { CharacterT } from "../types/character";
import { getCharacterIDFromURL } from "../utils/parse";

type UseCharacterDetailArgsT = {
  id: string;
  isUrl?: boolean;
};

type UseCharacterDetailReturnT = {
  isLoading: boolean;
  data: CharacterT | undefined;
};

const useCharacterDetail = ({
  id,
  isUrl,
}: UseCharacterDetailArgsT): UseCharacterDetailReturnT => {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const parsedID = isUrl ? getCharacterIDFromURL(id) : id;

  const [current, setCurrent] = useState(
    characters.find(
      (character) => getCharacterIDFromURL(character.url) === parsedID
    )
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!current) {
      setIsLoading(true);
      fetchAPI<CharacterT>(`people/${parsedID}`)
        .then((data) => {
          console.log(data, "siuuu");
          setCurrent(data);
          setCharacters((state) => [...state, data]);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return {
    isLoading,
    data: current,
  };
};

export default useCharacterDetail;
