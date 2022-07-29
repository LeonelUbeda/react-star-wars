import { useParams } from "react-router-dom";
import CharacterInline from "../components/CharacterInline";
import GenericDetail from "../components/common/GenericDetail";
import Loading from "../components/common/Loading";
import Paragraph from "../components/common/Paragraph";
import TitleExtra from "../components/common/TitleExtra";
import DetailLayout from "../components/Layout/DetailLayout";
import NotFound from "../components/NotFound";
import useMovieDetail from "../hooks/useMovieDetail";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading } = useMovieDetail({ id: movieId as string });
  return (
    <div>
      <Loading isLoading={isLoading} />
      {!isLoading && movie && (
        <DetailLayout image={`/images/movies/${movie.episode_id}.jpg`}>
          <h1 className="text-left text-white font-bold mt-4 text-lg">
            {movie.title}
          </h1>
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3">
            <GenericDetail
              title="Director"
              text={movie.director}
              className="mt-2"
            />
            <GenericDetail
              title="Producer"
              text={movie.producer}
              className="mt-2"
            />

            <GenericDetail
              title="Release date"
              text={movie.release_date}
              className="mt-2"
            />
          </div>

          <TitleExtra className="mt-4">Description</TitleExtra>
          <Paragraph className="text-xs md:text-sm">
            {movie.opening_crawl}
          </Paragraph>
          <TitleExtra className="mt-4">Characters</TitleExtra>
          <div className="my-4 space-y-2">
            {movie.characters.map((character) => (
              <CharacterInline id={character} key={character} />
            ))}
          </div>
        </DetailLayout>
      )}
      {!isLoading && !movie && <NotFound />}
    </div>
  );
};

export default MovieDetail;
