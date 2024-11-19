import create from 'zustand';
import { persist } from 'zustand/middleware';

interface CardState {
  cards: { id: number; title: string; description: string; isExpanded: boolean }[];
  deletedCards: { id: number; title: string }[];
  addCard: (card: { id: number; title: string; description: string }) => void;
  toggleExpand: (id: number) => void;
  deleteCard: (id: number) => void;
  revealDeleted: () => void;
}

export const useCardStore = create<CardState>(
  persist(
    (set) => ({
      cards: [],
      deletedCards: [],
      addCard: (card) =>
        set((state) => ({ cards: [...state.cards, { ...card, isExpanded: false }] })),
      toggleExpand: (id) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id ? { ...card, isExpanded: !card.isExpanded } : card
          ),
        })),
      deleteCard: (id) =>
        set((state) => {
          const cardToDelete = state.cards.find((card) => card.id === id);
          return {
            cards: state.cards.filter((card) => card.id !== id),
            deletedCards: cardToDelete
              ? [...state.deletedCards, { id: cardToDelete.id, title: cardToDelete.title }]
              : state.deletedCards,
          };
        }),
      revealDeleted: () => set((state) => ({ deletedCards: state.deletedCards })),
    }),
    {
      name: 'card-storage', // Klucz dla localStorage
    }
  )
);
