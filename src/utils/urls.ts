export const getMovieDetailURL = (id: number | string) => `/movies/${id}`;
export const getCharacterDetailURL = (id: string) =>
  `/characters/${id.split("/people/")[1]}`;
