import useFetch from "../hooks/useFetch";

export default function Species({ vehicle }) {
  const { data } = useFetch(vehicle);

  return <>{data && <li className="character-list">{data.name}</li>}</>;
}
