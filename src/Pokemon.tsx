import "./App.css";
import { useGetPokemonByNameQuery } from "./services/pokemon";

interface PokemonProps {
  name: string;
  pollingInterval: number;
}

export default function Pokemon({ name, pollingInterval }: PokemonProps) {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    { pollingInterval },
  );

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
