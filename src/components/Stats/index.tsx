import { Hero } from "../../interfaces/hero";
import { Description, Span, Stats, Tooltip, TooltipText } from "./styles";

type Props = {
  hero: Hero;
};
export function StatsTable({ hero }: Props) {
  return (
    <Stats>
      <Description>
        <Tooltip>
          INT: <TooltipText>Intelligence</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.intelligence}>
          {hero.powerstats.intelligence}
        </Span>
      </Description>

      <Description>
        <Tooltip>
          STR: <TooltipText>Strength</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.strength}>{hero.powerstats.strength}</Span>
      </Description>

      <Description>
        <Tooltip>
          SPD: <TooltipText>Speed</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.speed}>{hero.powerstats.speed}</Span>
      </Description>

      <Description>
        <Tooltip>
          RES: <TooltipText>Durability</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.durability}>
          {hero.powerstats.durability}
        </Span>
      </Description>

      <Description>
        <Tooltip>
          PWD: <TooltipText>Power</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.power}>{hero.powerstats.power}</Span>
      </Description>

      <Description>
        <Tooltip>
          DEX: <TooltipText>Combat</TooltipText>
        </Tooltip>
        <Span size={hero.powerstats.combat}>{hero.powerstats.combat}</Span>
      </Description>
    </Stats>
  );
}
