import { useState } from "react";
import {
  Button,
  Container,
  DuelContainer,
  DuelTeam,
  Result,
  SelectFighter,
  SelectFighterContainer,
  SelectFighterOption,
  SelectFighterOptionContainer,
  Title,
} from "./style";
import { getDeck } from "../../providers/storage";
import { makeRandonDeck } from "../../providers/hero";
import { Hero } from "../../interfaces/hero";
import { HeroCard } from "../HeroCard";
import { duelists } from "../../data/duelist";
import { Loading } from "../Loading";

export function DuelCard() {
  const [modalFight, setModalFight] = useState(true);
  const [duelistDeck, setDuelistDeck] = useState<Hero[]>([]);
  const [myDeck, setMyDeck] = useState<Hero[]>([]);
  const [duelist, setDuelist] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleModalFight() {
    setModalFight(!modalFight);
  }

  function calculateWinner() {
    const myDeckStats = myDeck.reduce((acc, curr) => {
      return acc + Number(curr.powerstats.combat);
    }, 0);

    const duelistDeckStats = duelistDeck.reduce((acc, curr) => {
      return acc + Number(curr.powerstats.combat);
    }, 0);

    if (myDeckStats > duelistDeckStats) {
      return "Você ganhou";
    } else if (myDeckStats < duelistDeckStats) {
      return `${duelist} venceu`;
    } else {
      return "Empate";
    }
  }

  async function handleDuel(name: string) {
    setIsLoading(true);
    const mydeck = getDeck();

    const duelistDeck = await makeRandonDeck();

    setDuelist(name);
    setDuelistDeck(duelistDeck);
    setMyDeck(mydeck);
    handleModalFight();
    setIsLoading(false);
  }

  return (
    <Container>
      {
        <Title>
          {modalFight ? "Escolha seu oponente" : "Resultado da batalha"}
        </Title>
      }
      {modalFight ? (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <SelectFighterContainer>
              <SelectFighterOptionContainer>
                {duelists.map((duelist) => (
                  <SelectFighterOption
                    key={duelist.name}
                    onClick={() => handleDuel(duelist.name)}
                  >
                    <SelectFighter src={duelist.image} alt={duelist.name} />
                    <h2>{duelist.name}</h2>
                  </SelectFighterOption>
                ))}
              </SelectFighterOptionContainer>
            </SelectFighterContainer>
          )}
        </>
      ) : (
        <>
          <Button onClick={handleModalFight}>Voltar</Button>
          <Result win={calculateWinner() === "Você ganhou"}>
            <h1>{calculateWinner()}</h1>
          </Result>
          <DuelContainer>
            <DuelTeam>
              <h2>Meu Deck</h2>
              {myDeck.map((card) => (
                <HeroCard hero={card} />
              ))}
            </DuelTeam>
            <DuelTeam>
              <h2>{duelist}</h2>
              {duelistDeck.map((card) => (
                <HeroCard hero={card} />
              ))}
            </DuelTeam>
          </DuelContainer>
        </>
      )}
    </Container>
  );
}
