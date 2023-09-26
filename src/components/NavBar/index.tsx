import { Item, List } from "./styles";

export function NavBar() {
  return (
    <List>
      <Item href="/">Home</Item>
      <Item href="/Cards">Cartas</Item>
      <Item href="/Deck">Deck</Item>
      <Item href="/Duel">Duelo</Item>
    </List>
  );
}
