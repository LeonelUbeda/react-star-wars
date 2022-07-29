import { useParams } from "react-router-dom";
import GenericDetail from "../components/common/GenericDetail";
import Loading from "../components/common/Loading";
import Paragraph from "../components/common/Paragraph";
import TitleExtra from "../components/common/TitleExtra";
import DetailLayout from "../components/Layout/DetailLayout";
import MovieInline from "../components/MovieInline";
import NotFound from "../components/NotFound";
import useCharacterDetail from "../hooks/useCharacterDetail";

const CharacterDetail = () => {
  const { characterId } = useParams();

  const { data: character, isLoading } = useCharacterDetail({
    id: characterId as string,
    isUrl: false,
  });

  return (
    <div>
      <Loading isLoading={isLoading} />
      {!isLoading && character && (
        <DetailLayout image={`/images/characters/${characterId}.jpg`}>
          <h1 className="text-left text-white font-bold mt-4 text-lg">
            {character.name}
          </h1>
          <TitleExtra className="mt-4">Description</TitleExtra>
          <Paragraph className="text-xs md:text-sm"></Paragraph>

          <TitleExtra className="mt-4">Details</TitleExtra>
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3">
            <GenericDetail
              title="Eye color"
              text={character.eye_color}
              className="mt-2"
            />

            <GenericDetail
              title="Gender"
              text={character.gender}
              className="mt-2"
            />

            <GenericDetail
              title="Total of films"
              text={character.films.length.toString()}
              className="mt-2"
            />

            <GenericDetail
              title="Hair Color"
              text={character.hair_color}
              className="mt-2"
            />

            <GenericDetail
              title="Height"
              text={`${character.height} cm`}
              className="mt-2"
            />

            <GenericDetail
              title="Skin color"
              text={character.skin_color}
              className="mt-2"
            />

            <GenericDetail
              title="Birth year"
              text={character.birth_year}
              className="mt-2"
            />
          </div>
          <TitleExtra className="mt-4 mb-2">Movies</TitleExtra>
          <div className="space-y-2">
            {character.films.map((movie) => (
              <MovieInline id={movie} key={movie} />
            ))}
          </div>
        </DetailLayout>
      )}
      {!isLoading && !character && <NotFound />}
    </div>
  );
};

export default CharacterDetail;
