
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { DuelCard } from "../../components/DuelCard";

export function Duel() {
  useEffect(() => {
    document.title = "Hero App - Duel";
  }, []);
  return (
    <Container>
      <Header />
      <DuelCard />
    </Container>
  );
}
