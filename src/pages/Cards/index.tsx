import { Header } from "../../components/Header";
import { HeroList } from "../../components/HeroList";
import { Container } from "./styles";
import { useEffect } from "react";

export function Cards() {
  useEffect(() => {
    document.title = "Hero App - Cards";
  }, []);
  return (
      <Container>
        <Header />
        <HeroList />
      </Container>
  );
}
