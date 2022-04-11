//import { Link } from "react-router-dom";

export const Person = ({ data }) => {
  const toProfile = "/about/" + data.name;

  return (
    <div>
      <a href={toProfile} onclick="() => bloquearButton();"><h2>{data.name}</h2></a>
      <p>Birth year: {data.birth_year}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};
