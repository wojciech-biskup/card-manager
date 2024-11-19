import React from 'react';
import { useCardStore } from '../store';

const List = () => {
  const { cards, toggleExpand, deleteCard } = useCardStore();

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          {card.isExpanded && <p>{card.description}</p>}
          <button onClick={() => toggleExpand(card.id)}>
            {card.isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button onClick={() => deleteCard(card.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
