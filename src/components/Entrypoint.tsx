import React from 'react';
import { useCardStore } from '../store';

const Entrypoint = () => {
  const { deletedCards, revealDeleted } = useCardStore();

  return (
    <div>
      <h2>Deleted Cards: {deletedCards.length}</h2>
      <button onClick={revealDeleted}>Reveal</button>
      {deletedCards.map((card) => (
        <div key={card.id} className="deleted-card">
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Entrypoint;
