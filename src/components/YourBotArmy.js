// src/components/YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {army.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={releaseBot} actionText="Release" dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
