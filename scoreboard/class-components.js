

//create a react component
const Header = (props)=>{
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}
 
const Player = (props)=>{
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            <Counter/>
            
        </div>
    );
}

class Counter extends React.Component {

        state = {
            score: 0
        };


        incrementScore(){
            this.setState({
                score: this.state.score + 25 //this will work
            })
        }

//It's recommended that we update state based on previous state
        decrementScore(){
            this.setState(prevState=>{
                return{
                    score: prevState.score - 25 //this will work
                }
            })
        }

    render(){
        return (
            <div className="counter">
                    <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>-</button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
            </div>
        );
    }

}

//the uppermost arrangement

class App extends React.Component {


    state={
         players: [
            {
                name: "Guil",
                id:1
              },
              {
                name: "Treasure",
                id:2
              },
              {
                name: "Ashley",
                id:3
              },
              {
                name: "James",
                id:4
              }
        ]

    };

    handleRemovePlayer = (id)=>{
        this.setState(prevState=>{
            return {
                players: prevState.players.filter(player=> player.id !== id)
            }

        });

    }




    render(){
        return (
            <div className="scoreboard">
                    <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
                    {/* player list */}
                    {this.state.players.map( player=>
                        <Player 
                            name={player.name} 
                            key={player.id.toString()}
                            removePlayer= {this.handleRemovePlayer} 
                            id={player.id}
                        />
                    )}
                    
                   
            </div>
        );

    }

}




//rendering the react app
ReactDOM.render(
    <App initialPlayers/>,
    document.getElementById("root")
);











