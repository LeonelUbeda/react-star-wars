import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Input from "../components/common/Input";
import Loading from "../components/common/Loading";
import ResponsiveList from "../components/ResponsiveList";
import useSearch from "../hooks/useSearch";
import { getCharacterIDFromURL } from "../utils/parse";
import { getCharacterDetailURL, getMovieDetailURL } from "../utils/urls";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { characters, isLoading, movies } = useSearch(search);

  return (
    <div className="px-2">
      <div className="md:max-w-4xl mx-auto">
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search ..."
        />
        <Loading isLoading={isLoading} />
        <div className="mt-4">
          {!isLoading && characters.length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold text-2xl text-white text-center mb-2">
                Characters
              </h3>
              <ResponsiveList>
                {characters.map(({ url, name }) => (
                  <Card
                    key={name}
                    buttonText="View details"
                    title={name}
                    onClick={() => navigate(getCharacterDetailURL(url))}
                    image={`/images/characters/${getCharacterIDFromURL(
                      url
                    )}.jpg`}
                  />
                ))}
              </ResponsiveList>
            </div>
          )}

          {!isLoading && movies.length > 0 && (
            <div>
              <h3 className="font-bold text-2xl text-white text-center">
                Movies
              </h3>
              <ResponsiveList>
                {movies.map(({ episode_id, title }) => (
                  <Card
                    key={title}
                    buttonText="View details"
                    title={title}
                    onClick={() => navigate(getMovieDetailURL(episode_id))}
                    image={`/images/movies/${episode_id}.jpg`}
                  />
                ))}
              </ResponsiveList>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
