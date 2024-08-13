
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div>
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={enlistBot} actionText="Enlist" />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
