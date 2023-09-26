import { Header } from "../../components/Header";

import { Container, Subtitle, Text, Title } from "./styles";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Hero App";
  }, []);
  return (
    <Container>
      <Header />
      <Title>Bem-vindo ao emocionante mundo do "Duelo de Heróis"!</Title>

      <Subtitle>Descrição do Jogo:</Subtitle>
      <Text>
        "Duelo de Heróis" é um jogo de cartas fascinante que permite que você se
        transforme em um herói lendário e enfrente desafios épicos em duelos
        emocionantes.
      </Text>
      <Subtitle>Regras do Duelo:</Subtitle>
      <Text>
        Você terá a oportunidade de montar um deck poderoso, composto por um
        máximo de 5 cartas, e usar esse deck para desafiar quatro oponentes
        distintos. Cada carta possui uma classificação de maestria, sendo ela
        ouro, prata ou bronze, além de atributos únicos, como inteligência,
        força, velocidade, resistência, destreza e poder.
      </Text>
      <Subtitle>Montando o Seu Deck:</Subtitle>
      <Text>
        Sua jornada começa com a criação de um deck estratégico. Escolha
        sabiamente suas cartas para formar um time imbatível. Lembre-se de que a
        combinação certa de habilidades e maestria pode fazer toda a diferença
        em suas batalhas.
      </Text>
      <Subtitle>Objetivo do Jogo:</Subtitle>
      <Text>
        Prepare-se para duelar, aprimorar suas habilidades, e conquistar a
        vitória contra adversários habilidosos. Ao vencer esses desafios, você
        estará um passo mais perto de se tornar o Herói Supremo. Agora é a sua
        hora de brilhar! Monte seu deck, explore suas habilidades e mergulhe em
        um mundo cheio de aventuras e estratégia em "Duelo de Heróis". A
        diversão está apenas começando!
      </Text>
    </Container>
  );
}
