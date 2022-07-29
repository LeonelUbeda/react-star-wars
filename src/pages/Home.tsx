import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ResponsiveList from "../components/ResponsiveList";
import useMovies from "../hooks/useMovies";
import { getMovieDetailURL } from "../utils/urls";

const Home = () => {
  const { isLoading, data: movies } = useMovies();
  const navigate = useNavigate();
  return (
    <div className="px-2">
      {isLoading && <h1>Loading</h1>}
      {movies && (
        <ResponsiveList>
          {movies.map((movie) => (
            <Card
              key={movie.title}
              title={movie.title}
              description={`${movie.opening_crawl.slice(0, 80)}...`}
              buttonText="View Details"
              onClick={() => navigate(getMovieDetailURL(movie.episode_id))}
              image={`/images/movies/${movie.episode_id}.jpg`}
            />
          ))}
        </ResponsiveList>
      )}
    </div>
  );
};

export default Home;
