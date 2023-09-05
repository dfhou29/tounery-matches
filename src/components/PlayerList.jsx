import Player from './Player';

function PlayerList(props) {

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {
        props.playerData.map((player, index) => {
          return (
            <Player key={index}
                    gamertag={player.gamerTag}
                    firstName={player.firstName}
                    lastName={player.lastName}
                    wins={player.wins}
            />
          )
        })
      }

    </section>
  )
}

export default PlayerList;