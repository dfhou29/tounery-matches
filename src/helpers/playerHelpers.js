export const preparePlayerData  = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArr, matchData) => {
  for (const player of playerDataArr) {

    player.wins = matchData.reduce((acc, cur) => {
        if (cur.winner === player.gamerTag) {
          return acc++;
        } else {
          return acc;
        }
    }, 0);

  }
}