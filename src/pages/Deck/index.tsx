import { useEffect } from "react";
import { DeckList } from "../../components/DeckList";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Deck() {
  useEffect(() => {
    document.title = "Hero App - Decks";
  }, []);
  return (
    <Container>
      <Header />
      <DeckList />;
    </Container>
  );
}
