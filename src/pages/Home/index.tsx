import { Header } from "../../components/Header";
import { HeroList } from "../../components/HeroList";
import { Container } from "./styles";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Hero App";
  }, []);
  return (
      <Container>
        <Header />
        <HeroList />
      </Container>
  );
}
