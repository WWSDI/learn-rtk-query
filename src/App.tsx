import { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";

const pokemons = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

function App() {
  const [pollingInterval, setPollingInterval] = useState(0);

  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>No Polling</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {pokemons.map((pokemon, i) => (
          <Pokemon key={i} name={pokemon} pollingInterval={pollingInterval} />
        ))}
      </div>
    </div>
  );
}

export default App;
