import useFetch from "../hooks/useFetch";

export default function Characters({ character }) {
  const { data } = useFetch(character);

  return (
    <>
      {data && (
        <li className="character-list" key={data.name}>
          {data.name}
        </li>
      )}
    </>
  );
}
