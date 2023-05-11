import useFetch from "../hooks/useFetch";

export default function Species({ starship }) {
  const { data } = useFetch(starship);

  return <>{data && <li className="character-list">{data.name}</li>}</>;
}
