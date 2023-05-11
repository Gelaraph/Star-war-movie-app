import useFetch from "../hooks/useFetch";

export default function Species({ specie }) {
  const { data } = useFetch(specie);

  return <>{data && <li className="specie-list">{data.name}</li>}</>;
}
