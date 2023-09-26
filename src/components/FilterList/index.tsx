import {
  CheckBoxFilter,
  CheckBoxFilterLabel,
  FilterModal,
  SelectOrderBy,
  SelectOrderByOption,
} from "./styles";

type Props = {
  isFilterModalOpen: boolean;
  setOrderByStats: (value: boolean) => void;
  handleShowOnlyHeroes: () => void;
};
export function FilterList({
  isFilterModalOpen,
  setOrderByStats,
  handleShowOnlyHeroes,
}: Props) {
  return (
    <>
      {isFilterModalOpen && (
        <FilterModal>
          <CheckBoxFilter  onChange={handleShowOnlyHeroes} />
          <CheckBoxFilterLabel>Mostrar somente herois</CheckBoxFilterLabel>
          <SelectOrderBy
            onChange={(event) => setOrderByStats(event.target.value === "true")}
          >
            <SelectOrderByOption value="true">
              Order by stats
            </SelectOrderByOption>
            <SelectOrderByOption value="false">
              Order by name
            </SelectOrderByOption>
          </SelectOrderBy>
        </FilterModal>
      )}
    </>
  );
}
