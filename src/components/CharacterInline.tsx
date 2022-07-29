import { useNavigate } from "react-router-dom";
import useCharacterDetail from "../hooks/useCharacterDetail";
import { getCharacterDetailURL } from "../utils/urls";
import GenericInline from "./GenericInline";

type Props = {
  id: string;
};

const CharacterInline = ({ id }: Props) => {
  const navigate = useNavigate();
  const { data: character, isLoading } = useCharacterDetail({
    id,
    isUrl: true,
  });

  return (
    <GenericInline
      isLoading={isLoading}
      text={character?.name}
      onClick={() => navigate(getCharacterDetailURL(id))}
    />
  );
};

export default CharacterInline;
