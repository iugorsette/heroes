import { useEffect, useState } from "react";
import { Hero } from "../../interfaces/hero";
import { getHeroList } from "../../providers/hero";
import {
  Container,
  SearchContainer,
  FilterButton,
  SearchInput,
  FilterIcon,
  FilterModal,
  SelectOrderBy,
  SelectOrderByOption,
} from "./styles";
import { HeroCard } from "../HeroCard";

export function HeroList() {
  const [orderByStats, setOrderByStats] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredList, setFilteredList] = useState<Hero[]>([]);
  const [heroList, setHeroList] = useState<Hero[]>([]);

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
    console.log(orderByStats);
    getHeroList().then((res) => {
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
    <>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search hero" onChange={search} />
        <FilterButton onClick={handleFilterModal}>
          <FilterIcon />
        </FilterButton>
      </SearchContainer>
      {isFilterModalOpen && (
        <FilterModal>
          <SelectOrderBy
            onChange={(event) => setOrderByStats(event.target.value === "true")}
          >
            <SelectOrderByOption value="true">Order by stats</SelectOrderByOption>
            <SelectOrderByOption value="false">Order by name</SelectOrderByOption>
          </SelectOrderBy>
        </FilterModal>
      )}
      <Container>
        {filteredList.map((hero) => (
          <HeroCard hero={hero} />
        ))}
      </Container>
    </>
  );
}
