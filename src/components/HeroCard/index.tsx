import { Hero } from "../../interfaces/hero";
import {
  Card,
  Image,
  Name,
} from "./style";
import { useState } from "react";
import HeroModal from "../HeroModal";
import { StatsTable } from "../Stats";

type Props = {
  hero: Hero;
};


export function HeroCard({ hero }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function handleModal(){
    setIsOpen(!modalIsOpen);
  }

  return (
    <Card key={hero.id} maestry={hero.maestry} onClick={handleModal}>
      <HeroModal
        isOpen={modalIsOpen}
        handleModal={handleModal}
        hero={hero}

      />
      <Image src={hero.images.sm} alt={hero.name} />
      <Name>{hero.name}</Name>
      <StatsTable
        hero={hero}
      />
    </Card>
  );
}
