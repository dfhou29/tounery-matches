export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArr, matchData) => {
  const parsedPlayerData = [...playerDataArr];
  for (const player of parsedPlayerData) {

    player.wins = matchData.reduce((acc, cur) => {
      if (cur.winner === player.gamerTag) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

  }

  return parsedPlayerData;
}