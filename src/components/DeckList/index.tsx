import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/hero";
import { Container } from "./styles";
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
      {heroList.map((hero) => (
        <HeroCard hero={hero} />
      ))}
    </Container>
  );
}
