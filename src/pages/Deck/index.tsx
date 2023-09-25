import { DeckList } from "../../components/DeckList";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Deck() {
  return (
    <Container>
      <Header />
      <DeckList />;
    </Container>
  );
}
