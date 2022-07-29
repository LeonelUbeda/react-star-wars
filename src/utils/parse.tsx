export const getCharacterIDFromURL = (value: string) => {
  return value.split("/")[5];
};

export const getMovieIDFromURL = (value: string) => {
  return value.split("/")[5];
};
