import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/hero";
import { getHeroList } from "../../providers/hero";
import {
  Container,
  SearchContainer,
  FilterButton,
  SearchInput,
  FilterIcon,
  ContentList,
} from "./styles";
import { HeroCard } from "../HeroCard";
import { FilterList } from "../FilterList";
import { Loading } from "../Loading";

export function HeroList() {
  const [orderByStats, setOrderByStats] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredList, setFilteredList] = useState<Hero[]>([]);
  const [heroList, setHeroList] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleShowOnlyHeroes() {
    const filtered = heroList.filter((hero) => {
      return hero.biography.alignment === "good";
    });
    setFilteredList(filtered);
  }

  function handleFilterModal() {
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value !== "") {
      const filtered = heroList.filter((hero) => {
        return hero.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredList(filtered);
    } else {
      setFilteredList(heroList);
    }
  }

  useEffect(() => {
    getHeroList().then((res) => {
      setIsLoading(false);
      setHeroList(res);
      if (orderByStats) {
        const sortedList = [...res].sort((a, b) => {
          const aStats = Object.values(a.powerstats).reduce(
            (acc, curr) => acc + Number(curr),
            0
          );
          const bStats = Object.values(b.powerstats).reduce(
            (acc, curr) => acc + Number(curr),
            0
          );
          return bStats - aStats;
        });
        setFilteredList(sortedList);
      } else {
        setFilteredList(res);
      }
    });
  }, [orderByStats]);

  return (
    <Container>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search hero" onChange={search} />
        <FilterButton onClick={handleFilterModal}>
          <FilterIcon />
        </FilterButton>
      </SearchContainer>
      <FilterList
        isFilterModalOpen={isFilterModalOpen}
        setOrderByStats={setOrderByStats}
        handleShowOnlyHeroes={handleShowOnlyHeroes}
      />
      <ContentList>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {filteredList.map((hero) => (
              <HeroCard hero={hero} />
            ))}
          </>
        )}
      </ContentList>
    </Container>
  );
}
