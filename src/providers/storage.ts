import { Hero } from "../interfaces/hero";

export function getDeck() {
  const deck = localStorage.getItem("deck");
  if (deck) {
    return JSON.parse(deck);
  }
  return [];
}

export function saveDeck(deck: Hero[]) {
  localStorage.setItem("deck", JSON.stringify(deck));
}

export function removeCard(card: Hero) {
  const deck = getDeck();
  const newDeck = deck.filter((item: Hero) => item.id !== card.id);
  saveDeck(newDeck);
}

export function clearDeck() {
  localStorage.removeItem("deck");
}

export function checkCardBelongDeck(hero: Hero) {
  const deck = getDeck();
  return deck.some((item: Hero) => item.id === hero.id);
}

export function addCardToDeck(card: Hero) {
  const deck = getDeck();
  !checkCardBelongDeck(card) && deck.push(card);
  saveDeck(deck);
}
