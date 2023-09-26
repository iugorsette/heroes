import { Hero, Maestry } from "../interfaces/hero";

export async function getHeroList(): Promise<Hero[]> {
  const response = await fetch(
    "http://homologacao3.azapfy.com.br/api/ps/metahumans"
  );
  const data = await response.json();
  data.map((hero: Hero) => {
    hero.maestry = calculateMaestry(hero);
    hero.statsSum = getStatsSum(hero);
  });

  return data;
}
function getStatsSum(hero: Hero): number {
  return Object.values(hero.powerstats).reduce((a, b) => a + b, 0);
}

function calculateMaestry(hero: Hero): Maestry {
  const sum = getStatsSum(hero);
  if (sum > 300 && sum <= 499) {
    return "Silver";
  }
  if (sum > 500) {
    return "Gold";
  }
  return "Bronze";
}

export async function makeRandonDeck() {
  const deck: Hero[] = [];
  for (let i = 0; i < 5; i++) {
    deck.push(await getRandomHero());
  }
  return deck;
}

export async function getRandomHero(): Promise<Hero> {
  const hero = await getHeroList().then((heroes) => {
    const randomIndex = Math.floor(Math.random() * heroes.length);
    return heroes[randomIndex];
  });

  return hero

}
