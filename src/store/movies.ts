import { atomWithStorage } from "jotai/utils";
import { CharacterT } from "../types/character";
import { MovieT } from "../types/movies";

export const moviesAtom = atomWithStorage<MovieT[] | undefined>(
  "movies-data",
  undefined
);

export const charactersAtom = atomWithStorage<CharacterT[]>(
  "characters-data",
  []
);
