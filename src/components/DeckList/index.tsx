import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/hero";
import { Button, Container, Content, Description } from "./styles";
import { HeroCard } from "../HeroCard";
import { getDeck } from "../../providers/storage";

export function DeckList() {
  const [heroList, setHeroList] = useState<Hero[]>([]);

  useEffect(() => {
    const deck = getDeck();
    setHeroList(deck);
  }, []);
  return (
    <Container>
      {heroList.length === 0 ? (
        <Content>
          <Description>Adicione suas cartas preferidas e monte o seu deck</Description>
          <Button onClick={() => (window.location.href = "/")}>
            Ver Cartas
          </Button>
        </Content>
      ) : (
        heroList.map((hero) => <HeroCard hero={hero} />)
      )}
    </Container>
  );
}
