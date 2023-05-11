import useFetch from "../hooks/useFetch";

export default function Planets({ planet }) {
  const { data } = useFetch(planet);
  return <>{data && <li className="character-list">{data.name}</li>}</>;
}
