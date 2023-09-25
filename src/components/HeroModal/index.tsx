import { Hero } from "../../interfaces/hero";
import {
  addCardToDeck,
  checkCardBelongDeck,
  removeCard,
} from "../../providers/storage";
import { StatsTable } from "../Stats";
import {
  AddButton,
  Container,
  CloseButton,
  Cover,
  RemoveButton,
  Name,
  Description,
  Title,
  HeaderModal,
} from "./style";

type Props = {
  isOpen: boolean;
  handleModal: () => void;
  hero: Hero;
};

export default function HeroModal({ isOpen, handleModal, hero }: Props) {
  const isAdd = checkCardBelongDeck(hero);
  return (
    <Container isOpen={isOpen}>
      <HeaderModal>
        <Title>{hero.name}</Title>
        <CloseButton onClick={handleModal} />
      </HeaderModal>
      <Cover src={hero.images.lg} alt="" />
      <Name>{hero.biography.fullName}</Name>
      <Description>{hero.biography.placeOfBirth}</Description>
      <Description>{hero.biography.publisher}</Description>
      <Description>{hero.biography.alignment}</Description>
      <Description>{hero.biography.firstAppearance}</Description>
      <Description>{hero.biography.aliases}</Description>
      <Description>{hero.connections.groupAffiliation}</Description>
      <Description>{hero.connections.relatives}</Description>
      <StatsTable hero={hero} />

      {isAdd ? (
        <RemoveButton
          onClick={() => {
            removeCard(hero);
          }}
        >
          Remover do Deck
        </RemoveButton>
      ) : (
        <AddButton
          onClick={() => {
            addCardToDeck(hero);
          }}
        >
          Adicionar ao Deck
        </AddButton>
      )}
    </Container>
  );
}
