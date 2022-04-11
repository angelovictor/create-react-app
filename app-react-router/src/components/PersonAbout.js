export const PersonAbout = ({ data }) => {

    return (
      <div>
        <h2>{data.name}</h2>
        <p>Birth year: {data.birth_year}</p>
        <p>Gender: {data.gender}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Hair color: {data.hair_color}</p>
        <p>Skin color: {data.skin_color}</p>
        <p>Eye color: {data.eye_color}</p>
      </div>
    );
  };
  