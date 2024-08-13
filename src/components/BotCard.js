
import React from 'react';

function BotCard({ bot, handleClick, actionText, dischargeBot }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} width="150" />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => handleClick(bot)}>{actionText}</button>
      {dischargeBot && (
        <button onClick={() => dischargeBot(bot)} style={{ backgroundColor: 'red', color: 'white' }}>Discharge</button>
      )}
    </div>
  );
}

export default BotCard;
